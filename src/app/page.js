// src/app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to AURA Skincare Tracker
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A simple, free app to track your skincare routine. Log products, monitor skin conditions, and see your progress over time.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/log"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Log Routine
          </Link>
          <Link
            href="/history"
            className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            View History
          </Link>
        </div>
      </div>
    </div>
  );
}