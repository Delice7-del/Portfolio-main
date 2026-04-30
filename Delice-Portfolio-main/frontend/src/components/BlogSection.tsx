import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuCalendar, LuArrowRight, LuBookOpen } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "CamAI: The Future of Intelligent Surveillance",
      excerpt: "CamAI explores how artificial intelligence is redefining modern surveillance systems with real-time insights.",
      content: "CamAI explores how artificial intelligence is redefining modern surveillance systems. The focus is on building intelligent, privacy-aware solutions that deliver real-time insights while maintaining ethical responsibility.\n\nFeatured Topics:\n• AI-driven transformation of traditional surveillance\n• Real-time object detection on edge devices\n• Privacy-first security system design\n• Mobile integration for intelligent monitoring",
      date: "2025-07-15",
      readTime: "5 min read",
      category: "AI & Security",
      tags: ["AI", "Security", "Surveillance"]
    },
    {
      id: 2,
      title: "Food-Share: IoT for a Greener Future",
      excerpt: "Food-Share highlights how IoT technologies can support sustainability and environmental awareness.",
      content: "Food-Share highlights how Internet of Things (IoT) technologies can support sustainability and environmental awareness through accessible, data-driven solutions.\n\nFeatured Topics:\n• Low-cost IoT sensor deployment\n• Real-time environmental data visualization\n• Smart farming and data-driven agriculture\n• Air quality monitoring and public health",
      date: "2025-08-20",
      readTime: "4 min read",
      category: "IoT & Sustainability",
      tags: ["IoT", "Sustainability", "SmartFarming"]
    },
    {
      id: 3,
      title: "HealthConnect: Bridging Patients & Providers",
      excerpt: "HealthConnect allows patients to access healthcare services, book appointments, and receive virtual support seamlessly.",
      content: "HealthConnect is a platform that bridges patients and healthcare providers, allowing users to manage appointments, access health resources, and receive virtual support.\n\nFeatured Topics:\n• Easy appointment booking\n• Access to trusted health resources\n• Virtual consultations and telehealth support\n• Mobile-first design for accessibility",
      date: "2025-09-05",
      readTime: "6 min read",
      category: "HealthTech",
      tags: ["Healthcare", "UI/UX", "MobileApp"]
    },
    {
      id: 4,
      title: "Sponsify: Connecting Street Children with Sponsors",
      excerpt: "Sponsify makes it easy to support education, healthcare, and daily needs for street children through an intuitive platform.",
      content: "Sponsify is a web platform that connects street children with sponsors, helping them access education, healthcare, and essential support.\n\nFeatured Topics:\n• Transparent sponsor-to-child connection\n• Mobile-friendly tracking of donations\n• Interactive UI for easy navigation\n• Promoting social impact through technology",
      date: "2025-09-07",
      readTime: "5 min read",
      category: "Social Impact",
      tags: ["Community", "Education", "SocialTech"]
    },
    {
      id: 5,
      title: "BORA AI: Revolutionizing Recruitment with AI",
      excerpt: "BORA AI explores how artificial intelligence can analyze and rank job applicants to help recruiters make better hiring decisions.",
      content: "BORA AI is a web-based dashboard that uses AI to analyze and rank job applicants from resumes and structured profiles.\n\nFeatured Topics:\n• AI-powered resume parsing and analysis\n• Candidate scoring based on qualifications\n• Transparent explanations for rankings\n• Streamlined recruitment workflow",
      date: "2025-10-12",
      readTime: "6 min read",
      category: "AI/ML",
      tags: ["AI", "Recruitment", "Machine Learning"]
    }
  ];


  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);
    try {
      // Send Notification Email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID  || '',
        import.meta.env.VITE_EMAILJS_SUBSCRIBE_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          subscriber_email: email,
          subject: 'New Newsletter Subscriber!',
          message: `New subscriber: ${email}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      toast({ title: 'Subscribed! 🎉', description: 'You have successfully subscribed to the newsletter.' });
      setEmail('');
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setIsSubscribing(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text">Journal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This blog explores technology, design, and social impact through real-world projects.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={post.id}
                className="floating-card p-8 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <LuCalendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-sm font-mono"
                      >
                        #{tag.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:bg-primary hover:text-primary-foreground group-hover:translate-x-1 transition-all"
                      >
                        Read More
                        <LuArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold">{post.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <LuCalendar className="h-4 w-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        <div className="text-foreground leading-relaxed whitespace-pre-wrap">{post.content}</div>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-sm font-mono"
                            >
                              #{tag.toLowerCase().replace(/\s+/g, '')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="floating-card p-8">
              <div className="mb-6">
                <LuBookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Follow my journey in tech, security, and AI development
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-4 max-w-md mx-auto mb-6">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-background border border-white/10 rounded-none px-4 py-2 focus:border-primary outline-none text-sm"
                  />
                  <Button type="submit" disabled={isSubscribing} className="tech-button rounded-none">
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;