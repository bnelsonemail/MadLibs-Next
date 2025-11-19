import { turso } from "@/lib/turso";
import { hashIP } from "@/lib/hash-ip";

// Mark this route as dynamic to prevent static generation
export const dynamic = 'force-dynamic';

// Sanitization helper
function sanitizeText(text) {
  if (!text) return null;
  
  // Strip HTML tags and script content
  let sanitized = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  sanitized = sanitized.replace(/<[^>]+>/g, "");
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  return sanitized || null;
}

export async function POST(req) {
  try {
    // Check if turso client is initialized
    if (!turso) {
      return Response.json(
        { success: false, error: "Database not configured" },
        { status: 500 }
      );
    }

    const { wantsPremium, pricePoint, comment, suggestions } = await req.json();

    const userAgent = req.headers.get("user-agent") || "unknown";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? null;

    const salt = process.env.SALT_FOR_HASHING;
    const ipHash = salt ? await hashIP(ip, salt) : null;

    // Sanitize user input
    const sanitizedComment = sanitizeText(comment);
    const sanitizedSuggestions = sanitizeText(suggestions);

    await turso.execute({
      sql: `
        INSERT INTO poll_results 
          (wants_premium, price_point, comment, suggestions, user_agent, ip_hash)
        VALUES (?, ?, ?, ?, ?, ?)
      `,
      args: [wantsPremium, pricePoint, sanitizedComment, sanitizedSuggestions, userAgent, ipHash],
    });

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}

