import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Log Your Routine",
      description: "Effortlessly track your products, skin condition, and mood for AM/PM care.",
      image: "/log-routine.jpg",
    },
    {
      title: "Track Skin Mood",
      description: "Understand how your skin feels over time with consistent mood tracking.",
      image: "/track-mood.jpg",
    },
    {
      title: "View History",
      description: "Look back at past logs to uncover patterns and refine your routine.",
      image: "/view-history.jpg",
    },
  ];

  return (
    
    <main className="max-w-6xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
       <Image
            src="/logo.png"
            alt="AURA Skincare Tracker Logo"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
      <h1 className="text-5xl font-extrabold text-skin-plum mb-4 text-center">
        AURA Skincare Tracker
      </h1>
      <p className="text-lg text-skin-plum opacity-80 mb-12 text-center max-w-2xl mx-auto">
        Your personal skincare companion to log routines, monitor skin health, and glow with confidence.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-skin-cream p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-2xl font-semibold text-skin-plum mb-2">
              {feature.title}
            </h2>
            <p className="text-skin-plum opacity-80 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/dashboard"
          className="inline-block bg-skin-plum text-skin-cream px-8 py-3 text-lg font-medium rounded-full shadow-md hover:bg-skin-plum/90 transition duration-300"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
