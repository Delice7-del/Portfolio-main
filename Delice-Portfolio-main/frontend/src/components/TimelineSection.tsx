import { motion } from 'framer-motion';
import { LuBriefcase, LuGraduationCap, LuAward } from 'react-icons/lu';

const TimelineSection = () => {
    const experiences = [
        {
            year: "2023 — Present",
            title: "Lead Frontend & Mobile Developer",
            company: "Independent Consultant",
            description: "Designed and developed responsive web and mobile apps with React, React Native, and Flutter. Created reusable UI component libraries and optimized app performance, reducing load times by 40%. Implemented interactive UI/UX designs improving user engagement and retention across 10+ projects.",
            icon: LuBriefcase
        },
        {
            year: "2022 — 2023",
            title: "Open Source Contributor",
            company: "Tech Ecosystem",
            description: "Built high-performance frontend libraries and mobile utilities adopted by 10k+ developers. Contributed UI/UX enhancements to multiple open-source projects, including custom React components and mobile UI templates. Mentored junior developers on best practices for responsive design and mobile-first development.",
            icon: LuAward
        },
        {
            year: "2021 — 2022",
            title: "UI/UX & Frontend Designer",
            company: "NextGen Solutions",
            description: "Redesigned web and mobile interfaces improving Core Web Vitals and accessibility scores. Developed interactive prototypes and animations using Figma, Adobe XD, and Framer Motion. Collaborated with developers to implement pixel-perfect UIs, reducing user-reported issues by 35%.",
            icon: LuBriefcase
        }
    ];



    return (
        <section id="experience" className="py-32 bg-background relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-[20%] left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[60px] -z-10" />
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Experience</span>
                    <h2 className="section-heading text-foreground mb-4">My Journey</h2>
                    <p className="text-muted-foreground text-lg">The professional path that led me here</p>
                </div>

                <div className="relative">
                    {/* Glowing Vertical Line */}
                    <div className="absolute left-[24px] md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="w-full pl-16 md:pl-0 md:w-[45%]">
                                    <div className="floating-card p-8 rounded-2xl border border-white/5 bg-surface-elevated/50 backdrop-blur-sm hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(var(--primary),0.3)] transition-all duration-300 group">
                                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
                                            <span className="text-primary font-mono text-sm font-semibold">{exp.year}</span>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                                        <p className="text-md font-medium text-muted-foreground mb-4 pb-4 border-b border-white/5">{exp.company}</p>
                                        
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-[2px] border-primary text-primary shadow-[0_0_25px_rgba(var(--primary),0.4)] z-10 transition-transform duration-300 hover:scale-110">
                                    <exp.icon className="w-5 h-5" />
                                </div>

                                {/* Empty Side for balance */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
