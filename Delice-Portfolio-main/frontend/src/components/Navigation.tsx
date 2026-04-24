import { useState, useEffect } from 'react';
import { LuMenu, LuX, LuDownload, LuBot } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [activeHash, setActiveHash] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', isHash: true },
    { href: '#about', label: 'About', isHash: true },
    { href: '#projects', label: 'Projects', isHash: true },
    { href: '#testimonials', label: 'Testimonials', isHash: true },
    { href: '#certifications', label: 'Certifications', isHash: true },
    { href: '#contact', label: 'Contact', isHash: true }
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const sections = navLinks
      .filter(link => link.isHash)
      .map(link => link.href.replace('#', ''));

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault();
      setActiveHash(href);
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href } });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const target = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 pointer-events-none">
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-500 pointer-events-auto border border-white/10 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-2xl py-3 px-8 translate-y-[-10px]' 
          : 'bg-background/40 backdrop-blur-md py-4 px-10'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
              <LuBot className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-foreground transition-colors tracking-tight text-xl uppercase">
              KEZA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1 mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.isHash ? '/' : link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeHash === link.href || (location.pathname === link.href && !link.isHash)
                    ? 'bg-white/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop CTA */}
            <Button className="hidden lg:flex rounded-full px-6 bg-primary hover:opacity-90 text-white font-semibold transition-all shadow-lg shadow-primary/20" asChild>
              <Link to="/resume">
                <LuDownload className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-2 bg-background/60 backdrop-blur-xl rounded-3xl px-6 border border-white/10 mb-4 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.isHash ? '/' : link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                className={`block py-3 px-4 rounded-xl transition-all ${
                  activeHash === link.href || (location.pathname === link.href && !link.isHash)
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a href="http://localhost:5000/api/download-cv" download className="w-full">
                <Button className="w-full rounded-2xl h-14 bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20">
                  <LuDownload className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;