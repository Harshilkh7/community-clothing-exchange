// src/pages/AdminPage.jsx
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [items, setItems] = useState([]);

  // Mock fetching items for moderation
  useEffect(() => {
    // Simulate API data
    setItems([
      {
        id: 1,
        title: "Floral Summer Dress",
        uploader: "Anjali S.",
        category: "Women",
        status: "Pending",
        image: "https://source.unsplash.com/400x300/?dress",
      },
      {
        id: 2,
        title: "Men's Hoodie",
        uploader: "Rahul M.",
        category: "Men",
        status: "Pending",
        image: "https://source.unsplash.com/400x300/?hoodie",
      },
    ]);
  }, []);

  const handleAction = (id, action) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: action } : item
      )
    );
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-emerald-700 mb-8 text-center">
        Admin Moderation Panel
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Uploaded by: {item.uploader}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Category: {item.category}
              </p>
              <p className={`text-sm font-medium mb-4 ${
                item.status === "Approved"
                  ? "text-green-600"
                  : item.status === "Rejected"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}>
                Status: {item.status}
              </p>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleAction(item.id, "Approved")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(item.id, "Rejected")}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
