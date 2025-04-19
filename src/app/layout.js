// src/app/layout.js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-100">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-blue-500 hover:underline">Home</a></li>
            <li><a href="/log" className="text-blue-500 hover:underline">Log</a></li>
            <li><a href="/history" className="text-blue-500 hover:underline">History</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}