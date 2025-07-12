// src/components/HowItWorksCard.jsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HowItWorksCard = ({ index, title, description }) => {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
        visible ? "animate-slideUp" : "opacity-0"
      }`}
    >
      <div className="text-emerald-700 text-5xl font-bold mb-4">{index + 1}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
