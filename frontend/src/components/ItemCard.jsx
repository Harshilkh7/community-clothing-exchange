// src/components/ItemCard.jsx
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h4 className="text-md font-semibold text-gray-800 mb-1">{item.title}</h4>
      <p className="text-sm text-gray-500 mb-2">Status: {item.status}</p>
      <Link
        to={`/item/${item.id}`}
        className="text-sm text-emerald-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ItemCard;
