
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const careerHistory = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    logo: "🚀",
    description: "Leading development of enterprise-scale applications with React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Led team of 5 developers on a $2M project",
      "Reduced application load time by 60%",
      "Implemented CI/CD pipeline reducing deployment time by 80%"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    company: "Digital Innovations Inc",
    position: "Full-Stack Developer",
    duration: "2020 - 2022",
    logo: "💡",
    description: "Developed and maintained web applications for various clients. Worked with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 15+ production applications",
      "Improved code coverage from 40% to 90%",
      "Mentored 3 junior developers"
    ],
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"]
  },
  {
    id: 3,
    company: "StartupTech",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    logo: "⭐",
    description: "Focused on frontend development using modern JavaScript frameworks. Collaborated closely with UX/UI designers to create intuitive user interfaces.",
    achievements: [
      "Developed responsive web applications",
      "Implemented modern design systems",
      "Optimized performance across all platforms"
    ],
    technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"]
  },
  {
    id: 4,
    company: "WebDev Agency",
    position: "Junior Developer",
    duration: "2018 - 2019",
    logo: "🌱",
    description: "Started my professional journey learning full-stack development. Worked on various client projects and gained experience with different technologies.",
    achievements: [
      "Completed 20+ client projects",
      "Learned modern development practices",
      "Built strong foundation in web technologies"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const Career = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Career Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional evolution from junior developer to senior engineer, 
            showcasing growth, achievements, and the technologies that shaped my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5" />

          {careerHistory.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-4'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10" />
              
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 ml-8 md:ml-0">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{job.logo}</span>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {job.position}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                        <span className="text-lg font-medium text-primary">
                          {job.company}
                        </span>
                        <Badge variant="outline" className="w-fit">
                          {job.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 text-xs">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
