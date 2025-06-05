
import { motion } from "framer-motion";

const WorldMap = () => {
  const workCountries = [
    { name: "USA", color: "#3B82F6", x: 200, y: 200 },
    { name: "Canada", color: "#10B981", x: 180, y: 150 },
    { name: "Egypt", color: "#F59E0B", x: 550, y: 280 },
    { name: "UAE", color: "#EF4444", x: 650, y: 300 },
    { name: "Saudi Arabia", color: "#8B5CF6", x: 620, y: 320 },
    { name: "UK", color: "#06B6D4", x: 500, y: 180 },
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Global Experience
          </h3>
          <p className="text-center text-primary-blue mb-8">
            Countries where I've worked and delivered projects
          </p>
          
          {/* World map visualization */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl">
              <motion.svg
                viewBox="0 0 1000 500"
                className="w-full h-64 md:h-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                {/* Background */}
                <rect width="1000" height="500" fill="rgba(30, 41, 59, 0.2)" rx="10" />
                
                {/* Grid lines for reference */}
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Country markers */}
                {workCountries.map((country, index) => (
                  <g key={country.name}>
                    {/* Connection line to center */}
                    <motion.line
                      x1="500"
                      y1="250"
                      x2={country.x}
                      y2={country.y}
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 2 + index * 0.1 }}
                    />
                    
                    {/* Country circle */}
                    <motion.circle
                      cx={country.x}
                      cy={country.y}
                      r="20"
                      fill={country.color}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="cursor-pointer drop-shadow-lg"
                      whileHover={{ scale: 1.3 }}
                    />
                    
                    {/* Country label */}
                    <motion.text
                      x={country.x}
                      y={country.y - 35}
                      textAnchor="middle"
                      className="fill-white text-sm font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                    >
                      {country.name}
                    </motion.text>
                  </g>
                ))}
                
                {/* Center point */}
                <motion.circle
                  cx="500"
                  cy="250"
                  r="8"
                  fill="white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                />
              </motion.svg>
            </div>
          </div>
          
          {/* Country Legend */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {workCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: country.color }}
                />
                <span className="text-sm font-medium text-foreground">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorldMap;
