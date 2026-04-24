import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 1000);
          }, 500);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo/Name Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-[0.3em] text-foreground uppercase">
                KEZA<span className="text-primary">.</span>
              </h1>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.div 
              className="mt-4 font-mono text-[10px] tracking-widest text-muted-foreground/60"
            >
              LOADING {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Background Accents */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
