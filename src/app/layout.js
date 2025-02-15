// src/app/layout.js

import { MadLibsProvider } from "@/context/MadLibsContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemedApp from "@/components/ThemedApp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ Import Footer
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <MadLibsProvider>
            <ThemedApp>
              <Navbar />
              <main className="p-6 flex-grow">{children}</main> {/* ✅ Allow page content to expand */}
              <Footer /> {/* ✅ Footer always at bottom */}
            </ThemedApp>
          </MadLibsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
