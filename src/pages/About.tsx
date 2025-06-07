
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WorldMap from "@/components/WorldMap";
import { Globe, Users, Zap, Target } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      title: "Continuous Learning",
      icon: <Globe className="w-8 h-8" />,
      description: "Technology evolves rapidly, and so should we. I'm committed to staying current with the latest trends and best practices.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quality First",
      icon: <Zap className="w-8 h-8" />,
      description: "Writing clean, maintainable code that stands the test of time. Quality over quantity, always.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaboration",
      icon: <Users className="w-8 h-8" />,
      description: "Great software is built by great teams. I believe in open communication and knowledge sharing.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "User-Centric",
      icon: <Target className="w-8 h-8" />,
      description: "Every decision should be made with the end user in mind. Technology serves people, not the other way around.",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 relative overflow-hidden">
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
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
            Passionate about creating innovative solutions and building exceptional digital experiences across the globe
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Global Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/80 backdrop-blur-xl border-border h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary" />
                  Global Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-primary-blue leading-relaxed"
                >
                  Over the past 5+ years, I've had the privilege of working with diverse clients and teams across six countries, delivering innovative software solutions that span continents and cultures.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-primary-blue leading-relaxed"
                >
                  From fintech startups in Canada to enterprise solutions in the UAE, e-commerce platforms in the USA to digital transformation projects in the UK, each experience has enriched my understanding of global technology needs and best practices.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-2 gap-4 pt-4"
                >
                  <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-primary-blue">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-primary-blue">Projects</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* World Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-card/80 backdrop-blur-xl border-border h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold text-foreground">
                  Countries I've Worked In
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <WorldMap />
                <div className="mt-4 flex flex-wrap gap-2">
                  {["USA", "Canada", "UK", "Egypt", "UAE", "Saudi Arabia"].map((country, index) => (
                    <motion.span
                      key={country}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-primary-blue text-sm rounded-full border border-blue-500/30"
                    >
                      {country}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* My Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-card/80 backdrop-blur-xl border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-semibold text-foreground">
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-primary-blue leading-relaxed relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                My journey into software development began with a curiosity about how things work. What started as tinkering with HTML and CSS in college evolved into a passion for creating robust, scalable applications that solve real-world problems across different cultures and markets.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                This international experience has taught me that great software is not just about clean code—it's about understanding diverse user needs, collaborating across time zones and cultures, and continuously adapting to different technological landscapes and business requirements.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Values & Philosophy</h2>
            <p className="text-primary-blue max-w-2xl mx-auto">
              The principles that guide my approach to technology and collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="bg-card/80 backdrop-blur-xl border-border h-full relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-primary-blue text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
