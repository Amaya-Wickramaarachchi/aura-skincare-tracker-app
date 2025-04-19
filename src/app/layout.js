import Link from "next/link";
  import "./globals.css";

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <nav className="bg-skin-cream p-4 shadow-md">
            <ul className="flex space-x-6 max-w-7xl mx-auto">
              <li>
                <Link
                  href="/"
                  className="text-skin-plum hover:text-skin-teal font-semibold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-skin-plum hover:text-skin-teal font-semibold transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-skin-plum hover:text-skin-teal font-semibold transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/log"
                  className="text-skin-plum hover:text-skin-teal font-semibold transition-colors"
                >
                  Log
                </Link>
              </li>
              <li>
                <Link
                  href="/history"
                  className="text-skin-plum hover:text-skin-teal font-semibold transition-colors"
                >
                  History
                </Link>
              </li>
            </ul>
          </nav>
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    );
  }