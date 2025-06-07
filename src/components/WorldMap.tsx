
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
    <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50">
      {/* World Map Background - Sharp outlined continents */}
      <div className="absolute inset-0">
        {/* North America */}
        <div 
          className="absolute border-4 border-cyan-300 bg-transparent"
          style={{
            top: '15%',
            left: '8%',
            width: '25%',
            height: '35%',
            clipPath: 'polygon(15% 0%, 35% 5%, 55% 0%, 75% 8%, 85% 15%, 95% 25%, 100% 40%, 90% 55%, 80% 70%, 65% 80%, 45% 85%, 25% 80%, 10% 70%, 5% 50%, 8% 30%, 12% 15%)',
            borderRadius: '8px',
            filter: 'drop-shadow(0 0 8px rgba(103, 232, 249, 0.5))'
          }}
        />
        
        {/* South America */}
        <div 
          className="absolute border-4 border-cyan-300 bg-transparent"
          style={{
            top: '50%',
            left: '22%',
            width: '12%',
            height: '35%',
            clipPath: 'polygon(30% 0%, 70% 5%, 85% 15%, 90% 30%, 95% 50%, 85% 70%, 70% 85%, 50% 95%, 30% 90%, 15% 75%, 10% 55%, 15% 35%, 25% 15%)',
            borderRadius: '6px',
            filter: 'drop-shadow(0 0 6px rgba(103, 232, 249, 0.5))'
          }}
        />
        
        {/* Europe */}
        <div 
          className="absolute border-4 border-cyan-300 bg-transparent"
          style={{
            top: '20%',
            left: '45%',
            width: '12%',
            height: '18%',
            clipPath: 'polygon(0% 50%, 20% 0%, 50% 10%, 80% 0%, 100% 20%, 95% 50%, 85% 75%, 60% 85%, 30% 80%, 10% 70%, 5% 60%)',
            borderRadius: '4px',
            filter: 'drop-shadow(0 0 6px rgba(103, 232, 249, 0.5))'
          }}
        />
        
        {/* Africa */}
        <div 
          className="absolute border-4 border-cyan-300 bg-transparent"
          style={{
            top: '35%',
            left: '47%',
            width: '15%',
            height: '45%',
            clipPath: 'polygon(40% 0%, 60% 5%, 80% 15%, 90% 30%, 95% 50%, 90% 70%, 80% 85%, 60% 95%, 40% 100%, 20% 95%, 10% 80%, 5% 60%, 10% 40%, 20% 20%, 30% 5%)',
            borderRadius: '8px',
            filter: 'drop-shadow(0 0 8px rgba(103, 232, 249, 0.5))'
          }}
        />
        
        {/* Asia */}
        <div 
          className="absolute border-4 border-cyan-300 bg-transparent"
          style={{
            top: '10%',
            left: '58%',
            width: '35%',
            height: '50%',
            clipPath: 'polygon(0% 40%, 15% 20%, 30% 5%, 50% 0%, 70% 5%, 85% 15%, 95% 25%, 100% 40%, 95% 55%, 85% 70%, 70% 80%, 50% 85%, 30% 80%, 15% 70%, 5% 55%, 0% 45%)',
            borderRadius: '10px',
            filter: 'drop-shadow(0 0 10px rgba(103, 232, 249, 0.5))'
          }}
        />
        
        {/* Australia */}
        <div 
          className="absolute border-4 border-cyan-300 bg-transparent"
          style={{
            top: '65%',
            left: '75%',
            width: '15%',
            height: '18%',
            clipPath: 'polygon(0% 50%, 25% 20%, 50% 10%, 75% 20%, 100% 45%, 90% 75%, 60% 90%, 30% 85%, 10% 70%)',
            borderRadius: '6px',
            filter: 'drop-shadow(0 0 6px rgba(103, 232, 249, 0.5))'
          }}
        />

        {/* Additional landmasses for more realistic look */}
        {/* Greenland */}
        <div 
          className="absolute border-2 border-cyan-300 bg-transparent"
          style={{
            top: '8%',
            left: '28%',
            width: '8%',
            height: '12%',
            clipPath: 'polygon(20% 10%, 60% 0%, 80% 30%, 70% 70%, 40% 90%, 10% 60%)',
            borderRadius: '4px',
            filter: 'drop-shadow(0 0 4px rgba(103, 232, 249, 0.4))'
          }}
        />

        {/* Madagascar */}
        <div 
          className="absolute border-2 border-cyan-300 bg-transparent"
          style={{
            top: '58%',
            left: '60%',
            width: '2%',
            height: '8%',
            borderRadius: '2px',
            filter: 'drop-shadow(0 0 3px rgba(103, 232, 249, 0.4))'
          }}
        />
      </div>

      {/* Enhanced grid overlay */}
      <div className="absolute inset-0 opacity-40">
        {/* Longitude lines */}
        {[20, 40, 60, 80].map((left) => (
          <div key={`long-${left}`} className="absolute h-full w-px bg-cyan-300 shadow-sm" style={{left: `${left}%`}}></div>
        ))}
        {/* Latitude lines */}
        {[25, 50, 75].map((top) => (
          <div key={`lat-${top}`} className="absolute w-full h-px bg-cyan-300 shadow-sm" style={{top: `${top}%`}}></div>
        ))}
      </div>

      {/* Country markers */}
      {countries.map((country, index) => (
        <motion.div
          key={country.name}
          className="absolute w-4 h-4 rounded-full cursor-pointer group z-10"
          style={{
            left: country.x,
            top: country.y,
            backgroundColor: country.color,
            boxShadow: `0 0 20px ${country.color}80`,
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
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 border border-cyan-400/30">
            {country.name}
          </div>
        </motion.div>
      ))}

      {/* Enhanced ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>
    </div>
  );
};

export default WorldMap;
