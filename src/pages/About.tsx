
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

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-card/80 backdrop-blur-xl border-border relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardContent className="p-8 text-center relative z-10 flex flex-col justify-center h-full">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500/30"
                >
                  <img
                    src="/ahmed.JPG"
                    alt="Ahmed Mostafa"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ahmed Mostafa
                </h3>
                <p className="text-primary mb-4">Senior Software Engineer</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary-blue">Location</span>
                    <span className="text-foreground">Cairo, Egypt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-blue">Experience</span>
                    <span className="text-foreground">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-blue">Focus</span>
                    <span className="text-foreground">Full-Stack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-blue">Available</span>
                    <span className="text-primary">Open to opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Story section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card/80 backdrop-blur-xl border-border h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-semibold text-foreground">
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-[#D7E7F9] leading-relaxed relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  My passion for software development ignited during my college years, 
                  where curiosity about technology transformed into a dedication to creating 
                  impactful solutions. What began as experimentation with web technologies 
                  has evolved into a comprehensive expertise in full-stack development.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Throughout my 5+ year career, I've had the privilege of collaborating 
                  with international teams across six countries, delivering solutions 
                  for diverse markets from startups to enterprise organizations. This 
                  global experience has shaped my understanding of cross-cultural 
                  development and scalable architecture.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  I believe technology should bridge gaps and solve real-world challenges. 
                  Whether architecting complex systems, optimizing performance, or mentoring 
                  fellow developers, I approach every project with innovation and precision. 
                  My commitment extends beyond code to fostering collaborative environments 
                  where ideas flourish.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

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
