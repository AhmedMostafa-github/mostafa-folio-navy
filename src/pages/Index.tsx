
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Rocket, Mail, Download, Linkedin } from "lucide-react";
import SplashCursor from "@/components/ui/splashCursor";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You'll need to add your resume file to the public folder
    link.download = "Ahmed_Mostafa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16 hero-gradient">
      <SplashCursor />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Avatar Section */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                  className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 card-glow animate-glow overflow-hidden mt-1.5"
                >
                  <motion.img
                    src="/ahmed.JPG"
                    alt="Ahmed Mostafa"
                    className="w-full h-full object-cover rounded-full "
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border border-blue-500/20"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent pb-2"
            >
              HOLA 👋🏻, I'm Ahmed Mostafa
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium text-glow"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-primary-blue"
              >
                Senior Mobile Engineer
              </motion.span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#D7E7F9] md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with modern technologies.
              Specialized in Mobile development, scalable architectures, and
              innovative solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-active-tab hover:glow-effect transition-all duration-300"
                >
                  <Link to="/projects">
                    <Rocket className="w-5 h-5 mr-2" />
                    View Projects
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-500/50 text-primary-blue hover:bg-blue-500/10"
                >
                  <Link to="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 mt-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/ahmedm0stafa/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-card border border-blue-500/30 text-primary-blue hover:text-white hover:bg-blue-500/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-card border border-blue-500/30 text-primary-blue hover:text-white hover:bg-blue-500/20 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 opacity-30"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Code className="w-12 h-12 text-primary-blue" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-30"
          animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Rocket className="w-12 h-12 text-primary-blue" />
        </motion.div>
      </section>

      {/* Quick Info Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent pb-2">
              Building the Future
            </h2>
            <p className="text-xl text-primary-blue max-w-3xl mx-auto">
              With years of experience in software development, I focus on
              creating scalable solutions that drive business growth and user
              satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5+ Years Experience",
                description: "Mobile development across various industries",
                icon: "📈",
              },
              {
                title: "20+ Projects",
                description:
                  "Successfully delivered projects from concept to production",
                icon: "🚀",
              },
              {
                title: "Modern Front-end Stack",
                description: "Expertise in React, React Native and Next.js",
                icon: "⚡",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 card-glow"
              >
                <motion.div
                  className="text-5xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-primary-blue">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
