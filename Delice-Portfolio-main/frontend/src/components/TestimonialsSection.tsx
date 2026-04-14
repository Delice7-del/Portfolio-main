import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuQuote, LuLinkedin } from 'react-icons/lu';

import person1 from '@/assets/person1.png';
import person2 from '@/assets/person2.png';
import person3 from '@/assets/person3.png';
import person4 from '@/assets/person4.png';
import person5 from '@/assets/person5.png';
import person6 from '@/assets/person6.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Bienvenue Alliance',
    role: 'CEO',
    company: 'BlinkTech',
    content: 'Delice is someone you can rely on. She delivers clean work and pays attention to the small details that really make a difference.',
    image: person1,
  },
  {
    id: 2,
    name: 'SHEMA Leandre',
    role: 'CEO',
    company: 'EchoSols',
    content: "I liked how Delice approaches problems — she's calm, thoughtful, and always finds a practical solution.",
    image: person2,
  },
  {
    id: 3,
    name: 'MUCYO Ivan',
    role: 'Frontend Developer',
    company: '',
    content: 'Working with Delice was smooth. She communicates well and keeps things organized, which made our work easier.',
    image: person3,
  },
  {
    id: 4,
    name: 'TWARIMITSWE Aaron',
    role: 'Backend Developer',
    company: '',
    content: 'Integration was easy with Delice. She understands how things connect and that saved us a lot of time.',
    image: person4,
  },
  {
    id: 5,
    name: 'KIRENGA Kenny',
    role: 'Team Lead',
    company: '',
    content: 'Delice is consistent and dependable. You give her a task, and you know it will get done properly.',
    image: person5,
  },
  {
    id: 6,
    name: 'UMURERWA Bonnette',
    role: 'UI/UX Designer',
    company: '',
    content: 'Delice really understands design. She pays attention to details and makes sure what we design is actually implemented the right way.',
    image: person6,
  },
];

const CYCLE_DURATION = 4000; // ms per panel

const TestimonialsSection = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = () => {
    // clear any existing
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const startTime = Date.now();

    // smooth progress bar (60fps)
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / CYCLE_DURATION) * 100, 100));
    }, 16);

    // advance panel
    timerRef.current = setInterval(() => {
      setActiveId((prev) => {
        const currentIndex = testimonials.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % testimonials.length;
        return testimonials[nextIndex].id;
      });
    }, CYCLE_DURATION);
  };

  const stopCycle = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  // restart cycle whenever activeId changes (progress resets)
  useEffect(() => {
    if (!isPaused) startCycle();
    return stopCycle;
  }, [activeId, isPaused]);

  const active = testimonials.find((t) => t.id === activeId)!;

  return (
    <section
      id="testimonials"
      className="py-24 bg-background border-t border-white/5 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-primary font-mono tracking-widest text-sm uppercase">
            <span>// Social Proof</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <h2 className="section-heading">What People Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Words from colleagues, leads, and clients I've had the privilege to build with.
          </p>
        </motion.div>

        {/* Panel Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-2 h-[460px] md:h-[520px]"
          onMouseEnter={() => { setIsPaused(true); stopCycle(); }}
          onMouseLeave={() => { setIsPaused(false); }}
        >
          {testimonials.map((t) => {
            const isActive = t.id === activeId;
            return (
              <motion.div
                key={t.id}
                layout
                onClick={() => { setActiveId(t.id); }}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative overflow-hidden cursor-pointer group"
                style={{ borderRadius: '12px', minWidth: 0 }}
              >
                {/* Photo */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
                  style={{
                    filter: isActive ? 'grayscale(0%) brightness(0.75)' : 'grayscale(70%) brightness(0.5)',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  }}
                />

                {/* Gradient overlay — bottom */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                  }}
                />

                {/* Amber top accent line */}
                <motion.div
                  className="absolute top-0 left-0 h-[3px] bg-primary"
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
                />

                {/* Inactive: just show rotated name */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-6 left-0 right-0 flex justify-center"
                    >
                      <span
                        className="text-white/60 text-xs font-mono tracking-[0.2em] uppercase whitespace-nowrap"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          transform: 'rotate(180deg)',
                        }}
                      >
                        {t.name.split(' ')[0]}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active: full testimonial content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.45, delay: 0.25 }}
                      className="absolute bottom-0 left-0 right-0 p-8"
                    >
                      {/* Quote icon */}
                      <LuQuote className="w-7 h-7 text-primary/50 mb-4" />

                      {/* Quote text */}
                      <p className="text-white/90 text-sm md:text-base leading-relaxed italic mb-6 max-w-sm">
                        "{t.content}"
                      </p>

                      {/* Divider */}
                      <div className="w-8 h-[1px] bg-primary mb-4" />

                      {/* Name & role */}
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-wide">
                          {t.name}
                        </h4>
                        <p className="text-primary/70 text-xs font-mono mt-1">
                          {t.role}
                          {t.company ? ` · ${t.company}` : ''}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover glow ring for inactive */}
                {!isActive && (
                  <div className="absolute inset-0 border border-white/0 group-hover:border-primary/20 transition-all duration-300 rounded-xl" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress + dot indicators */}
        <div className="flex flex-col items-center gap-3 mt-8">
          {/* Progress bar for current panel */}
          <div className="w-48 h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0 }}
            />
          </div>

          {/* Dot nav */}
          <div className="flex gap-2">
            {testimonials.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={`transition-all duration-300 rounded-full ${
                  t.id === activeId
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`View ${t.name}'s testimonial`}
              />
            ))}
          </div>

          {/* Pause / Play hint */}
          <p className="text-[10px] font-mono text-white/20 tracking-widest">
            {isPaused ? '⏸ paused — hover to read' : '▶ auto-cycling'}
          </p>
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/delice-keza-b41382333/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 text-sm text-muted-foreground font-mono hover:border-primary/60 hover:text-primary transition-all duration-300 group"
          >
            <LuLinkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
            More recommendations on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
