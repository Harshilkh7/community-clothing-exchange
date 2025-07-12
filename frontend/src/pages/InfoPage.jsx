// src/pages/InfoPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../api/items"; // your API helper

const InfoPage = () => {
  const { id } = useParams(); // ✅ get id from URL
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // 🛑 don’t call API if id missing

    const fetchItem = async () => {
      try {
        const res = await getItemById(id); // ✅ actual API call
        setInfo(res.data.item); // ✅ store data in state
        console.log("📦 Item fetched:", res.data.item);
      } catch (err) {
        console.error("❌ Error fetching item:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!info) return <p className="text-center mt-10">Item not found.</p>;

  return (
    <div className="min-h-screen bg-white px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-emerald-700 mb-8">
        Item Information
      </h1>
      <div className="bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-emerald-700 mb-4">
          {info.title}
        </h2>
        <p className="text-gray-700 mb-2">Category: {info.category}</p>
        <p className="text-gray-700 mb-2">Size: {info.size}</p>
        <p className="text-gray-700 mb-2">Condition: {info.condition}</p>
        <img
          src={info.imageUrls?.[0] || "/placeholder.jpg"}
          alt={info.title}
          className="w-full max-w-md mt-4 rounded"
        />
      </div>
    </div>
  );
};

export default InfoPage;
