import { useState, useEffect } from 'react';
import { Brain, Shield, Code, Palette, Zap, Target } from 'lucide-react';

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
  Shield: Shield,
  Code: Code,
  Brain: Brain,
  Palette: Palette
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
    } as any // Use Zap for Learning
  ];

  const skills: Skill[] = [
    { id: 1, name: "React", category: "primary" },
    { id: 2, name: "TypeScript", category: "primary" },
    { id: 3, name: "Tailwind CSS", category: "secondary" },
    { id: 4, name: "UI/UX", category: "accent" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am <span className="text-primary font-semibold">Delice Keza</span>, a UI/UX & Frontend Engineer - Mobile App Developer. I focus on building modern, responsive, and user-centered web applications that combine clean design with reliable functionality.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I have worked on multiple projects across different domains, including mental health, education, healthcare, food sustainability, and community support platforms. These projects have strengthened my ability to translate real-world problems into practical, scalable digital solutions.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am continuously learning and improving my skills by exploring modern UI/UX trends, understanding user behavior, and applying thoughtful design principles. My goal is to create digital experiences that are not only visually appealing but also intuitive, accessible, and impactful.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Core Stack:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className={`px-3 py-1 bg-${skill.category}/10 text-${skill.category} rounded-full text-sm font-mono`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = (iconMap as any)[item.icon] || Zap;
                return (
                  <div
                    key={item.id}
                    className="floating-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-muted-foreground dark:bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12+", label: "Projects Completed" },
              { number: "250+", label: "Code Contributions" },
              { number: "1000s", label: "User Reach" },
              { number: "100k+", label: "Lines of Code" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;