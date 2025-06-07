
import { motion } from "framer-motion";

const WorldMap = () => {
  const countries = [
    { name: "USA", color: "#3B82F6", x: "20%", y: "35%" },
    { name: "Canada", color: "#10B981", x: "18%", y: "25%" },
    { name: "UK", color: "#8B5CF6", x: "48%", y: "28%" },
    { name: "Egypt", color: "#F59E0B", x: "53%", y: "48%" },
    { name: "UAE", color: "#EF4444", x: "62%", y: "52%" },
    { name: "Saudi Arabia", color: "#06B6D4", x: "60%", y: "55%" },
  ];

  return (
    <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50">
      {/* World Map SVG */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full opacity-20"
        fill="currentColor"
      >
        {/* Simplified world map path */}
        <path
          d="M150 200 L200 180 L250 170 L300 175 L350 180 L400 185 L450 190 L500 185 L550 180 L600 175 L650 180 L700 185 L750 190 L800 200 L850 210 L150 200 Z M200 250 L250 240 L300 235 L350 240 L400 245 L450 250 L500 245 L550 240 L600 235 L650 240 L700 245 L750 250 L800 260 L200 250 Z M100 300 L150 290 L200 285 L250 290 L300 295 L350 300 L400 295 L450 290 L500 295 L550 300 L600 305 L650 300 L700 295 L750 300 L800 310 L100 300 Z"
          className="text-slate-600"
        />
      </svg>

      {/* Country markers */}
      {countries.map((country, index) => (
        <motion.div
          key={country.name}
          className="absolute w-4 h-4 rounded-full cursor-pointer group"
          style={{
            left: country.x,
            top: country.y,
            backgroundColor: country.color,
            boxShadow: `0 0 20px ${country.color}50`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.5 }}
        >
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: country.color }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {country.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorldMap;
