import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import { ArrowLeft, Download, Briefcase, GraduationCap, Code, Languages, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <div className="pt-32 pb-20 container mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-primary hover:gap-2 transition-all group mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
                    <header>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Resume</h1>
                        <p className="text-xl text-muted-foreground">UI/UX & Frontend Engineer - Mobile App Developer</p>
                    </header>
                    <Button className="tech-button h-14 px-8 rounded-none text-lg">
                        <Download className="mr-3 w-5 h-5" /> Download Full CV
                    </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Summary */}
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6 uppercase tracking-widest">
                                <Code className="text-primary w-6 h-6" /> Professional Summary
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Versatile UI/UX & Frontend Engineer with a passion for building reliable, scalable, and user-centered digital systems.
                                I specialize in high-performance frontend development, mobile applications, and responsive design.
                                My approach combines deep technical expertise with a commitment to clean code and architectural longevity.
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-8 uppercase tracking-widest">
                                <Briefcase className="text-primary w-6 h-6" /> Experience
                            </h2>
                            <div className="space-y-10">
                                {[
                                    {
                                        title: "Lead Frontend Developer",
                                        company: "Independent Consultant / Remote",
                                        period: "2023 — Present",
                                        desc: "Reduced latency by 45% for high-traffic enterprise solutions. Architected distributed auth systems handling 50k+ daily active users and implemented CI/CD pipelines reducing deployment time by 90%."
                                    },
                                    {
                                        title: "Software Modernization Lead",
                                        company: "NextGen Solutions",
                                        period: "2021 — 2022",
                                        desc: "Improved system throughput by 70% via architectural refactoring. Migrated legacy monoliths to scalable microservices and built real-time data engines handling 1M+ events/hour."
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
                                <GraduationCap className="text-primary w-6 h-6" /> Education
                            </h2>
                            <div className="p-8 bg-surface-elevated/30 border border-white/5 rounded-none relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <div className="mb-1 flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-foreground">A' Level in Software Development</h3>
                                    <span className="text-primary font-mono text-sm">Graduating 2026</span>
                                </div>
                                <p className="text-muted-foreground font-medium mb-3">Rwanda Coding Academy</p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Focusing on UI/UX Design, Frontend Development, and Mobile Application Development.
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
                                    "React / Next.js", "Node.js / Go", "TypeScript", "PostgreSQL",
                                    "Docker / AWS", "WebSockets / RPC"
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
                                <Languages className="w-5 h-5" /> Languages
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

                        {/* Awards */}
                        <div className="floating-card p-8">
                            <h3 className="text-xl font-bold mb-6 text-foreground uppercase tracking-widest flex items-center gap-2">
                                <Award className="w-5 h-5" /> Recognition
                            </h3>
                            <div className="space-y-4">
                                <div className="text-sm">
                                    <p className="text-foreground font-bold italic">Top 1% Global Engineer</p>
                                    <p className="text-muted-foreground font-mono">Open Source Impact Awards</p>
                                </div>
                                <div className="text-sm">
                                    <p className="text-foreground font-bold italic">Innovation Lead</p>
                                    <p className="text-muted-foreground font-mono">Rwanda Coding Academy</p>
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
