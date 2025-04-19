// src/app/layout.js
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-100">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/log" className="text-blue-500 hover:underline">
                Log
              </Link>
            </li>
            <li>
              <Link href="/history" className="text-blue-500 hover:underline">
                History
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}