import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LuMail, LuMapPin, LuSend, LuGithub, LuLinkedin,
  LuArrowUpRight, LuLoader, LuClock
} from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const MAX_MESSAGE = 500;

interface FieldProps {
  id: string;
  label: string;
  chars?: { current: number; max: number };
  children: React.ReactNode;
}

const Field = ({ id, label, chars, children }: FieldProps) => (
  <div className="relative group/field">
    <label
      htmlFor={id}
      className="block text-xs font-mono uppercase tracking-widest mb-2 text-muted-foreground
                 group-focus-within/field:text-primary transition-colors duration-200"
    >
      {label}
    </label>
    {children}
    {chars !== undefined && (
      <span className="absolute bottom-3 right-3 text-[10px] font-mono text-muted-foreground/40 pointer-events-none">
        {chars.current}/{chars.max}
      </span>
    )}
    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-white/8" />
    <div
      className="absolute bottom-0 left-0 h-[1px] bg-primary w-0
                 group-focus-within/field:w-full transition-all duration-300 ease-out"
    />
  </div>
);

const inputCls =
  'bg-transparent border-0 border-b border-white/8 rounded-none px-0 ' +
  'focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground ' +
  'placeholder:text-muted-foreground/40 w-full outline-none';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // 1. Save to Database
      console.log('Attempting to save to DB at:', `${import.meta.env.VITE_API_URL}/api/contact`);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save message to database');
      }

      // 2. Send Email via EmailJS
      console.log('Sending EmailJS with:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? 'Set ✅' : 'MISSING ❌',
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? 'Set ✅' : 'MISSING ❌',
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Set ✅' : 'MISSING ❌',
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          from_name:    formData.name,
          from_email:   formData.email,
          subject:      formData.subject,
          message:      formData.message,
          reply_to:     formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      toast({
        title: 'Message sent! ✅',
        description: "Your message has been saved and I will get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      toast({
        title: 'Failed to send',
        description: error.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: LuMail,
      label: 'Email',
      value: 'delicekeza0@gmail.com',
      href: 'mailto:delicekeza0@gmail.com',
    },
    {
      icon: LuMapPin,
      label: 'Location',
      value: 'Kigali, Rwanda',
      href: 'https://maps.google.com/?q=Kigali,Rwanda',
    },
  ];

  const socialLinks = [
    { icon: LuGithub,   label: 'GitHub',   href: 'https://github.com/Delice7-del' },
    { icon: LuLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/delice-keza-b41382333/' },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-surface border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4 text-primary font-mono tracking-widest text-sm uppercase">
            <span>// Contact</span>
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <h2 className="section-heading mb-0">Let's Collaborate</h2>
            <p className="text-sm text-muted-foreground font-mono">
              Open to projects · freelance · full-time
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-white/8 p-8 relative"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 pointer-events-none" />

            <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <Field id="name" label="Full Name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={inputCls + ' py-2'}
                  />
                </Field>

                <Field id="email" label="Email Address">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className={inputCls + ' py-2'}
                  />
                </Field>
              </div>

              <Field id="subject" label="Subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project discussion, collaboration..."
                  className={inputCls + ' py-2'}
                />
              </Field>

              <Field
                id="message"
                label="Message"
                chars={{ current: formData.message.length, max: MAX_MESSAGE }}
              >
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className={inputCls + ' resize-none py-2 pb-6'}
                />
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full tech-button rounded-none h-12 font-mono tracking-widest text-sm"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <LuLoader className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LuSend className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-background border border-white/8 p-8">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
                Reach Me Directly
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <info.icon className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium text-sm mt-0.5 group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <LuArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-background border border-white/8 p-8">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
                Find Me Online
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-white/10 text-sm text-muted-foreground font-mono hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-background border border-white/8 p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(186,126,27,1) 1px, transparent 1px), linear-gradient(90deg, rgba(186,126,27,1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-foreground">
                    Available for Work
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Currently open to new projects, freelance contracts, and full-time roles.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60">
                  <LuClock className="h-3 w-3" />
                  <span>Typical response time · 24 hrs</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;