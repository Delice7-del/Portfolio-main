import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import { LuArrowLeft, LuDownload, LuBriefcase, LuGraduationCap, LuCode, LuLanguages, LuAward } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <div className="pt-32 pb-20 container mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-primary hover:gap-2 transition-all group mb-8">
                    <LuArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                    <header>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Resume</h1>
                        <p className="text-xl text-muted-foreground">UI/UX Designer | Frontend & Mobile Developer</p>
                    </header>
                    <a href="http://localhost:5000/api/download-cv" download>
                        <Button className="tech-button h-14 px-8 rounded-none text-lg">
                            <LuDownload className="mr-3 w-5 h-5" /> Download Full CV
                        </Button>
                    </a>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Summary */}
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6 uppercase tracking-widest">
                                <LuCode className="text-primary w-6 h-6" /> Professional Summary
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Creative UI/UX Designer and versatile Frontend & Mobile Developer with a passion for building intuitive, responsive, and visually appealing digital experiences. 
                                Experienced in creating user-centered designs, high-performance web applications, and cross-platform mobile apps. 
                                Skilled at translating design concepts into interactive interfaces while maintaining clean and scalable code.
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-8 uppercase tracking-widest">
                                <LuBriefcase className="text-primary w-6 h-6" /> Experience
                            </h2>
                            <div className="space-y-10">
                                {[
                                    {
                                        title: "Frontend & Mobile Developer",
                                        company: "Independent Projects / Freelance",
                                        period: "2023 — Present",
                                        desc: "Developed responsive websites and mobile applications for clients using React, Next.js, and Flutter. Implemented UI/UX best practices, optimized app performance, and ensured cross-platform compatibility."
                                    },
                                    {
                                        title: "UI/UX Designer & Frontend Intern",
                                        company: "NextGen Solutions",
                                        period: "2021 — 2022",
                                        desc: "Created interactive prototypes and user flows for web and mobile apps. Collaborated with developers to integrate designs into React applications and improved user engagement by 40% through UI enhancements."
                                    }
                                ].map((exp, i) => (
                                    <div key={i} className="relative pl-8 border-l border-white/10 group">
                                        <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                                        <div className="mb-1 flex justify-between items-start flex-wrap gap-2">
                                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                            <span className="text-primary font-mono text-sm">{exp.period}</span>
                                        </div>
                                        <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                                        <p className="text-muted-foreground leading-relaxed">{exp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-8 uppercase tracking-widest">
                                <LuGraduationCap className="text-primary w-6 h-6" /> Education
                            </h2>
                            <div className="p-8 bg-surface-elevated/30 border border-white/5 rounded-none relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <div className="mb-1 flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-foreground">A' Level in Software Development</h3>
                                    <span className="text-primary font-mono text-sm">Graduating 2026</span>
                                </div>
                                <p className="text-muted-foreground font-medium mb-3">Rwanda Coding Academy</p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Focused on UI/UX Design, Frontend Development with React/Next.js, and Mobile Application Development with Flutter.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-12">
                        {/* Core Stack */}
                        <div className="floating-card p-8">
                            <h3 className="text-xl font-bold mb-6 text-foreground uppercase tracking-widest">Core Technical Stack</h3>
                            <div className="space-y-4">
                                {[
                                    "React / Next.js", 
                                    "Flutter / React Native", 
                                    "TypeScript / JavaScript", 
                                    "HTML / CSS / Tailwind", 
                                    "Figma / Adobe XD", 
                                    "Git / GitHub"
                                ].map((tech, i) => (
                                    <div key={i} className="flex items-center justify-between group">
                                        <span className="text-muted-foreground group-hover:text-primary transition-colors">{tech}</span>
                                        <div className="w-12 h-[1px] bg-white/10 group-hover:bg-primary transition-all"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Language Proficiency */}
                        <div className="floating-card p-8">
                            <h3 className="text-xl font-bold mb-6 text-foreground uppercase tracking-widest flex items-center gap-2">
                                <LuLanguages className="w-5 h-5" /> Languages
                            </h3>
                            <div className="space-y-6">
                                {["English (Fluent)", "Kinyarwanda (Native)", "French (Intermediate)"].map((lang, i) => (
                                    <div key={i} className="text-muted-foreground flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        {lang}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Awards / Recognition */}
                        <div className="floating-card p-8">
                            <h3 className="text-xl font-bold mb-6 text-foreground uppercase tracking-widest flex items-center gap-2">
                                <LuAward className="w-5 h-5" /> Recognition
                            </h3>
                            <div className="space-y-4">
                                <div className="text-sm">
                                    <p className="text-foreground font-bold italic">Top UI/UX Portfolio</p>
                                    <p className="text-muted-foreground font-mono">Rwanda Coding Academy Showcase</p>
                                </div>
                                <div className="text-sm">
                                    <p className="text-foreground font-bold italic">Best Mobile App Design</p>
                                    <p className="text-muted-foreground font-mono">Hackathon 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
};


export default Resume;
