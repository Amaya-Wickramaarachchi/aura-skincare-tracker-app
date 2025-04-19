"use client";

  import { useState, useEffect } from "react";

  export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState("");

    useEffect(() => {
      const storedProducts = JSON.parse(localStorage.getItem("skincareProducts")) || [];
      setProducts(storedProducts);
    }, []);

    const handleAddProduct = (e) => {
      e.preventDefault();
      if (!newProduct.trim()) return;
      const newProductEntry = {
        id: Date.now().toString(),
        name: newProduct.trim(),
        status: "available",
      };
      const updatedProducts = [...products, newProductEntry];
      localStorage.setItem("skincareProducts", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      setNewProduct("");
    };

    const handleDeleteProduct = (id) => {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, status: "deleted" } : product
      );
      localStorage.setItem("skincareProducts", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    };

    const availableProducts = products.filter((product) => product.status === "available");

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-skin-plum mb-6 text-center">
          Manage Products
        </h1>
        <form onSubmit={handleAddProduct} className="mb-8 bg-skin-cream p-6 rounded-lg shadow-md">
          <div className="flex gap-4">
            <input
              type="text"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
              placeholder="e.g., Vitamin C Serum"
              className="flex-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-skin-teal"
            />
            <button
              type="submit"
              className="bg-skin-plum text-skin-cream px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Add Product
            </button>
          </div>
        </form>
        <div className="bg-skin-cream p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-skin-plum mb-4">Available Products</h2>
          {availableProducts.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="bg-skin-rose">
                  <th className="p-3 text-skin-plum font-semibold text-left">Product</th>
                  <th className="p-3 text-skin-plum font-semibold text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {availableProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-200">
                    <td className="p-3 text-skin-plum">{product.name}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-skin-plum hover:text-red-500 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-skin-plum text-center">No available products.</p>
          )}
        </div>
      </div>
    );
  }