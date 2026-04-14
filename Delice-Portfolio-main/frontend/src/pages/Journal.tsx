import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";
import BlogSection from "../components/BlogSection";
import { motion } from "framer-motion";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";

const Journal = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            
            <div className="pt-32 pb-10 container mx-auto px-6">
                <Link to="/" className="inline-flex items-center text-primary hover:gap-2 transition-all group mb-8">
                    <LuArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                </Link>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <BlogSection />
                </motion.div>
            </div>

            <FooterSection />
        </main>
    );
};

export default Journal;
