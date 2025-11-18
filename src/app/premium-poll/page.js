import PremiumPollForm from "@/components/PremiumPollForm";

export default function PremiumPollPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">MadLibs Premium Feature Poll</h1>

        <p className="text-center max-w-xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
          We're exploring a possible <strong>optional premium version</strong> of MadLibs
          for users who want more advanced features — while keeping the current site
          <strong>100% free</strong> exactly as it is today.
          <br /><br />
          These are only ideas at this stage. Your feedback helps decide what features
          (if any) should be developed in the future.
        </p>

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

