"use client";

  import { useState, useEffect } from "react";

  export default function Dashboard() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
      const storedLogs = JSON.parse(localStorage.getItem("skincareLogs")) || [];
      setLogs(storedLogs.filter((log) => log.id && log.product));
    }, []);

    // Derive routines from logs
    const morningRoutine = Array.from(
      new Set(logs.filter((log) => log.time === "AM").map((log) => log.product))
    ).slice(0, 3);
    const eveningRoutine = Array.from(
      new Set(logs.filter((log) => log.time === "PM").map((log) => log.product))
    ).slice(0, 3);
    const routines = [
      {
        title: "Morning Routine",
        products: morningRoutine.length > 0 ? morningRoutine : ["No products logged"],
        time: "AM",
      },
      {
        title: "Evening Routine",
        products: eveningRoutine.length > 0 ? eveningRoutine : ["No products logged"],
        time: "PM",
      },
    ];

    // Get recent activity (last log)
    const recentActivity = logs.slice(0, 1);

    return (
      <div className="max-w-7xl mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold text-skin-plum mb-8 text-center">
          Skincare Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {routines.map((routine, index) => (
            <div
              key={`routine-${index}`}
              className="bg-skin-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-skin-plum mb-4">
                {routine.title}
              </h2>
              <p className="text-skin-plum mb-2">Time: {routine.time}</p>
              <ul className="list-disc list-inside text-skin-plum">
                {routine.products.map((product, i) => (
                  <li key={`product-${index}-${i}`}>{product}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-skin-rose p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-skin-plum mb-4 text-center">
            Recent Activity
          </h2>
          {recentActivity.length > 0 ? (
            recentActivity.map((activity, index) => (
              <p
                key={activity.id || `activity-${index}`}
                className="text-skin-plum text-center"
              >
                Logged {activity.product} ({activity.condition}, {activity.skinMood}) at {activity.timestamp}
              </p>
            ))
          ) : (
            <p className="text-skin-plum text-center">No recent activity.</p>
          )}
        </div>
      </div>
    );
  }