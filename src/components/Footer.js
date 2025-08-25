// src/app/components/Footer.js

export default function Footer() {
  return (
    <footer className="w-full p-4 border-t text-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <p className="text-lg font-semibold">Created by: Brice Nelson</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Mad Libs Magic. All rights reserved.</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Need to report an issue? Contact: <a href="mailto:brice@devbybrice.com" className="text-blue-500 hover:underline">brice@devbybrice.com</a>
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://www.devbybrice.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Website
        </a>
        <a href="https://github.com/bnelsonemail" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/brice-a-nelson-p-e-mba-36b28b15/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
