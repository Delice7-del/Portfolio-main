import { motion } from "framer-motion";
import { LuAward, LuExternalLink, LuShieldCheck, LuCircleCheck, LuCalendar, LuHash } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
    const certifications = [
        {
            id: 1,
            title: "Advanced Frontend Architecture",
            issuer: "Global Tech Learning",
            date: "Dec 2024",
            index: "01",
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
            index: "02",
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
            index: "03",
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
        <section id="certifications" className="py-24 bg-surface border-t border-white/5 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[140px] pointer-events-none translate-x-1/3 translate-y-1/3" />

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
                        <span>// Credentials</span>
                        <div className="h-[1px] w-12 bg-primary" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                        <h2 className="section-heading mb-0">Professional Certifications</h2>
                        <p className="text-sm text-muted-foreground font-mono">
                            {certifications.length} credentials · globally validated
                        </p>
                    </div>
                </motion.div>

                {/* ── Cert Cards ── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12, duration: 0.5 }}
                            className="bg-background border border-white/8 flex flex-col group relative overflow-hidden"
                        >
                            {/* Animated top amber line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            {/* Subtle grid pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(186,126,27,1) 1px, transparent 1px), linear-gradient(90deg, rgba(186,126,27,1) 1px, transparent 1px)',
                                    backgroundSize: '24px 24px',
                                }}
                            />

                            {/* Card top: index number + icon */}
                            <div className="flex items-start justify-between p-7 pb-4 relative z-10">
                                <span className="font-mono text-3xl font-bold text-primary/10 leading-none select-none">
                                    {cert.index}
                                </span>
                                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                                    <cert.icon className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Card body */}
                            <div className="px-7 pb-7 flex flex-col flex-1 relative z-10">
                                <h3 className="text-lg font-bold text-foreground leading-tight mb-1 tracking-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-primary font-mono text-[10px] uppercase tracking-widest mb-5">
                                    {cert.issuer}
                                </p>

                                {/* Skill tags */}
                                <div className="flex flex-wrap gap-1.5 mb-auto">
                                    {cert.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-2 py-1 bg-surface-elevated text-[9px] text-muted-foreground uppercase tracking-widest border border-white/5 font-mono"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {/* Date */}
                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                            <LuCalendar className="w-3 h-3 text-primary/50" />
                                            <span className="text-xs font-mono">{cert.date}</span>
                                        </div>
                                        {/* ID */}
                                        <div className="flex items-center gap-1 text-muted-foreground/50">
                                            <LuHash className="w-3 h-3" />
                                            <span className="text-[9px] font-mono">{cert.credentialId}</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-primary h-8 px-3 hover:bg-primary hover:text-white rounded-none text-xs font-mono group/btn"
                                    >
                                        Verify
                                        <LuExternalLink className="ml-1.5 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CertificationsSection;
