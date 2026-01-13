import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import { ArrowLeft, Github, Star, GitBranch, Code2, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OpenSource = () => {
   const contributions = [
    {
        name: "Food Share",
        repo: "Food-Share",
        stars: "—",
        forks: "—",
        description:
            "A platform that connects people with extra food to those in need, reducing food waste and making free or shared meals easily accessible.",
        tech: ["React", "Node.js", "MongoDB"],
        role: "Creator"
    },
    {
        name: "HealthConnect",
        repo: "HealthConnect",
        stars: "—",
        forks: "—",
        description:
            "A healthcare platform that bridges patients and providers, enabling appointment booking, access to health resources, and virtual support for better healthcare management.",
        tech: ["TypeScript", "React", "Node.js"],
        role: "Creator"
    },
    {
        name: "CamAI",
        repo: "CamAI",
        stars: "—",
        forks: "—",
        description:
            "An AI-powered intelligent surveillance system that analyzes security camera footage and provides instant event summaries through an interactive interface.",
        tech: ["Python", "AI", "Computer Vision"],
        role: "Creator"
    },
    {
        name: "EcoTrack",
        repo: "EcoTrack",
        stars: "—",
        forks: "—",
        description:
            "A smart environmental monitoring app displaying real-time sensor data such as temperature, humidity, air quality, and soil moisture with alerts and dashboards.",
        tech: ["IoT", "JavaScript", "Dashboard"],
        role: "Creator"
    },
    {
        name: "Sponsify",
        repo: "Sponsify",
        stars: "—",
        forks: "—",
        description:
            "A web platform that connects street children with sponsors, helping support education, healthcare, and daily living needs.",
        tech: ["JavaScript", "React", "Node.js"],
        role: "Founder"
    },
    {
        name: "MindSpace",
        repo: "MindSpace",
        stars: "—",
        forks: "—",
        description:
            "A mental health support platform enabling daily check-ins, therapist connections, 24/7 live support, and access to mental health resources.",
        tech: ["HTML", "CSS", "JavaScript"],
        role: "Creator"
    },
    {
        name: "EduHub",
        repo: "EduHub",
        stars: "—",
        forks: "—",
        description:
            "An online learning platform where users explore featured courses, learn from instructors, and read testimonials to easily enroll in quality education.",
        tech: ["HTML", "CSS", "JavaScript"],
        role: "Creator"
    }
];


    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <div className="pt-32 pb-20 container mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-primary hover:gap-2 transition-all group mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold gradient-text">Open Source</h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Building in public and giving back to the ecosystem. Here's a record of my public contributions and maintained repositories.
                    </p>
                </header>

                <div className="grid lg:grid-cols-1 gap-8">
                    {contributions.map((repo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="floating-card p-8 border border-white/5 group hover:border-primary/20 transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-mono rounded uppercase">
                                            {repo.role}
                                        </span>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {repo.name}
                                        </h3>
                                    </div>
                                    <code className="text-sm text-muted-foreground block mb-4">github.com/Delice7-del/{repo.repo}</code>
                                    <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
                                        {repo.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {repo.tech.map((t, tIdx) => (
                                            <span key={tIdx} className="text-xs font-mono text-white/40">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex md:flex-col gap-6 items-center md:items-end">
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <div className="flex items-center gap-1 text-primary mb-1">
                                                <Star className="w-4 h-4" />
                                                <span className="font-bold">{repo.stars}</span>
                                            </div>
                                            <p className="text-[10px] uppercase text-muted-foreground tracking-widest">Stars</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                                <GitBranch className="w-4 h-4" />
                                                <span className="font-bold">{repo.forks}</span>
                                            </div>
                                            <p className="text-[10px] uppercase text-muted-foreground tracking-widest">Forks</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="rounded-none border-white/10 hover:border-primary group" asChild>
                                        <a href={`https://github.com/Delice7-del/${repo.repo}`} target="_blank" rel="noopener noreferrer">
                                            View Repo <Github className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Global Impact Grid */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    {[
                        { label: "Total Contributions", value: "250+", icon: GitBranch },
                        { label: "Community Support", value: "10k+", icon: Users },
                        { label: "Code Quality", value: "A+", icon: ShieldCheck }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-8 bg-surface-elevated/50 border border-white/5">
                            <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 opacity-50" />
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterSection />
        </main>
    );
};

export default OpenSource;
