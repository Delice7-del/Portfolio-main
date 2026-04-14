import { useState, useEffect } from 'react';
import { LuMenu, LuX, LuDownload } from 'react-icons/lu';
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

  const navLinks = [
    { href: '#home', label: 'Home', isHash: true },
    { href: '#about', label: 'About', isHash: true },
    { href: '#projects', label: 'Projects', isHash: true },
    { href: '#testimonials', label: 'Testimonials', isHash: true },
    { href: '#certifications', label: 'Certifications', isHash: true },
    { href: '#contact', label: 'Contact', isHash: true }
  ];

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

  // Effect to handle scrolling when navigating back to home from another page
  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const target = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear state to prevent scrolling again on refresh
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'glass-effect backdrop-blur-lg shadow-lg bg-background/80'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
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
            className="flex items-center space-x-2 group"
          >
            <div className="flex items-center space-x-2">
            </div>
            <span className="font-bold text-foreground group-hover:text-primary transition-colors tracking-tighter text-xl">
              KEZA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.isHash ? '/' : link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                className={`text-muted-foreground hover:text-primary transition-colors cursor-pointer relative group text-xs font-mono uppercase tracking-widest ${(activeHash === link.href || (location.pathname === link.href && !link.isHash)) ? 'text-primary' : ''
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${(activeHash === link.href || (location.pathname === link.href && !link.isHash)) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop CTA */}
            <Button size="sm" className="tech-button rounded-none" asChild>
              <Link to="/resume">
                <LuDownload className="mr-2 h-4 w-4" />
                RESUME
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-6 space-y-1 bg-background/95 backdrop-blur-md px-4 border-t border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.isHash ? '/' : link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                className="block py-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer border-b border-white/5 last:border-0 font-mono text-sm uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Button size="sm" className="w-full tech-button rounded-none h-14" asChild>
                <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)}>
                  <LuDownload className="mr-2 h-4 w-4" />
                  RESUME / CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;