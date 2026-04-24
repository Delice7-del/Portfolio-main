import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuGithub, LuExternalLink, LuCpu, LuShield, LuZap, LuLoader } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import FooterSection from '../components/FooterSection';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  images: string[];
  challenges: string;
  solutions: string;
  githubUrl: string;
  liveUrl: string;
  impact: string;
}

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        const found = data.find((p: Project) => p.id === id);
        setProject(found || null);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LuLoader className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Project not found</h2>
        <Link to="/case-studies">
          <Button variant="outline">Back to Case Studies</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <Link to="/case-studies" className="inline-flex items-center text-primary hover:gap-2 transition-all group mb-8">
          <LuArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-16">
            <div className="text-primary font-mono text-sm uppercase tracking-widest mb-4">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.subtitle}
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <LuZap className="text-primary" />
                  The Challenge
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.challenges}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <LuCpu className="text-primary" />
                  Our Solution
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.solutions}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <LuShield className="text-primary" />
                  Impact & Results
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.impact}
                </p>
              </section>
            </div>

            <div className="space-y-8">
              <div className="floating-card p-8 border border-white/8">
                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {project.liveUrl !== '#' && (
                  <Button className="tech-button w-full h-12 rounded-none" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <LuExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="w-full h-12 rounded-none border-white/10 hover:border-primary/50" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <LuGithub className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Placeholder for images/screenshots */}
          <section className="mt-20">
             <h2 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest font-mono text-muted-foreground/50">
               Project Visualization
             </h2>
             <div className="grid md:grid-cols-2 gap-8">
               {project.images.map((img, i) => (
                 <div key={i} className="aspect-video bg-surface-elevated border border-white/5 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-muted-foreground/30 font-mono text-xs uppercase tracking-widest">
                      {project.title} Screenshot {i+1}
                    </span>
                 </div>
               ))}
             </div>
          </section>
        </motion.div>
      </div>

      <FooterSection />
    </main>
  );
};

export default CaseStudyDetail;
