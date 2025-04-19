"use client";

  import { useState, useEffect } from "react";
  import { useRouter } from "next/navigation";

  export default function LogPage() {
    const [formData, setFormData] = useState({
      product: "",
      condition: "",
      skinMood: "radiant",
      time: "AM",
    });
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
      const storedProducts = JSON.parse(localStorage.getItem("skincareProducts")) || [];
      setProducts(storedProducts.filter((product) => product.status === "available"));
    }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.product) return;
      const logs = JSON.parse(localStorage.getItem("skincareLogs")) || [];
      const newLog = {
        ...formData,
        timestamp: new Date().toLocaleString(),
        id: Date.now().toString(),
      };
      localStorage.setItem("skincareLogs", JSON.stringify([...logs, newLog]));
      setFormData({ product: "", condition: "", skinMood: "radiant", time: "AM" });
      router.push("/dashboard");
    };

    return (
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-semibold text-skin-plum mb-6 text-center">
          Log Your Skincare
        </h1>
        <form onSubmit={handleSubmit} className="bg-skin-cream p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-skin-plum font-medium mb-1" htmlFor="product">
              Product
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-skin-teal"
              required
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-skin-plum font-medium mb-1" htmlFor="condition">
              Skin Condition
            </label>
            <input
              id="condition"
              name="condition"
              type="text"
              value={formData.condition}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-skin-teal"
              placeholder="e.g., Dry, Oily"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-skin-plum font-medium mb-1" htmlFor="skin-mood">
              Skin Mood
            </label>
            <select
              id="skin-mood"
              name="skinMood"
              value={formData.skinMood}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
            >
              <option value="radiant">Radiant</option>
              <option value="dull">Dull</option>
              <option value="irritated">Irritated</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-skin-plum font-medium mb-1">Time of Day</label>
            <div className="flex gap-4">
              <label className="flex items-center text-skin-plum">
                <input
                  type="radio"
                  name="time"
                  value="AM"
                  checked={formData.time === "AM"}
                  onChange={handleChange}
                  className="mr-2 accent-skin-teal"
                />
                AM
              </label>
              <label className="flex items-center text-skin-plum">
                <input
                  type="radio"
                  name="time"
                  value="PM"
                  checked={formData.time === "PM"}
                  onChange={handleChange}
                  className="mr-2 accent-skin-teal"
                />
                PM
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-skin-plum text-skin-cream py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Save Log
          </button>
        </form>
      </div>
    );
  }