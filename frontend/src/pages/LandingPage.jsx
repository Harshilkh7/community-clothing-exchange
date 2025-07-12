// src/pages/LandingPage.jsx
import { useState, useEffect } from "react";
import { getFeaturedItems } from "../api/items";
import FeaturedItemCard from "../components/FeaturedItemCard";
import HowItWorksCard from "../components/HowItWorksCard";

const LandingPage = () => {
  const words = ["Swap.", "Share.", "Sustain."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await getFeaturedItems();
        console.log("\u2705 Featured Items:", res.data.items);
        setFeaturedItems(res.data.items);
      } catch (err) {
        console.error("\u274C Failed to fetch featured items:", err);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayText.length < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) =>
            words[currentWordIndex].slice(0, prev.length + 1)
          );
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 50);
      } else {
        setTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing]);

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-emerald-100 to-white flex flex-col justify-center items-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-800 mb-4 animate-slideDown">
          Welcome to <span className="text-gray-900">ReWear</span>
        </h1>
        <p className="text-2xl text-emerald-700 h-8 font-medium mb-6 animate-fadeIn">
          {displayText}
          <span className="border-r-2 border-emerald-700 animate-pulse ml-1"></span>
        </p>
        <p className="max-w-2xl text-lg text-gray-600 mb-8 animate-fadeIn">
          Join a community of conscious swappers. Exchange your unused clothes, earn points, and reduce waste.
        </p>
        <div className="space-x-4 animate-slideUp">
          <a
            href="/add-item"
            className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-all duration-200 hover:scale-105 shadow-md"
          >
            List an Item
          </a>
          <a
            href="/items"
            className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-lg hover:bg-emerald-100 transition-all duration-200 hover:scale-105"
          >
            Browse Items
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Upload Items",
              description:
                "List your unused clothes by uploading images, sizes, and descriptions."
            },
            {
              title: "Earn Points",
              description:
                "Earn points each time someone requests one of your items."
            },
            {
              title: "Swap or Redeem",
              description:
                "Use points to request items from others or swap directly."
            }
          ].map((step, index) => (
            <HowItWorksCard
              key={index}
              index={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section className="py-24 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Featured Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {featuredItems.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">No featured items yet.</p>
          ) : (
            featuredItems.map((item) => (
              <FeaturedItemCard key={item._id} item={item} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
