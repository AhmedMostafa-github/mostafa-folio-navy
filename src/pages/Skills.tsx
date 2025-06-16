import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SplashCursor from "@/components/ui/splashCursor";
import DecryptedText from "@/components/ui/DecryptedText";

const skillCategories = [
  {
    category: "Vibe Coding",
    icon: "🆕",
    skills: ["Lovable", "Cursor", "Bolt", "Replit", "Copilot"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚛️",
    skills: [
      "React Native",
      "ReactJS",
      "XState",
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Socket.IO",
      "GraphQL",
      "mmkv",
      "REST APIs",
      "React Query",
      "Next.js",
      // "Flutter",
    ],
  },
  {
    category: "Mobile & Web & Smart TV",
    icon: "📱",
    skills: [
      "webOS",
      "iOS Development",
      "Android Development",
      "Native modules",
      "Push Notifications",
      "App Store Deployment",
      "SDK integration",
      "HLS",
      "ABR",
    ],
  },
  {
    category: "Core Programming Languages",
    icon: "⚙️",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "Swift", "Kotlin"],
  },

  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      "Expo",
      "SSL Pinning",
      "AES",
      "RSA",
      "Fastlane",
      "Azure",
      "Fastlane",
      // "Docker",
      "CI/CD",
      "Git",
      "GitHub",
      "Firebase",
      "CodePush",
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <SplashCursor />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight pb-6">
            <DecryptedText
              text="Skills & Technologies"
              animateOn="view"
              speed={100}
              sequential={true}
              revealDirection="start"
            />
          </h1>
          <p className="text-xl text-[#D7E7F9] max-w-4xl mx-auto">
            <DecryptedText
              text="A comprehensive overview of the technologies, frameworks, and tools I use to build scalable and efficient solutions across the full development stack."
              animateOn="view"
              speed={15}
              sequential={true}
              revealDirection="start"
            />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-foreground">
                    <motion.span
                      className="text-3xl mr-3"
                      animate={{
                        scale: [1, 1.2, 1.1, 1.3, 1],
                        rotate: [0, -10, 10, -5, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: 0,
                        ease: "easeInOut",
                      }}
                      style={{
                        animation: "none",
                      }}
                      whileHover={{
                        scale: [1, 1.2, 1.1, 1.3, 1],
                        rotate: [0, -10, 10, -5, 0],
                        transition: { duration: 0.6 },
                      }}
                    >
                      {category.icon}
                    </motion.span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-2 px-3 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-navy-gradient hover:text-white transition-all duration-200 cursor-default backdrop-blur-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-card border-border overflow-hidden card-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {[
                  {
                    title: "Problem Solving",
                    description: "Analytical thinking and debugging",
                  },
                  {
                    title: "System Design",
                    description: "Scalable architecture planning",
                  },
                  {
                    title: "Team Leadership",
                    description: "Mentoring and project management",
                  },
                  {
                    title: "Performance & Security",
                    description: "Code hardening and security optimization",
                  },
                ].map((competency, index) => (
                  <motion.div
                    key={competency.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="p-4"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {competency.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {competency.description}
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

export default Skills;
