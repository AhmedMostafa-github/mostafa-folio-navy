
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Code, Coffee } from "lucide-react";
import SplashCursor from "@/components/ui/splashCursor";
import CountUp from "@/components/ui/CountUp";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 hero-gradient">
      <div className="max-w-6xl mx-auto">
        <SplashCursor />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight pb-6">
            About Me
          </h1>
          <p className="text-xl text-[#D7E7F9] max-w-3xl mx-auto">
            Passionate full-stack developer with over <CountUp end={5} /> years of experience 
            building scalable web applications and mobile solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 card-glow">
              <CardHeader className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="mx-auto mb-4"
                >
                  <img
                    src="/ahmed.JPG"
                    alt="Ahmed Mostafa"
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </motion.div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Ahmed Mostafa
                </CardTitle>
                <p className="text-primary font-medium">Full-Stack Developer</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 text-muted-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Cairo, Egypt</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-muted-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <span><CountUp end={5} suffix="+" /> Years Experience</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-muted-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Code className="w-5 h-5 text-primary" />
                  <span><CountUp end={20} suffix="+" /> Technologies</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-muted-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Coffee className="w-5 h-5 text-primary" />
                  <span><CountUp end={1000} suffix="+" /> Cups of Coffee</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio Section */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-primary-blue leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over <CountUp end={5} /> years of experience 
                  in building scalable web applications and mobile solutions. My journey in 
                  software development started with a curiosity about how things work behind 
                  the scenes of the websites and apps we use daily.
                </p>
                <p>
                  Throughout my career, I've had the opportunity to work on diverse projects 
                  ranging from e-commerce platforms to mobile banking applications. I believe 
                  in writing clean, maintainable code and staying up-to-date with the latest 
                  technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community. 
                  I'm always excited about taking on new challenges and building solutions 
                  that make a positive impact.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Projects Completed", value: 50, suffix: "+" },
                { label: "Happy Clients", value: 25, suffix: "+" },
                { label: "Code Commits", value: 2000, suffix: "+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-card border border-border rounded-lg card-glow"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Current Focus */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 card-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Current Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React & Next.js",
                    "React Native",
                    "Node.js",
                    "TypeScript",
                    "Cloud Architecture",
                    "AI/ML Integration",
                    "Mobile Development",
                    "DevOps",
                  ].map((focus, index) => (
                    <motion.div
                      key={focus}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                      >
                        {focus}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
