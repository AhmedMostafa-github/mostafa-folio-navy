import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
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

      <div className="max-w-6xl mx-auto relative z-10">
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
            Passionate about creating innovative solutions and building
            exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Story with coding background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card/80 backdrop-blur-xl border-border h-full relative overflow-hidden">
              {/* Coding background image for this section only */}
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-navy-950/70" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-semibold text-foreground">
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-[#DADADA] leading-relaxed relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  My journey into software development began with a curiosity
                  about how things work. What started as tinkering with HTML and
                  CSS in college evolved into a passion for creating robust,
                  scalable applications that solve real-world problems.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Over the past 5+ years, I've had the privilege of working with
                  diverse teams and technologies, from startups to enterprise
                  companies. This experience has taught me that great software
                  is not just about clean code—it's about understanding user
                  needs, collaborating effectively, and continuously learning.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  I believe in the power of technology to transform businesses
                  and improve lives. Whether I'm architecting a new system,
                  mentoring a colleague, or optimizing performance, I approach
                  every challenge with enthusiasm and a commitment to
                  excellence.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I'm always excited
                  about the next challenge and the opportunity to create
                  something meaningful.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <Card className="bg-card/80 backdrop-blur-xl border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardContent className="p-6 text-center relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500/30"
                >
                  <img
                    src="/ahmed.JPG"
                    alt="Ahmed Mostafa"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">
                  Ahmed Mostafa
                </h3>
                <p className="text-primary">Senior Software Engineer</p>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="bg-card/80 backdrop-blur-xl border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg font-semibold text-foreground">
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {[
                  { label: "Location", value: "Cairo, Egypt" },
                  { label: "Experience", value: "5+ Years" },
                  { label: "Focus", value: "Full-Stack" },
                  {
                    label: "Available",
                    value: "Open to opportunities",
                    highlight: true,
                  },
                ].map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    className="flex justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="text-primary-blue">{fact.label}</span>
                    <span
                      className={
                        fact.highlight ? "text-primary" : "text-foreground"
                      }
                    >
                      {fact.value}
                    </span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-card/80 backdrop-blur-xl border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-semibold text-center text-foreground">
                Core Values & Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Continuous Learning",
                    icon: "📚",
                    description:
                      "Technology evolves rapidly, and so should we. I'm committed to staying current with the latest trends and best practices.",
                  },
                  {
                    title: "Quality First",
                    icon: "⚡",
                    description:
                      "Writing clean, maintainable code that stands the test of time. Quality over quantity, always.",
                  },
                  {
                    title: "Collaboration",
                    icon: "🤝",
                    description:
                      "Great software is built by great teams. I believe in open communication and knowledge sharing.",
                  },
                  {
                    title: "User-Centric",
                    icon: "🎯",
                    description:
                      "Every decision should be made with the end user in mind. Technology serves people, not the other way around.",
                  },
                ].map((value, index) => (
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
                    className="text-center p-4"
                  >
                    <motion.div
                      className="text-4xl mb-3"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-primary-blue text-sm leading-relaxed">
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
