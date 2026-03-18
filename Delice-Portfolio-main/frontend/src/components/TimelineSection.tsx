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
        <section id="experience" className="py-24 bg-background relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="section-heading text-foreground">My Journey</h2>
                    <p className="text-muted-foreground">The path that led me here</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-white/10" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="w-full md:w-5/12">
                                    <div className="floating-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                                        <span className="text-primary font-mono text-sm mb-2 block">{exp.year}</span>
                                        <h3 className="text-xl font-bold text-muted-foreground mb-1">{exp.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-primary text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <exp.icon className="w-5 h-5" />
                                </div>

                                {/* Empty Side for balance */}
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
