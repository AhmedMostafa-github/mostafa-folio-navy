
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
      {/* World Map Background - Hand-drawn continents */}
      <div className="absolute inset-0 opacity-30">
        {/* North America */}
        <div className="absolute bg-slate-600 rounded-tl-3xl rounded-br-2xl" 
             style={{
               top: '15%',
               left: '8%',
               width: '25%',
               height: '35%',
               clipPath: 'polygon(0% 20%, 15% 0%, 40% 5%, 60% 15%, 80% 10%, 95% 25%, 100% 40%, 85% 60%, 70% 80%, 50% 85%, 30% 75%, 10% 65%, 0% 45%)'
             }}>
        </div>
        
        {/* South America */}
        <div className="absolute bg-slate-600 rounded-bl-3xl" 
             style={{
               top: '50%',
               left: '22%',
               width: '12%',
               height: '35%',
               clipPath: 'polygon(20% 0%, 80% 10%, 90% 30%, 95% 50%, 85% 70%, 70% 85%, 40% 95%, 20% 90%, 10% 70%, 15% 40%, 25% 20%)'
             }}>
        </div>
        
        {/* Europe */}
        <div className="absolute bg-slate-600" 
             style={{
               top: '20%',
               left: '45%',
               width: '12%',
               height: '20%',
               clipPath: 'polygon(0% 40%, 30% 0%, 70% 10%, 100% 30%, 90% 60%, 70% 80%, 40% 85%, 10% 75%, 0% 60%)'
             }}>
        </div>
        
        {/* Africa */}
        <div className="absolute bg-slate-600 rounded-b-2xl" 
             style={{
               top: '40%',
               left: '47%',
               width: '15%',
               height: '40%',
               clipPath: 'polygon(30% 0%, 70% 5%, 85% 20%, 90% 40%, 95% 60%, 85% 80%, 70% 95%, 50% 100%, 30% 95%, 15% 80%, 10% 60%, 15% 40%, 20% 20%)'
             }}>
        </div>
        
        {/* Asia */}
        <div className="absolute bg-slate-600" 
             style={{
               top: '15%',
               left: '58%',
               width: '30%',
               height: '45%',
               clipPath: 'polygon(0% 30%, 20% 0%, 50% 5%, 80% 15%, 95% 25%, 100% 40%, 90% 60%, 75% 75%, 50% 80%, 30% 70%, 15% 50%, 5% 40%)'
             }}>
        </div>
        
        {/* Australia */}
        <div className="absolute bg-slate-600 rounded-xl" 
             style={{
               top: '70%',
               left: '75%',
               width: '12%',
               height: '15%',
               clipPath: 'polygon(0% 40%, 30% 0%, 70% 10%, 100% 40%, 90% 80%, 60% 100%, 20% 90%, 0% 70%)'
             }}>
        </div>
      </div>

      {/* Ocean effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
      
      {/* Grid lines for a more professional look */}
      <div className="absolute inset-0 opacity-10">
        {/* Horizontal lines */}
        {[25, 50, 75].map((top) => (
          <div key={`h-${top}`} className="absolute w-full h-px bg-slate-400" style={{top: `${top}%`}}></div>
        ))}
        {/* Vertical lines */}
        {[25, 50, 75].map((left) => (
          <div key={`v-${left}`} className="absolute h-full w-px bg-slate-400" style={{left: `${left}%`}}></div>
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
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            {country.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorldMap;
