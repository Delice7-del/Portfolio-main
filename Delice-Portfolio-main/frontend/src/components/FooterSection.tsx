import { LuArrowUp, LuGithub, LuLinkedin, LuTwitter, LuMail, LuExternalLink, LuHeart } from 'react-icons/lu';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* BORA Background Pattern - Applied Inline for visibility guarantee */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(186, 126, 27, 0.3) 0, rgba(186, 126, 27, 0.3) 1.5px, transparent 0, transparent 60px),
            repeating-linear-gradient(-45deg, rgba(186, 126, 27, 0.3) 0, rgba(186, 126, 27, 0.3) 1.5px, transparent 0, transparent 60px)
          `
        }} 
      />

      {/* Footer Top */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">

        {/* Brand Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center space-x-2 text-2xl font-bold text-foreground tracking-tighter">
            <span>KEZA</span>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Building digital solutions that scale and solve real-world problems.
            Focused on scalability, performance, and user-centered design.
          </p>
          <div className="flex space-x-4 pt-4">
            {[
              { icon: LuGithub, href: "https://github.com/Delice7-del" },
              { icon: LuLinkedin, href: "https://www.linkedin.com/in/delice-keza-b41382333/" },
              { icon: LuMail, href: "mailto:delicekeza0@gmail.com" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-none bg-background border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-foreground mb-6 font-mono">/EXPLORE</h4>
          <ul className="space-y-4 text-muted-foreground">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Expertise & Focus */}
        <div>
          <h4 className="text-lg font-bold text-foreground mb-6 font-mono">/EXPERTISE</h4>
          <div className="space-y-4">
            {[
              { label: "Strategic UI/UX", desc: "User-centered products" },
              { label: "Cross-Platform", desc: "Native performance" },
              { label: "Robust Security", desc: "Enterprise standards" }
            ].map((skill, idx) => (
              <div key={idx} className="p-3 bg-secondary/5 border border-white/5 hover:border-primary/20 transition-colors">
                <div className="text-white text-sm font-bold mb-1">{skill.label}</div>
                <div className="text-muted-foreground text-xs">{skill.desc}</div>
              </div>
            ))}
            <Button className="w-full tech-button rounded-none h-12 text-sm mt-4" onClick={scrollToTop}>
              <LuArrowUp className="w-4 h-4 mr-2" />
              BACK TO TOP
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
        <div>
          &copy; {currentYear} Keza Delice. Handcrafted with Accuracy and precision.
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;