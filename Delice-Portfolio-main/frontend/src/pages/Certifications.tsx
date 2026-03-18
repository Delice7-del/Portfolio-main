import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import { LuArrowLeft, LuAward, LuExternalLink, LuShieldCheck, LuCircleCheck } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: "Advanced Frontend Architecture",
            issuer: "Global Tech Learning",
            date: "Dec 2024",
            skills: [
                "React Architecture",
                "State Management",
                "Performance Optimization",
                "Scalable Frontend Design"
            ],
            credentialId: "GTL-FE-9823",
            icon: LuShieldCheck
        },
        {
            id: 2,
            title: "Mobile Development Professional",
            issuer: "Engineering Institute",
            date: "Aug 2024",
            skills: [
                "React Native",
                "Android & iOS Development",
                "API Integration",
                "App Deployment"
            ],
            credentialId: "ENG-MOB-4421",
            icon: LuAward
        },
        {
            id: 3,
            title: "UI/UX Design Specialist",
            issuer: "Creative Design Academy",
            date: "Jan 2025",
            skills: [
                "User Research",
                "Wireframing & Prototyping",
                "Figma",
                "Usability Testing"
            ],
            credentialId: "CDA-UX-1102",
            icon: LuCircleCheck
        }
    ];


    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <div className="pt-32 pb-20 container mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-primary hover:gap-2 transition-all group mb-8">
                    <LuArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <header className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Certifications</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Validated credentials and professional recognitions from globally recognized institutions.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="floating-card p-8 border border-white/5 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <cert.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                                <p className="text-primary font-mono text-sm mb-4">{cert.issuer}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cert.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="px-2 py-1 bg-surface-elevated text-[10px] text-muted-foreground uppercase tracking-widest border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Issue Date</p>
                                    <p className="text-sm font-bold">{cert.date}</p>
                                </div>
                                <Button variant="ghost" size="sm" className="text-primary h-10 hover:bg-primary/10 group">
                                    Verify <LuExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <FooterSection />
        </main>
    );
};

export default Certifications;
