
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My journey into software development began with a curiosity about how things work. 
                  What started as tinkering with HTML and CSS in college evolved into a passion for 
                  creating robust, scalable applications that solve real-world problems.
                </p>
                <p>
                  Over the past 5+ years, I've had the privilege of working with diverse teams and 
                  technologies, from startups to enterprise companies. This experience has taught me 
                  that great software is not just about clean code—it's about understanding user needs, 
                  collaborating effectively, and continuously learning.
                </p>
                <p>
                  I believe in the power of technology to transform businesses and improve lives. 
                  Whether I'm architecting a new system, mentoring a colleague, or optimizing performance, 
                  I approach every challenge with enthusiasm and a commitment to excellence.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always excited about 
                  the next challenge and the opportunity to create something meaningful.
                </p>
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
            {/* Profile Image Placeholder */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-40 h-40 mx-auto bg-navy-gradient rounded-full flex items-center justify-center text-6xl font-bold text-white mb-4">
                  AM
                </div>
                <h3 className="text-xl font-semibold text-foreground">Ahmed Mostafa</h3>
                <p className="text-primary">Senior Software Engineer</p>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground">Cairo, Egypt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="text-foreground">5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="text-foreground">Full-Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available</span>
                  <span className="text-primary">Open to opportunities</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-foreground">
                Core Values & Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Continuous Learning",
                    icon: "📚",
                    description: "Technology evolves rapidly, and so should we. I'm committed to staying current with the latest trends and best practices."
                  },
                  {
                    title: "Quality First",
                    icon: "⚡",
                    description: "Writing clean, maintainable code that stands the test of time. Quality over quantity, always."
                  },
                  {
                    title: "Collaboration",
                    icon: "🤝",
                    description: "Great software is built by great teams. I believe in open communication and knowledge sharing."
                  },
                  {
                    title: "User-Centric",
                    icon: "🎯",
                    description: "Every decision should be made with the end user in mind. Technology serves people, not the other way around."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center p-4"
                  >
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
