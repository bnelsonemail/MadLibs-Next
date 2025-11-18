import Link from "next/link";
import PremiumOverview from "@/components/PremiumOverview";

export default function PremiumPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <PremiumOverview />

        <div className="mt-10 text-center">
          <Link
            href="/premium-poll"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Take the Premium User Poll →
          </Link>
        </div>
      </div>
    </main>
  );
}

