// Hero.jsx - Hero מקצועי עם תמונת רקע וכפתור עם GIF
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import EshkolButton from './EshkolButton';

const Hero = () => {
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      {/* רקע תמונה של מגדלים עם Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* אוברליי כחול כהה */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/85 z-10" />
        
        {/* תמונת רקע - מגדלים */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="מגדלים"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* תוכן */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* לוגו GIF */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <img 
              src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif"
              alt="אשכול לוגו"
              className="w-20 h-20 object-contain"
            />
          </motion.div>

          {/* כותרת ראשית */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-white font-semibold mb-4"
          >
            יזום ובניה בסטנדרטים גבוהים
          </motion.h2>

          {/* תיאור */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            מתמחים בייזום וביצוע של פרויקטים למגורים תוך שימוש בטכנולוגיה המתקדמת ביותר
          </motion.p>

          {/* כפתורים */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* כפתור צור קשר - ראשי עם GIF */}
            <EshkolButton
              onClick={handleContactClick}
              variant="secondary"
              size="lg"
            >
              צור קשר
            </EshkolButton>

            {/* כפתור הפרויקטים שלנו - משני */}
            <EshkolButton
              onClick={handleProjectsClick}
              variant="white"
              size="lg"
              showGif={false}
            >
              לפרויקטים שלנו
            </EshkolButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
