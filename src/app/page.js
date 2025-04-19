import Link from "next/link";

  export default function Home() {
    const features = [
      {
        title: "Log Your Routine",
        description: "Easily record products, skin condition, and mood for AM/PM routines.",
      },
      {
        title: "Track Skin Mood",
        description: "Monitor how your skin feels over time with mood tracking.",
      },
      {
        title: "View History",
        description: "Review past logs to spot trends and optimize your skincare.",
      },
    ];

    return (
      <div className="max-w-5xl mx-auto p-6 min-h-screen">
        <h1 className="text-4xl font-bold text-skin-plum mb-6 text-center">
          AURA Skincare Tracker
        </h1>
        <p className="text-lg text-skin-plum mb-8 text-center">
          Your personal skincare companion to log routines, track skin health, and achieve radiant skin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-skin-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-skin-plum mb-2">
                {feature.title}
              </h2>
              <p className="text-skin-plum">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/dashboard"
            className="inline-block bg-skin-plum text-skin-cream px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }