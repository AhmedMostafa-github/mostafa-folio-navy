
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const WorldMap = () => {
  const countries = [
    { name: "USA", color: "#3B82F6", coordinates: [-95.7129, 37.0902] },
    { name: "Canada", color: "#10B981", coordinates: [-106.3468, 56.1304] },
    { name: "UK", color: "#8B5CF6", coordinates: [-3.4360, 55.3781] },
    { name: "Egypt", color: "#F59E0B", coordinates: [30.8025, 26.8206] },
    { name: "UAE", color: "#EF4444", coordinates: [53.8478, 23.4241] },
    { name: "Saudi Arabia", color: "#06B6D4", coordinates: [45.0792, 23.8859] },
  ];

  const selectedCountryIds = ["840", "124", "826", "818", "784", "682"]; // ISO codes for USA, Canada, UK, Egypt, UAE, Saudi Arabia

  return (
    <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [20, 20]
        }}
        width={800}
        height={400}
        className="w-full h-full"
      >
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const isSelected = selectedCountryIds.includes(geo.id);
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isSelected ? "rgba(103, 232, 249, 0.2)" : "rgba(103, 232, 249, 0.05)"}
                  stroke={isSelected ? "#67E8F9" : "#334155"}
                  strokeWidth={isSelected ? 2 : 0.5}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: isSelected ? "rgba(103, 232, 249, 0.3)" : "rgba(103, 232, 249, 0.1)",
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        
        {/* Country markers */}
        {countries.map((country, index) => (
          <Marker key={country.name} coordinates={country.coordinates}>
            <motion.circle
              r={6}
              fill={country.color}
              stroke="#fff"
              strokeWidth={2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              style={{
                filter: `drop-shadow(0 0 10px ${country.color})`,
              }}
            />
            <motion.circle
              r={6}
              fill={country.color}
              opacity={0.3}
              animate={{
                r: [6, 12, 6],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* Enhanced ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>
    </div>
  );
};

export default WorldMap;
