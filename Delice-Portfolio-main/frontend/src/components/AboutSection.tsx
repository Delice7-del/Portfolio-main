import { useState, useEffect } from 'react';
import { LuSparkles, LuShield, LuCode, LuPalette, LuZap, LuTarget } from 'react-icons/lu';
import { motion } from 'framer-motion';

interface Highlight {
  id: number;
  title: string;
  description: string;
  icon: 'Shield' | 'Code' | 'Brain' | 'Palette';
}

interface Skill {
  id: number;
  name: string;
  category: 'primary' | 'secondary' | 'accent';
}

const iconMap = {
  Shield: LuShield,
  Code: LuCode,
  Brain: LuSparkles,
  Palette: LuPalette
};

const AboutSection = () => {
  const highlights: Highlight[] = [
    {
      id: 1,
      title: "Developer",
      description: "Frontend-focused developer with experience in building dynamic web applications using modern JavaScript frameworks.",
      icon: "Code"
    },
    {
      id: 2,
      title: "Designer",
      description: "UI/UX enthusiast skilled in wireframing, prototyping, and designing user-friendly interfaces.",
      icon: "Palette"
    },
    {
      id: 3,
      title: "Passion",
      description: "Driven by the desire to create meaningful digital products that solve real problems.",
      icon: "Brain"
    },
    {
      id: 4,
      title: "Learning",
      description: "Exploring UI/UX psychology, design systems, and emerging technologies to grow as a developer.",
      icon: "Zap"
    } as any
  ];

  const skills: Skill[] = [
    { id: 1, name: "React", category: "primary" },
    { id: 2, name: "TypeScript", category: "primary" },
    { id: 3, name: "Tailwind CSS", category: "secondary" },
    { id: 4, name: "UI/UX", category: "accent" },
    { id: 5, name: "Java", category: "primary" },
    { id: 6, name: "Python", category: "secondary" },
    { id: 7, name: "Flutter", category: "accent" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      {/* Watermark Background */}
      <div className="absolute top-20 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none flex justify-center">
        <h1 className="text-[18rem] md:text-[24rem] font-black tracking-tighter text-foreground">ABOUT</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Subtle Section Header */}
          <div className="flex items-center gap-4 mb-20 lg:mb-24">
             <div className="h-[2px] w-12 bg-primary rounded" />
             <h2 className="text-foreground tracking-[0.2em] uppercase text-sm font-mono font-semibold">Behind the Code</h2>
          </div>

          <div className="flex flex-col xl:flex-row gap-16 xl:gap-24">
            
            {/* Left Content: Editorial Bio */}
            <div className="xl:w-1/2 space-y-10">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Engineering <span className="text-primary tracking-tight">Digital Experiences</span>
              </h3>
              
              <div className="space-y-6 relative border-l-[3px] border-primary/30 pl-6 md:pl-8 py-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am <span className="text-foreground font-semibold">Delice Keza</span>, a UI/UX & Frontend Engineer - Mobile App Developer. I focus on building modern, responsive, and user-centered web applications that combine clean design with reliable functionality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have worked on multiple projects across different domains, including mental health, education, healthcare, food sustainability, and community support platforms. These projects have strengthened my ability to translate real-world problems into practical, scalable digital solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am continuously learning and improving my skills by exploring modern UI/UX trends, understanding user behavior, and applying thoughtful design principles. My goal is to create digital experiences that are not only visually appealing but also intuitive, accessible, and impactful.
                </p>
              </div>

              {/* Core Stack - Reimagined */}
              <div className="pt-4">
                <div className="flex items-center space-x-3 mb-6">
                  <LuTarget className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground font-bold uppercase tracking-wider">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-5 py-2.5 bg-surface-elevated border border-border shadow-sm rounded-lg text-sm font-mono font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content: Staggered Bento Grid */}
            <div className="xl:w-1/2 flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {highlights.map((item, index) => {
                  const Icon = (iconMap as any)[item.icon] || LuZap;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      key={item.id}
                      className={`relative overflow-hidden bg-surface-elevated border border-border shadow-md p-6 lg:p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 ${
                        index % 2 === 1 ? 'md:translate-y-12' : ''
                      }`}
                    >
                      {/* Decorative Background Accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
                      
                      <div className="w-12 h-12 bg-background border border-border shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Stats: Sleek Glass Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 md:mt-32"
          >
            <div className="bg-surface/50 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
                {[
                  { number: "12+", label: "Projects Completed" },
                  { number: "250+", label: "Code Contributions" },
                  { number: "1000s", label: "User Reach" },
                  { number: "100k+", label: "Lines of Code" }
                ].map((stat, index) => (
                  <div key={index} className="text-center px-4 pt-6 md:pt-0 first:pt-0 pb-2 md:pb-0">
                    <div className="text-4xl md:text-5xl font-black text-foreground mb-1 md:mb-2 tracking-tight">{stat.number}</div>
                    <div className="text-xs text-primary font-bold tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;