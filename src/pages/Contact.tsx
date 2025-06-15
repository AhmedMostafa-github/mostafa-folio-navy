import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Mail,
  Linkedin,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Star,
  Zap,
} from "lucide-react";
import SplashCursor from "@/components/ui/splashCursor";
import DecryptedText from "@/components/ui/DecryptedText";
import ScrollFloat from "@/components/ui/ScrollFloat";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return; // Prevent double submission

      setIsSubmitting(true);

      try {
        const { error } = await supabase.from("contact_submissions").insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        ]);

        if (error) {
          console.error("Error submitting form:", error);
          toast({
            title: "Error",
            description:
              "There was an error submitting your message. Please try again.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Message Sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        toast({
          title: "Error",
          description: "There was an unexpected error. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, toast]
  );

  // Memoize animation variants to prevent recreation on each render
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  // Memoize the features data to prevent recreation
  const features = useMemo(
    () => [
      {
        icon: Zap,
        title: "Fast Delivery",
        description: "Quick turnaround times without compromising quality",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/10 to-orange-500/10",
        borderColor: "border-yellow-500/20",
      },
      {
        icon: Star,
        title: "Quality Focused",
        description: "Attention to detail and modern best practices",
        color: "text-blue-400",
        bgColor: "from-blue-500/10 to-purple-500/10",
        borderColor: "border-blue-500/20",
      },
      {
        icon: MessageCircle,
        title: "Great Communication",
        description: "Regular updates and transparent collaboration",
        color: "text-green-400",
        bgColor: "from-green-500/10 to-emerald-500/10",
        borderColor: "border-green-500/20",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 hero-gradient">
      <SplashCursor />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight pb-6"
            transition={{ duration: 0.2 }}
          >
            <DecryptedText
              text="Let's Create Something"
              animateOn="view"
              speed={70}
              sequential={true}
              revealDirection="start"
            />
            <motion.span
              className="block text-primary-blue"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <DecryptedText
                text="Amazing Together"
                animateOn="view"
                speed={100}
                sequential={true}
                revealDirection="start"
              />
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl text-[#D7E7F9] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <DecryptedText
              text=" Ready to bring your ideas to life? I'm here to help you build exceptional digital experiences. Let's discuss your project and make it happen."
              animateOn="view"
              speed={15}
              sequential={true}
              revealDirection="start"
            />
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Main Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="bg-card border-border hover:border-blue-500/30 transition-all duration-500 shadow-2xl card-glow">
              <CardHeader className="pb-8">
                <motion.div
                  className="flex items-center gap-3 mb-3.5"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Send Message
                  </CardTitle>
                </motion.div>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-3"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 h-12"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-3"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 h-12"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label
                      htmlFor="subject"
                      className="text-foreground font-medium"
                    >
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion / Collaboration Opportunity"
                      required
                      disabled={isSubmitting}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 h-12"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label
                      htmlFor="message"
                      className="text-foreground font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                      required
                      disabled={isSubmitting}
                      rows={12}
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-active-tab hover:glow-effect transition-all duration-300 h-14 text-lg font-semibold"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Quick Contact */}
            <Card className="bg-card border-border hover:border-blue-500/30 transition-all duration-500 shadow-xl card-glow">
              <CardHeader>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Quick Contact
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 p-3 rounded-lg bg-background/30 border border-border/30"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(51, 153, 255, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">
                      ahmed-emam@outlook.com
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-3 rounded-lg bg-background/30 border border-border/30"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(51, 153, 255, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Cairo, Egypt</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-3 rounded-lg bg-background/30 border border-border/30"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(51, 153, 255, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Response Time
                    </p>
                    <p className="text-foreground font-medium">
                      Within 24 hours
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Social Connect */}
            <Card className="bg-card border-border hover:border-blue-500/30 transition-all duration-500 shadow-xl card-glow">
              <CardHeader>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Let's Connect
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start hover:bg-active-tab hover:border-primary transition-all duration-300 h-12"
                  >
                    <a
                      href="https://www.linkedin.com/in/ahmedm0stafa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start hover:bg-active-tab hover:border-primary transition-all duration-300 h-12"
                  >
                    <a href="mailto:ahmed-emam@outlook.com">
                      <Mail className="w-5 h-5 mr-3" />
                      Direct Email
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>

            {/* Status Badge */}
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 shadow-xl card-glow">
              <CardContent className="pt-6">
                <motion.div
                  className="flex items-center gap-3 mb-3"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-4 h-4 bg-green-500 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-foreground font-semibold text-lg">
                    Available for Projects
                  </span>
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new opportunities and exciting
                  collaborations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Why Work With Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <ScrollFloat
            containerClassName="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
            textClassName="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
          >
            Why Work With Me?
          </ScrollFloat>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${item.bgColor} border ${item.borderColor} backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.bgColor} border ${item.borderColor} flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-primary-blue">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
