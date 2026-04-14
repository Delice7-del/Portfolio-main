import { motion } from 'framer-motion';
import { LuArrowDown, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
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

          {/* Right Content: Profile Picture Hexagon & Floating Aesthetics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[340px] md:max-w-[380px] xl:max-w-[420px] mx-auto lg:mx-0">
               {/* Ambient Glow behind hexagon */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 rounded-full blur-[100px]" />
               
               {/* Decorative Orbital Rings */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] aspect-square border-[1.5px] border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] aspect-square border border-dashed border-primary/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

               {/* Hexagon Image Container */}
               <div 
                 className="relative w-full aspect-[1/1.1] bg-primary flex items-end justify-center overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02]"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
               >
                 <img 
                   src={profileImg} 
                   alt="Profile" 
                   className="w-full h-full object-cover object-top"
                 />
               </div>

               {/* Floating Badge 1: Available for Work */}
               <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-4 lg:-right-8 bg-surface-elevated/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-5 py-3 flex items-center gap-3 z-20"
               >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c896] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00c896]"></span>
                  </span>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">Available for work</span>
               </motion.div>

               {/* Floating Badge 2: Tech Specialty */}
               <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-4 lg:-left-12 bg-surface-elevated/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-4 flex items-center gap-4 z-20"
               >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/30">
                    UI
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Digital Design</p>
                    <p className="text-xs text-muted-foreground font-medium">Premium Aesthetics</p>
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