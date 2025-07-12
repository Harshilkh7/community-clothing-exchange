import React from "react";

const ItemDetailPage = () => {
  const item = {
    title: "Vintage Cotton Jacket",
    category: "Women",
    size: "M",
    condition: "Good",
    tags: ["casual", "cotton", "vintage"],
    description:
      "Stylish and lightweight cotton jacket, perfect for autumn. Soft interior lining, lightly worn but well-maintained.",
    status: "Available",
    points: 30,
    images: [
      "https://source.unsplash.com/400x400/?jacket",
      "https://source.unsplash.com/400x400/?vintage,jacket",
      "https://source.unsplash.com/400x400/?clothes",
    ],
    uploader: {
      name: "Jane Doe",
      location: "Mumbai, India",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 animate-fadeIn">
        {/* Image Gallery */}
        <div className="space-y-4">
          <img
            src={item.images[0]}
            alt="Main item"
            className="w-full h-80 object-cover rounded-lg shadow"
          />
          <div className="flex gap-2">
            {item.images.slice(1).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Preview ${idx}`}
                className="w-1/3 h-24 object-cover rounded-md border"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-emerald-700">{item.title}</h2>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  item.status === "Available"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {item.status}
              </span>
            </div>

            <p className="text-gray-500 mt-1">
              Category: <span className="font-medium">{item.category}</span>
            </p>
            <p className="text-gray-500">
              Size: <span className="font-medium">{item.size}</span>
            </p>
            <p className="text-gray-500 mb-3">
              Condition: <span className="font-medium">{item.condition}</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">Description</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>

            {/* Uploader */}
            <div className="text-sm text-gray-500">
              <p>
                Uploaded by <span className="font-medium">{item.uploader.name}</span>
              </p>
              <p>{item.uploader.location}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 space-y-2">
            <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700 transition">
              Request Swap
            </button>
            <button className="w-full border border-emerald-600 text-emerald-600 py-2 rounded-lg font-medium hover:bg-emerald-50 transition">
              Redeem for {item.points} Points
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
