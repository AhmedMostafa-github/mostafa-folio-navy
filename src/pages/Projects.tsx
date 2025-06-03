
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    tags: ["React", "Firebase", "Material-UI", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with data visualization, location-based forecasts, and interactive maps using modern APIs.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
    tags: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for social media metrics with data visualization and automated reporting capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Python", "Django", "PostgreSQL", "Chart.js", "Redis"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 5,
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    tags: ["React Native", "Node.js", "JWT", "SQLite", "Push Notifications"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps users create high-quality content using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI API"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
          >
            Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-primary-blue max-w-3xl mx-auto"
          >
            A showcase of my recent work, demonstrating expertise across various technologies 
            and industries. Each project represents a unique challenge solved with modern solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border hover:border-blue-500/50 transition-all duration-500 overflow-hidden group card-glow">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover overlay with buttons */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-black/70 rounded-full text-white hover:bg-blue-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-black/70 rounded-full text-white hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </motion.div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-primary-blue">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button asChild size="sm" variant="outline" className="flex-1 border-blue-500/50 text-primary-blue hover:bg-blue-500/10">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button asChild size="sm" className="flex-1 bg-active-tab hover:glow-effect">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
