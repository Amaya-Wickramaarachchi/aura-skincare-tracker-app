// src/app/log/page.js
"use client";
import { useState } from "react";

export default function Log() {
  const [formData, setFormData] = useState({
    product: "",
    condition: "",
    skinMood: "",
    timeOfDay: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const logs = JSON.parse(localStorage.getItem("skincareLogs") || "[]");
    logs.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem("skincareLogs", JSON.stringify(logs));
    setFormData({ product: "", condition: "", skinMood: "", timeOfDay: "" });
    alert("Log saved!");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Log Skincare Routine</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Product</label>
          <input
            type="text"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Condition</label>
          <input
            type="text"
            value={formData.condition}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Skin Mood</label>
          <select
            value={formData.skinMood}
            onChange={(e) => setFormData({ ...formData, skinMood: e.target.value })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select</option>
            <option value="Great">Great</option>
            <option value="Good">Good</option>
            <option value="Okay">Okay</option>
            <option value="Bad">Bad</option>
          </select>
        </div>
        <div>
          <label className="block">Time of Day</label>
          <select
            value={formData.timeOfDay}
            onChange={(e) => setFormData({ ...formData, timeOfDay: e.target.value })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Save Log
        </button>
      </form>
    </div>
  );
}