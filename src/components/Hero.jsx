// Hero.jsx - Hero עם רקע תמונה של מגדלים (כמו המקור)
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* רקע תמונה של מגדלים */}
      <div className="absolute inset-0 z-0">
        {/* אוברליי כחול כהה */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/85 z-10" />
        
        {/* תמונת רקע - מגדלים */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="מגדלים"
          className="w-full h-full object-cover"
        />
      </div>

      {/* תוכן */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* כותרת ראשית */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              אשכול
            </h1>
            {/* קו זהב מתחת לכותרת */}
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
          </motion.div>

          {/* תת כותרת */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-white font-semibold mb-4"
          >
            יזום ובניה בסטנדרטים גבוהים
          </motion.h2>

          {/* תיאור */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            מתמחים בייזום וביצוע של פרויקטים למגורים תוך שימוש בטכנולוגיה המתקדמת ביותר
          </motion.p>

          {/* כפתורים */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* כפתור הפרויקטים שלנו - זהב */}
            <motion.button
              onClick={handleProjectsClick}
              className="inline-flex items-center justify-center gap-2 bg-accent-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-gold/90 transition-colors shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>הפרויקטים שלנו</span>
            </motion.button>

            {/* כפתור צור קשר - שקוף עם מסגרת */}
            <motion.button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>צור קשר</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* חץ גלילה */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* אפקט חלקיקים עדין */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;