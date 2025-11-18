import PremiumPollForm from "@/components/PremiumPollForm";

export default function PremiumPollPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">MadLibs Premium Feature Poll</h1>
        <p className="mb-6 text-center text-lg">
          Your feedback helps guide new features. This poll takes less than 30 seconds.
        </p>
        <PremiumPollForm />
      </div>
    </main>
  );
}

