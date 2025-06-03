
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      "React", "TypeScript", "Next.js", "Vue.js", "Angular",
      "Tailwind CSS", "Material-UI", "Styled Components",
      "Redux", "Zustand", "React Query", "Webpack", "Vite"
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js", "Python", "Django", "FastAPI", "Express.js",
      "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs",
      "Microservices", "Docker", "Kubernetes"
    ]
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: [
      "React Native", "Flutter", "iOS Development", "Android Development",
      "Expo", "Firebase", "Push Notifications", "App Store Deployment"
    ]
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
      "CI/CD", "GitHub Actions", "Jenkins", "Terraform",
      "Git", "Linux", "Nginx", "Apache"
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use 
            to build scalable and efficient solutions across the full development stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-foreground">
                    <span className="text-3xl mr-3">{category.icon}</span>
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
                          delay: categoryIndex * 0.2 + skillIndex * 0.05 
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm py-2 px-3 hover:bg-navy-gradient hover:text-white transition-all duration-200 cursor-default"
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
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {[
                  { title: "Problem Solving", description: "Analytical thinking and debugging" },
                  { title: "System Design", description: "Scalable architecture planning" },
                  { title: "Team Leadership", description: "Mentoring and project management" },
                  { title: "Performance Optimization", description: "Code and database optimization" }
                ].map((competency, index) => (
                  <motion.div
                    key={competency.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
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
