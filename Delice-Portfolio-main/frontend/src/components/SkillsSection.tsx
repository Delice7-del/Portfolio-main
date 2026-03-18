import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuCode, LuDatabase, LuShield, LuPalette, LuBrain, LuTerminal } from 'react-icons/lu';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: 'Code' | 'Database' | 'Shield' | 'Palette' | 'Brain' | 'Terminal';
  color: 'primary' | 'secondary' | 'accent';
  skills: Skill[];
}

interface Learning {
  id: number;
  title: string;
  description: string;
  category: 'primary' | 'secondary' | 'accent';
}

const iconMap = {
  Code: LuCode,
  Database: LuDatabase,
  Shield: LuShield,
  Palette: LuPalette,
  Brain: LuBrain,
  Terminal: LuTerminal
};

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Frontend & UI/UX Mastery",
      icon: "Code",
      color: "primary",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Framer Motion / Animations", level: 85 },
        { name: "UI/UX Design (Figma, Adobe XD)", level: 90 }
      ]
    },
    {
      id: 2,
      title: "Mobile Development",
      icon: "Code",
      color: "accent",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter (Basics)", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "Interactive Prototypes", level: 90 }
      ]
    },
    {
      id: 3,
      title: "Backend Development",
      icon: "Terminal",
      color: "secondary",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "RESTful APIs", level: 75 }
      ]
    },

  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      primary: { bg: 'bg-primary', text: 'text-primary', border: 'border-primary' },
      secondary: { bg: 'bg-secondary', text: 'text-secondary', border: 'border-secondary' },
      accent: { bg: 'bg-accent', text: 'text-accent', border: 'border-accent' }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || '';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text">Technical Depth</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I create interactive, high-quality frontend and mobile applications with a strong focus on UI/UX design, responsiveness, and user-friendly experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon];
            const colorClass = getColorClass(category.color, 'bg');

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                key={category.id}
                className="floating-card p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                          className={`h-2 rounded-full ${colorClass}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto floating-card p-8">
            <h3 className="text-2xl font-bold gradient-text mb-6">Beyond the Buzzwords</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I go beyond tools, mastering design principles and frontend workflows. My focus is on delivering responsive, user-friendly, and visually appealing apps.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              {[
                { label: "Reliability", value: "99.9%" },
                { label: "Latency", value: "<100ms" },
                { label: "Consistency", value: "TypeSafe" },
                { label: "Quality", value: "ZeroDebt" }
              ].map((metric, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-primary font-bold text-lg">{metric.value}</div>
                  <div className="text-muted-foreground uppercase tracking-wider text-[10px]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default SkillsSection;