export default function PremiumOverview() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">
          MadLibs Magic — Premium Preview ✨
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 italic">
          A fun + grown-up approach to creating chaos with words.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          🎉 Welcome to the Future of MadLibs Magic!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          MadLibs should feel wild, goofy, creative, and occasionally unhinged.
          Premium takes that energy and says: &quot;Yes. MORE.&quot;
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
          This is a real upgrade, carefully built by an actual developer, designed to make
          MadLib creation faster, easier, and way more fun.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          ⭐ Free vs Premium: What You Get
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Free</th>
                <th className="p-4 text-center font-semibold">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 text-gray-800 dark:text-gray-200">Existing stories</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <td className="p-4 text-gray-800 dark:text-gray-200">Fill nouns/verbs</td>
                <td className="p-4 text-center text-2xl">✅</td>
                <td className="p-4 text-center text-2xl">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 text-gray-800 dark:text-gray-200">Category library</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">Basic</td>
                <td className="p-4 text-center text-blue-600 dark:text-blue-400 font-semibold">Expanded</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <td className="p-4 text-gray-800 dark:text-gray-200">Dynamic field detection</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 text-gray-800 dark:text-gray-200">Reusable placeholders</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <td className="p-4 text-gray-800 dark:text-gray-200">Unlimited custom creator</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 text-gray-800 dark:text-gray-200">Save/share creations</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-2xl">✅</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <td className="p-4 text-gray-800 dark:text-gray-200">Formatting</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">Bold, italics, breaks</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 text-gray-800 dark:text-gray-200">Theme packs</td>
                <td className="p-4 text-center text-2xl">❌</td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">Pirates, Space, Noir</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="p-4 text-gray-800 dark:text-gray-200">Poll-based updates</td>
                <td className="p-4 text-center text-gray-400 dark:text-gray-600">-</td>
                <td className="p-4 text-center text-2xl">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          💡 Premium Unlocks
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              1. Custom Story Builder
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Write anything. Use <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{"{noun1}"}</code>, <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{"{weirdAnimal}"}</code>, etc.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              2. Dynamic Placeholders
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              No limits—create any field name you want.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              3. Reusable Inputs
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Use <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{"{noun1}"}</code> many times throughout your story.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              4. Formatting
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Multiple paragraphs, bold, italics.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              5. Theme Packs
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Pirates, Noir, Space, Fantasy, Holidays.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              6. Saving & Sharing
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Save creations, share links, replay stories.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          📣 Premium Poll
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Users can vote on features and suggest ideas. Premium evolves based on YOU. 
          Take the poll and let us know what you want next.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          💚 MadLibs Magic Will Always Stay Free
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The current app you love isn&apos;t going anywhere. Premium is an optional upgrade 
          for those who want more creative control—but everything that&apos;s free today stays free forever.
        </p>
      </div>
    </div>
  );
}

