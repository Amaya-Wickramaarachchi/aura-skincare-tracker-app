// src/app/history/page.js
"use client";
import { useState, useEffect } from "react";

export default function History() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("skincareLogs") || "[]");
    setLogs(storedLogs);
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Skincare History</h1>
      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : (
        <ul className="space-y-4">
          {logs.map((log, index) => (
            <li key={index} className="p-4 border rounded">
              <p><strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}</p>
              <p><strong>Product:</strong> {log.product}</p>
              <p><strong>Condition:</strong> {log.condition}</p>
              <p><strong>Skin Mood:</strong> {log.skinMood}</p>
              <p><strong>Time of Day:</strong> {log.timeOfDay}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}