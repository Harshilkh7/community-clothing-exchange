// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Button from "../components/Button";

const DashboardPage = () => {
  // Simulated user data (replace with actual API call)
  const [user, setUser] = useState({
    name: "Jeet G.",
    email: "jeet@example.com",
    points: 120,
  });

  // Simulated listed items data (replace with actual API call)
  const [myItems, setMyItems] = useState([
    {
      id: 1,
      title: "Blue Denim Jacket",
      image: "/placeholder-denim.jpg",
      status: "Available",
    },
    {
      id: 2,
      title: "Cotton Kurti",
      image: "/placeholder-kurti.jpg",
      status: "Swapped",
    },
  ]);

  // Simulated swap history (replace with actual API call)
  const [mySwaps, setMySwaps] = useState([
    { id: 1, item: "Checked Shirt", status: "Ongoing" },
    { id: 2, item: "Yellow Top", status: "Completed" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Profile Summary Card */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold text-emerald-700 mb-2">
          Welcome, {user.name}
        </h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">
          Swap Points: <span className="font-semibold">{user.points}</span>
        </p>
      </div>

      {/* My Listed Items Section */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          My Listed Items
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {myItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* My Swaps Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">My Swaps</h3>
        <div className="space-y-2">
          {mySwaps.map((swap) => (
            <div
              key={swap.id}
              className="bg-white p-4 rounded-lg shadow-sm flex justify-between"
            >
              <span>{swap.item}</span>
              <span
                className={`text-sm font-medium ${
                  swap.status === "Ongoing"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {swap.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;