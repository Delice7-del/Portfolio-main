import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import { ArrowLeft, BookOpen, Shield, Zap, TrendingUp, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
    const cases = [
    {
        title: "HealthConnect",
        subtitle: "Revolutionizing Healthcare Data Management",
        category: "Full-Stack Development",
        description: "A modular healthcare system designed to manage patients, professionals, and medical records with advanced security.",
        sections: [
            {
                title: "Architecture",
                content: "Built with a micro-modular architecture using React and Node.js. Implemented RBAC (Role-Based Access Control) to ensure data privacy and compliance with healthcare standards.",
                icon: Shield
            },
            {
                title: "The Challenge",
                content: "Legacy systems were fragmented and insecure. We needed a unified platform that could handle high-concurrency while maintaining zero-trust security principles.",
                icon: Zap
            },
            {
                title: "Impact",
                content: "Reduced data retrieval time by 40% and improved professional coordination efficiency by 30%. Successfully handled 10k+ patient records in initial pilot.",
                icon: TrendingUp
            }
        ]
    },

    {
        title: "CamAI",
        subtitle: "Smart Surveillance on the Edge",
        category: "AI & Mobile",
        description: "Real-time surveillance system that uses computer vision to detect and alert users about critical events.",
        sections: [
            {
                title: "Engineering",
                content: "Integrated TensorFlow Lite for on-device inference, reducing latency and bandwidth usage. Used FastAPI for high-performance background processing.",
                icon: Cpu
            },
            {
                title: "Approach",
                content: "Focused on an 'Offline-First' AI model to ensure reliability in areas with poor connectivity. Implemented intelligent frame sampling to optimize battery life.",
                icon: Zap
            },
            {
                title: "Impact",
                content: "98% accuracy in motion and object detection. Enabled 24/7 monitoring with minimal server costs due to edge-based processing.",
                icon: TrendingUp
            }
        ]
    },

    {
        title: "Food-Share",
        subtitle: "Reducing Food Waste Through Community Sharing",
        category: "Social Impact Platform",
        description: "A community-driven platform that connects people with surplus food to those in need, minimizing waste and improving food accessibility.",
        sections: [
            {
                title: "System Design",
                content: "Built with React and Node.js, featuring real-time listings and location-based matching to connect donors with nearby recipients efficiently.",
                icon: Shield
            },
            {
                title: "The Challenge",
                content: "Ensuring trust and safety while enabling fast food sharing. The platform needed moderation tools and expiry tracking for shared items.",
                icon: Zap
            },
            {
                title: "Impact",
                content: "Helped redistribute hundreds of meals during testing phases and increased community participation in food-sharing initiatives.",
                icon: TrendingUp
            }
        ]
    },

    {
        title: "EcoTrack",
        subtitle: "Real-Time Environmental Monitoring",
        category: "IoT & Data Visualization",
        description: "A smart environmental monitoring system displaying real-time sensor data such as temperature, humidity, air quality, and soil moisture.",
        sections: [
            {
                title: "Technology Stack",
                content: "Integrated IoT sensors with a web dashboard built in React, providing real-time charts, alerts, and historical analytics.",
                icon: Cpu
            },
            {
                title: "The Challenge",
                content: "Handling continuous sensor data streams while maintaining accuracy and low latency in resource-constrained environments.",
                icon: Zap
            },
            {
                title: "Impact",
                content: "Enabled early environmental warnings and improved data-driven decision-making for agriculture and sustainability projects.",
                icon: TrendingUp
            }
        ]
    },

    {
        title: "Sponsify",
        subtitle: "Connecting Street Children with Sponsors",
        category: "Social Welfare Platform",
        description: "A web platform designed to link vulnerable children with sponsors, supporting education, healthcare, and daily needs transparently.",
        sections: [
            {
                title: "Platform Architecture",
                content: "Developed a secure full-stack system with user authentication, sponsorship tracking, and transparent reporting features.",
                icon: Shield
            },
            {
                title: "The Challenge",
                content: "Building trust between sponsors and beneficiaries while ensuring data privacy and accountability.",
                icon: Zap
            },
            {
                title: "Impact",
                content: "Improved sponsor engagement and provided a transparent way to support children’s long-term development.",
                icon: TrendingUp
            }
        ]
    },

    {
        title: "EduHub",
        subtitle: "Simplifying Online Learning Access",
        category: "EdTech Platform",
        description: "An online learning platform that allows users to explore courses, learn from instructors, and read testimonials in one place.",
        sections: [
            {
                title: "User Experience",
                content: "Designed a clean and intuitive UI focused on course discovery, accessibility, and learner engagement.",
                icon: Shield
            },
            {
                title: "The Challenge",
                content: "Creating a scalable platform that remains simple for learners while supporting diverse educational content.",
                icon: Zap
            },
            {
                title: "Impact",
                content: "Made course discovery easier and increased learner enrollment during early adoption phases.",
                icon: TrendingUp
            }
        ]
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
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Case Studies</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        A deep dive into the engineering challenges and strategic solutions behind my most impactful projects.
                    </p>
                </header>

                <div className="space-y-32">
                    {cases.map((cs, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="border-b border-white/5 pb-20 last:border-0"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div>
                                    <div className="text-primary font-mono text-sm uppercase tracking-widest mb-4">
                                        {cs.category}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{cs.title}</h2>
                                    <h3 className="text-2xl text-muted-foreground mb-8 italic">{cs.subtitle}</h3>
                                    <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                                        {cs.description}
                                    </p>
                                    <Button className="tech-button h-14 px-8 rounded-none">
                                        View Project Details
                                    </Button>
                                </div>

                                <div className="grid gap-6">
                                    {cs.sections.map((section, sIdx) => (
                                        <div key={sIdx} className="floating-card p-6 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                    <section.icon className="w-5 h-5" />
                                                </div>
                                                <h4 className="font-bold text-xl">{section.title}</h4>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>

            <FooterSection />
        </main>
    );
};

export default CaseStudies;
