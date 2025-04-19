"use client";

  import { useState, useEffect } from "react";

  export default function HistoryPage() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
      const storedLogs = JSON.parse(localStorage.getItem("skincareLogs")) || [];
      setLogs(storedLogs.filter((log) => log.id && log.product)); // Filter valid logs
    }, []);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-skin-plum mb-6 text-center">
          Skincare History
        </h1>
        {logs.length > 0 ? (
          <table className="w-full bg-skin-cream rounded-lg shadow-md">
            <thead>
              <tr className="bg-skin-rose">
                <th className="p-3 text-skin-plum font-semibold text-left">Product</th>
                <th className="p-3 text-skin-plum font-semibold text-left">Condition</th>
                <th className="p-3 text-skin-plum font-semibold text-left">Mood</th>
                <th className="p-3 text-skin-plum font-semibold text-left">Time</th>
                <th className="p-3 text-skin-plum font-semibold text-left">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-gray-200">
                  <td className="p-3 text-skin-plum">{log.product}</td>
                  <td className="p-3 text-skin-plum">{log.condition}</td>
                  <td className="p-3 text-skin-plum">{log.skinMood}</td>
                  <td className="p-3 text-skin-plum">{log.time}</td>
                  <td className="p-3 text-skin-plum">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-skin-plum text-center">No logs found.</p>
        )}
      </div>
    );
  }