import { motion } from 'framer-motion';
import { LuArrowDown, LuGithub, LuLinkedin, LuTwitter, LuMail, LuCode, LuPalette } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const HeroSection = () => {
  const socialLinks = [
    { icon: LuGithub, href: "https://github.com/Delice7-del" },
    { icon: LuLinkedin, href: "https://www.linkedin.com/in/delice-keza-b41382333/" },
    { icon: LuMail, href: "mailto:delicekeza0@gmail.com" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
      {/* Abstract Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content: Text & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="flex items-center space-x-3 text-primary font-mono mb-4">
              <span className="text-sm tracking-[0.2em] uppercase">// Design & Engineering Excellence</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Designing the <br />
              <span className="text-primary">
                <TypewriterText text="Future of Digital Mobility" delay={500} />
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I design responsive web and mobile apps with intuitive interfaces and seamless user experiences that solve real-world problems. My work focuses on scalability, performance, and user-centered design.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="tech-button h-14 text-lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-primary/20 hover:bg-primary/5 hover:text-muted-foreground" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8 border-t border-border">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Content: Premium Visual Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />

              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] w-[60%] aspect-video bg-surface border border-white/10 rounded-lg shadow-2xl p-4 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="h-1 w-20 bg-white/10 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded" />
                  <div className="h-2 w-[80%] bg-white/5 rounded" />
                  <div className="h-2 w-[90%] bg-white/5 rounded" />
                </div>
                <div className="absolute bottom-4 right-4 text-primary opacity-20"><LuCode size={40} /></div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[10%] right-[5%] w-[55%] aspect-square bg-surface-elevated border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <LuPalette className="text-primary w-8 h-8" />
                </div>
                <div className="h-2 w-24 bg-primary/20 rounded mb-2" />
                <div className="h-1 w-16 bg-white/10 rounded" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] right-0 w-[40%] aspect-[3/4] bg-background border border-primary/20 rounded-xl shadow-xl p-4"
              >
                <div className="h-1 w-12 bg-primary/40 rounded mb-6" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-white/5 rounded" />
                  <div className="aspect-square bg-white/5 rounded" />
                  <div className="aspect-square bg-white/5 rounded" />
                  <div className="aspect-square bg-white/5 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <LuArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;