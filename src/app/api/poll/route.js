import { turso } from "@/lib/turso";
import { hashIP } from "@/lib/hash-ip";

export async function POST(req) {
  try {
    const { wantsPremium, pricePoint, comment } = await req.json();

    const userAgent = req.headers.get("user-agent") || "unknown";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? null;

    const salt = process.env.SALT_FOR_HASHING;
    const ipHash = salt ? await hashIP(ip, salt) : null;

    await turso.execute({
      sql: `
        INSERT INTO poll_results 
          (wants_premium, price_point, comment, user_agent, ip_hash)
        VALUES (?, ?, ?, ?, ?)
      `,
      args: [wantsPremium, pricePoint, comment, userAgent, ipHash],
    });

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}

