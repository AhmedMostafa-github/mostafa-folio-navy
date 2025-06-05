
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WorldMap from "@/components/WorldMap";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent leading-tight pb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-xl text-primary-blue max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate software engineer with global experience, creating
            innovative solutions across multiple countries and industries
          </motion.p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-card/80 backdrop-blur-xl border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <CardContent className="p-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center lg:justify-start"
                >
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30">
                    <img
                      src="/ahmed.JPG"
                      alt="Ahmed Mostafa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* About Text */}
                <div className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-3xl font-bold text-foreground"
                  >
                    Ahmed Mostafa
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-primary mb-4"
                  >
                    Senior Software Engineer
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="space-y-4 text-[#D7E7F9] leading-relaxed"
                  >
                    <p>
                      My passion for software development ignited during my college years, 
                      where curiosity about technology transformed into a dedication to creating 
                      impactful solutions. What began as experimentation with web technologies 
                      has evolved into comprehensive expertise in full-stack development.
                    </p>
                    <p>
                      Throughout my 5+ year career, I've had the privilege of collaborating 
                      with international teams across six countries, delivering solutions 
                      for diverse markets from startups to enterprise organizations.
                    </p>
                  </motion.div>
                  
                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="grid grid-cols-2 gap-4 pt-4"
                  >
                    <div className="text-center p-4 rounded-lg bg-white/5">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-primary-blue">Years Experience</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5">
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-primary-blue">Countries</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <WorldMap />
        </motion.div>

        {/* Core Values & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-card/80 backdrop-blur-xl border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl font-bold text-center text-foreground mb-4">
                Core Values & Philosophy
              </CardTitle>
              <p className="text-center text-primary-blue">
                The principles that guide my approach to software development and collaboration
              </p>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Continuous Learning",
                    icon: "📚",
                    description:
                      "Embracing new technologies and methodologies to stay at the forefront of innovation and deliver cutting-edge solutions.",
                  },
                  {
                    title: "Quality Excellence",
                    icon: "⚡",
                    description:
                      "Crafting robust, maintainable code with comprehensive testing and documentation that stands the test of time.",
                  },
                  {
                    title: "Global Collaboration",
                    icon: "🤝",
                    description:
                      "Building bridges across cultures and time zones, fostering inclusive environments where diverse perspectives thrive.",
                  },
                  {
                    title: "Impact-Driven",
                    icon: "🎯",
                    description:
                      "Creating technology that solves real problems and improves lives, always keeping the end user at the center of every decision.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <motion.div
                      className="text-5xl mb-4"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-primary-blue leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
