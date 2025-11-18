import Link from "next/link";
import PremiumPollForm from "@/components/PremiumPollForm";

export default function PremiumPollPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">MadLibs Premium Feature Poll</h1>

        <p className="text-center max-w-xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
          Help shape MadLibs Magic Premium! Your feedback decides which features we build
          first. Scroll down to take the poll — or{" "}
          <Link href="/premium" className="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-700 dark:hover:text-blue-300">
            click here
          </Link>{" "}
          to see the Premium Overview and Feature Roadmap.
        </p>
        
        <div className="text-center max-w-xl mx-auto mb-6 bg-green-50 dark:bg-gray-800 p-4 rounded-lg border-2 border-green-300 dark:border-green-700">
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            See everything coming in Premium →{" "}
            <Link href="/premium" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300">
              Premium Overview
            </Link>
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow">
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Possible Premium Features:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
            <li>Save your custom MadLibs permanently</li>
            <li>Share your MadLibs with friends via link</li>
            <li>Unlimited custom story creation</li>
            <li>Advanced story templates and genres</li>
            <li>Optional AI-assisted story generation</li>
          </ul>
        </div>

        <PremiumPollForm />
      </div>
    </main>
  );
}

