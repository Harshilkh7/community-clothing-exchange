import { useScrollAnimation } from "../hooks/useScrollAnimation";


const FeaturedItemCard = ({ item }) => {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-105 ${
        visible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
<img
  src={item.imageUrls?.[0] ? `${item.imageUrls[0]}` : "/placeholder.jpg"}
  alt={item.title}
  className="w-full h-56 object-cover"
/>



      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-1">
          {item.title || "Untitled Item"}
        </h3>
        <p className="text-sm text-gray-500">
          Size: {item.size || "N/A"} • Category: {item.category || "N/A"}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Condition: {item.condition || "Unknown"}
        </p>
        <a
          href={`/items/${item._id}`}
          className="text-emerald-700 text-sm mt-2 inline-block hover:underline"
        >
          View Item →
        </a>
      </div>
    </div>
  );
};

export default FeaturedItemCard;
