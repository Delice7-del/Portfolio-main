import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuExternalLink, LuGithub, LuCode, LuShield,
  LuHeart, LuActivity, LuCoffee, LuArrowUpRight
} from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  demoUrl: string | null;
  githubUrl: string | null;
  image: string;
  label: string;
  featured: boolean;
  year: string;
}

/* ── Unique SVG visual per project type ── */
const ProjectVisual = ({ type }: { type: string }) => {
  const visuals: Record<string, JSX.Element> = {
    health: (
      <svg viewBox="0 0 120 80" className="w-32 opacity-30" fill="none">
        <rect x="10" y="30" width="100" height="2" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <polyline points="10,60 30,20 50,50 70,30 90,45 110,15" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="70" cy="30" r="3" fill="currentColor" />
        <rect x="52" y="38" width="10" height="2" fill="currentColor" />
        <rect x="56" y="34" width="2" height="10" fill="currentColor" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 120 80" className="w-32 opacity-30" fill="none">
        <circle cx="60" cy="40" r="16" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="40" r="6" fill="currentColor" opacity="0.4" />
        <line x1="10" y1="20" x2="44" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="10" y1="60" x2="44" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="76" y1="40" x2="110" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="76" y1="40" x2="110" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="10" cy="20" r="3" fill="currentColor" />
        <circle cx="10" cy="60" r="3" fill="currentColor" />
        <circle cx="110" cy="20" r="3" fill="currentColor" />
        <circle cx="110" cy="60" r="3" fill="currentColor" />
      </svg>
    ),
    social: (
      <svg viewBox="0 0 120 80" className="w-32 opacity-30" fill="none">
        <circle cx="30" cy="40" r="12" stroke="currentColor" strokeWidth="1" />
        <circle cx="90" cy="40" r="12" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="25" r="10" stroke="currentColor" strokeWidth="1" />
        <line x1="42" y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="52" y1="31" x2="38" y2="38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="68" y1="31" x2="82" y2="38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
    finance: (
      <svg viewBox="0 0 120 80" className="w-32 opacity-30" fill="none">
        <rect x="15" y="55" width="14" height="16" stroke="currentColor" strokeWidth="1" />
        <rect x="38" y="42" width="14" height="29" stroke="currentColor" strokeWidth="1" />
        <rect x="61" y="30" width="14" height="41" stroke="currentColor" strokeWidth="1" />
        <rect x="84" y="18" width="14" height="53" stroke="currentColor" strokeWidth="1" />
        <polyline points="22,52 45,38 68,26 91,14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="91" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
    events: (
      <svg viewBox="0 0 120 80" className="w-32 opacity-30" fill="none">
        <rect x="20" y="15" width="80" height="50" rx="2" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="28" x2="100" y2="28" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="8" x2="40" y2="22" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="8" x2="80" y2="22" stroke="currentColor" strokeWidth="1.5" />
        <rect x="34" y="36" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="0.8" />
        <rect x="54" y="36" width="12" height="10" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="74" y="36" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="0.8" />
        <rect x="34" y="52" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="0.8" />
        <rect x="54" y="52" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  };

  return (
    <div className="text-primary flex items-center justify-center">
      {visuals[type] ?? (
        <svg viewBox="0 0 120 80" className="w-32 opacity-20" fill="none">
          <rect x="10" y="10" width="100" height="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: LuCode },
    { id: 'welfare', label: 'Welfare', icon: LuHeart },
    { id: 'security', label: 'Security', icon: LuShield },
    { id: 'health', label: 'Health', icon: LuActivity },
    { id: 'food', label: 'Food', icon: LuCoffee },
  ];

  const allProjects: Project[] = [
    {
      id: 1,
      title: 'HealthConnect',
      description: 'A modular healthcare system designed to manage patients, professionals, and medical records with advanced security.',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB'],
      category: 'health',
      demoUrl: '#',
      githubUrl: 'https://github.com/Delice7-del/HealthConnect',
      image: 'health',
      label: 'health · care network',
      featured: true,
      year: '2024',
    },
    {
      id: 2,
      title: 'CamAI',
      description: 'Real-time surveillance system that uses computer vision to detect and alert users about critical events.',
      technologies: ['Flutter', 'Python', 'TensorFlow', 'FastAPI'],
      category: 'security',
      demoUrl: '#',
      githubUrl: 'https://github.com/Delice7-del/CamAI',
      image: 'ai',
      label: 'ai · intelligent monitoring',
      featured: true,
      year: '2024',
    },
    {
      id: 3,
      title: 'Food-Share',
      description: 'A community-driven platform that connects people with surplus food to those in need, minimizing waste.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'food',
      demoUrl: '#',
      githubUrl: 'https://github.com/Delice7-del/Food-Share',
      image: 'social',
      label: 'social · food sharing',
      featured: false,
      year: '2023',
    },
    {
      id: 4,
      title: 'Sponsify',
      description: 'Makes it easy to support education, healthcare, and daily needs for underprivileged children via sponsorships.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'welfare',
      demoUrl: '#',
      githubUrl: 'https://github.com/Delice7-del/Sponsify',
      image: 'finance',
      label: 'finance · support network',
      featured: false,
      year: '2023',
    },
    {
      id: 5,
      title: 'EventiaPro',
      description: 'A Java-based secure event management system that enhances how users discover and interact with events while giving administrators full control.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL'],
      category: 'welfare',
      demoUrl: '#',
      githubUrl: 'https://github.com/Delice7-del/EventiaPro',
      image: 'events',
      label: 'event-mgt · secure workflow',
      featured: false,
      year: '2024',
    },
  ];

  const projects =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4 text-primary font-mono tracking-widest text-sm uppercase">
            <span>// Portfolio</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="section-heading mb-0">Selected Projects</h2>
            <p className="text-sm text-muted-foreground font-mono">
              {allProjects.length} projects · impact-driven builds
            </p>
          </div>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-0 mb-16 border border-white/8 w-fit"
        >
          {categories.map((category, i) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`relative flex items-center gap-2 px-5 py-3 text-sm font-mono transition-all duration-300 border-r border-white/8 last:border-r-0 ${
                activeFilter === category.id
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/4'
              }`}
            >
              <category.icon className="h-3.5 w-3.5" />
              <span>{category.label}</span>
              {activeFilter === category.id && (
                <motion.div
                  layoutId="filter-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/40"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Project Grid ── */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`group relative bg-surface border border-white/8 overflow-hidden hover:border-primary/30 transition-all duration-500 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-white border-none rounded-none font-bold shadow-none text-[10px] tracking-widest">
                      FEATURED
                    </Badge>
                  </div>
                )}

                {/* Project index number */}
                <div className="absolute top-4 left-4 z-10 font-mono text-[10px] text-white/20 tracking-widest">
                  {String(project.id).padStart(2, '0')}
                </div>

                {/* ── Visual header ── */}
                <div className="h-48 bg-surface-elevated flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(186,126,27,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(186,126,27,0.4) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />

                  {/* Glow blobs */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-primary/8 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-primary/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

                  {/* SVG visual */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <ProjectVisual type={project.image} />
                    <span className="text-[9px] font-mono text-primary/40 uppercase tracking-[0.4em]">
                      {project.label}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/4 transition-colors duration-500 z-10" />
                </div>

                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-20" />

                {/* ── Card body ── */}
                <div className="p-7">
                  {/* Title + year row */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-foreground font-bold text-lg tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-muted-foreground font-mono text-[10px] mt-1 ml-2 shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies — dot separated */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-7">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span key={techIndex} className="flex items-center gap-2">
                        <span className="text-xs text-primary/70 font-mono">{tech}</span>
                        {techIndex < Math.min(project.technologies.length, 5) - 1 && (
                          <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
                        )}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs text-muted-foreground font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="flex-1 tech-button rounded-none text-xs h-9"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <LuExternalLink className="mr-2 h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 rounded-none border-white/10 hover:bg-primary hover:border-primary hover:text-white text-muted-foreground text-xs h-9"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <LuGithub className="mr-2 h-3.5 w-3.5" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border border-white/8 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-foreground font-bold text-lg mb-1">Want to see more?</p>
            <p className="text-muted-foreground text-sm font-mono">
              All source code is open on GitHub. Explore the rest of the work.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button className="tech-button h-11 px-6 rounded-none" asChild>
              <a href="https://github.com/Delice7-del" target="_blank" rel="noopener noreferrer">
                <LuGithub className="mr-2 h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
            <Button variant="outline" className="h-11 px-5 border-white/10 hover:border-primary hover:bg-primary hover:text-white rounded-none text-muted-foreground" asChild>
              <a href="/case-studies">
                Case Studies
                <LuArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="h-11 px-5 border-white/10 hover:border-primary hover:bg-primary hover:text-white rounded-none text-muted-foreground" asChild>
              <a href="/open-source">
                Open Source
                <LuArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="h-11 px-5 border-white/10 hover:border-primary hover:bg-primary hover:text-white rounded-none text-muted-foreground" asChild>
              <a href="/journal">
                Journal
                <LuArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;