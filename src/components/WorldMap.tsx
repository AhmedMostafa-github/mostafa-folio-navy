
import { motion } from "framer-motion";

const WorldMap = () => {
  const workCountries = [
    { name: "USA", color: "#3B82F6" },
    { name: "Canada", color: "#10B981" },
    { name: "Egypt", color: "#F59E0B" },
    { name: "UAE", color: "#EF4444" },
    { name: "Saudi Arabia", color: "#8B5CF6" },
    { name: "UK", color: "#06B6D4" },
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        
        {/* World Map SVG */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Global Experience
          </h3>
          <p className="text-center text-primary-blue mb-8">
            Countries where I've worked and delivered projects
          </p>
          
          {/* Simplified world map representation */}
          <div className="flex justify-center mb-8">
            <motion.svg
              viewBox="0 0 1000 500"
              className="w-full max-w-4xl h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              {/* Background */}
              <rect width="1000" height="500" fill="rgba(30, 41, 59, 0.3)" rx="10" />
              
              {/* Country representations */}
              {/* USA */}
              <motion.circle
                cx="200"
                cy="200"
                r="25"
                fill="#3B82F6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
              />
              
              {/* Canada */}
              <motion.circle
                cx="180"
                cy="150"
                r="20"
                fill="#10B981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
              />
              
              {/* UK */}
              <motion.circle
                cx="500"
                cy="180"
                r="15"
                fill="#06B6D4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
              />
              
              {/* Egypt */}
              <motion.circle
                cx="550"
                cy="280"
                r="18"
                fill="#F59E0B"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
              />
              
              {/* UAE */}
              <motion.circle
                cx="650"
                cy="300"
                r="16"
                fill="#EF4444"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
              />
              
              {/* Saudi Arabia */}
              <motion.circle
                cx="620"
                cy="320"
                r="22"
                fill="#8B5CF6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
              />
              
              {/* Connection lines */}
              {workCountries.map((_, index) => (
                <motion.line
                  key={index}
                  x1="500"
                  y1="250"
                  x2={[200, 180, 500, 550, 650, 620][index]}
                  y2={[200, 150, 180, 280, 300, 320][index]}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2 + index * 0.1 }}
                />
              ))}
            </motion.svg>
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
