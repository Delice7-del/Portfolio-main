import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuCode, LuDatabase, LuShield, LuPalette, LuCpu, LuTerminal, LuChevronDown } from 'react-icons/lu';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: 'Code' | 'Database' | 'Shield' | 'Palette' | 'Brain' | 'Terminal';
  skills: Skill[];
  tag: string;
}

const iconMap = {
  Code: LuCode,
  Database: LuDatabase,
  Shield: LuShield,
  Palette: LuPalette,
  Brain: LuCpu,
  Terminal: LuTerminal,
};

const SkillsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: 'Frontend Engineering & Design',
      icon: 'Code',
      tag: 'layer:01',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'Framer Motion / Animations', level: 85 },
        { name: 'UI/UX Design (Figma, Adobe XD)', level: 90 },
      ],
    },
    {
      id: 2,
      title: 'Cross-Platform Mobile Apps',
      icon: 'Palette',
      tag: 'layer:02',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter (Basics)', level: 75 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Interactive Prototypes', level: 90 },
      ],
    },
    {
      id: 3,
      title: 'Backend & API Systems',
      icon: 'Terminal',
      tag: 'layer:03',
      skills: [
        { name: 'Node.js / Express', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Java / Spring Boot', level: 80 },
        { name: 'RESTful APIs', level: 75 },
      ],
    },
  ];

  const philosophy = [
    { label: 'Uptime',         value: '99.9%'    },
    { label: 'Response Time',  value: '<100ms'   },
    { label: 'Codebase',       value: 'TypeSafe' },
    { label: 'Maintainability',value: 'High'     },
  ];

  return (
    <section id="skills" className="py-24 bg-surface border-t border-white/5 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4 text-primary font-mono tracking-widest text-sm uppercase">
            <span>// Expertise</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <h2 className="section-heading mb-0">Engineering Expertise</h2>
            <p className="text-sm text-muted-foreground font-mono">
              {skillCategories.length} domains · full-stack capable
            </p>
          </div>
        </motion.div>

        {/* ── Skill Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            const isExpanded = expandedId === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-white/8 relative group overflow-hidden"
              >
                {/* Hover left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                {/* Top subtle grid */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(186,126,27,1) 1px, transparent 1px), linear-gradient(90deg, rgba(186,126,27,1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                <div className="p-7 relative z-10">
                  {/* Tag + Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] font-mono text-primary/50 uppercase tracking-[0.4em]">
                      {category.tag}
                    </span>
                    <div className="w-9 h-9 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-6 leading-tight tracking-tight">
                    {category.title}
                  </h3>

                  {/* Skills with progress bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, si) => (
                      <div key={si}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs text-muted-foreground font-mono">{skill.name}</span>
                          <span className="text-[10px] text-primary/60 font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted/30 h-[3px] relative overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 + si * 0.08, ease: 'easeOut' }}
                            className="h-full bg-primary absolute top-0 left-0"
                          />
                          {/* Sheen animation */}
                          <motion.div
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '300%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.6 + si * 0.08 }}
                            className="absolute top-0 left-0 h-full w-8 bg-white/20 skew-x-12"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Philosophy Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-white/8 p-8 relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/40" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-3">
                // Engineering Philosophy
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                True engineering isn't just about knowing frameworks — it's about solving complex problems efficiently.
                I prioritize clean code, scalable architectures, and seamless user experiences over fleeting trends.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 shrink-0">
              {philosophy.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-primary font-bold text-xl mb-1">{m.value}</div>
                  <div className="text-muted-foreground uppercase tracking-widest text-[9px] font-mono">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;