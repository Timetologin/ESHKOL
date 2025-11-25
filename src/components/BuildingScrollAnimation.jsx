import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award } from 'lucide-react';

const BuildingScrollUltraRealistic = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange(v => setProgress(Math.round(v * 100)));
    return unsubscribe;
  }, [smoothProgress]);

  // Building phases with REAL images from Eshkol projects
  const buildingPhases = [
    {
      progress: 0,
      title: 'תכנון ויזמות',
      subtitle: 'מתחילים עם חזון אדריכלי',
      image: 'https://www.targel.org.il/wp-content/uploads/2025/06/Depositphotos_503355502_S.jpg',
      overlay: 0.7
    },
    {
      progress: 20,
      title: 'חפירה ויסודות',
      subtitle: 'הכנת הקרקע ויציקת היסודות',
      image: 'https://livnot.co.il/wp-content/uploads/2024/05/%D7%99%D7%A1%D7%95%D7%93-%D7%A2%D7%95%D7%91%D7%A8-%D7%A9%D7%9C%D7%90-%D7%99%D7%A2%D7%91%D7%95%D7%A8-%D7%9E%D7%A2%D7%9C%D7%99%D7%9B%D7%9D02.png',
      overlay: 0.6
    },
    {
      progress: 40,
      title: 'שלד הבניין',
      subtitle: 'עמודים וקומות בביצוע',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
      overlay: 0.5
    },
    {
      progress: 60,
      title: 'גמר חוץ וחזיתות',
      subtitle: 'בנייה מתקדמת של הקומות',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2131',
      overlay: 0.4
    },
    {
      progress: 80,
      title: 'גימורים ופנים',
      subtitle: 'השלמת הפרטים והעיצוב',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      overlay: 0.3
    },
    {
      progress: 100,
      title: 'מסירה ללקוחות',
      subtitle: 'פרויקט מושלם - בונים באהבה',
      image: 'https://images2.madlan.co.il/t:nonce:v=2;convert:type=webp/developers/zimbuilding/%D7%9C%D7%95%D7%92%D7%95%20%D7%90%D7%A9%D7%9B%D7%95%D7%9C-6552f5a4-6811-4a2e-8406-74c8ed7f0bee.jpg',
      overlay: 0.2
    }
  ];

  // Find current phase
  const currentPhase = buildingPhases.reduce((acc, phase) => 
    progress >= phase.progress ? phase : acc
  , buildingPhases[0]);

  // Next phase for transition
  const currentPhaseIndex = buildingPhases.indexOf(currentPhase);
  const nextPhase = buildingPhases[Math.min(currentPhaseIndex + 1, buildingPhases.length - 1)];

  // Calculate transition between phases
  const phaseTransition = useTransform(
    smoothProgress,
    [currentPhase.progress / 100, nextPhase.progress / 100],
    [0, 1]
  );

  // 3D perspective effect
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [5, 0, -5]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-2, 0, 2]);

  // Stats animation
  const statsOpacity = useTransform(smoothProgress, [0.9, 1], [0, 1]);
  const statsY = useTransform(smoothProgress, [0.9, 1], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#1a3a52 1px, transparent 1px), linear-gradient(90deg, #1a3a52 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Main container */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              
              {/* Right side - Info Panel (2 columns) */}
              <motion.div className="lg:col-span-2 text-right space-y-8 relative z-20">
                
                {/* Eshkol Logo */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-end mb-12"
                >
                  <motion.img 
                    src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif"
                    alt="אשכול"
                    className="w-24 h-24 object-contain"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Phase info card */}
                <motion.div
                  key={currentPhase.title}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
                >
                  {/* Accent line */}
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-primary via-accent-gold to-primary" />
                  
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <motion.h2 
                        className="text-5xl lg:text-6xl font-bold text-primary mb-3 leading-tight"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                      >
                        {currentPhase.title}
                      </motion.h2>
                      <motion.p 
                        className="text-xl text-gray-600"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                      >
                        {currentPhase.subtitle}
                      </motion.p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-4 pt-6">
                      {/* Number */}
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-medium text-gray-500">התקדמות הפרויקט</span>
                        <motion.span 
                          className="text-6xl font-bold bg-gradient-to-l from-primary to-accent-gold bg-clip-text text-transparent tabular-nums"
                          key={progress}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {progress}%
                        </motion.span>
                      </div>

                      {/* Progress bar */}
                      <div className="relative">
                        {/* Background */}
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          {/* Fill */}
                          <motion.div
                            className="h-full bg-gradient-to-l from-primary via-accent-gold to-primary rounded-full relative"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          >
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 1
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>

                      {/* Milestones */}
                      <div className="flex justify-between text-xs text-gray-400 pt-2">
                        <span>התחלה</span>
                        <span>בביצוע</span>
                        <span>השלמה</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Completion badge */}
                <motion.div
                  style={{ opacity: statsOpacity, y: statsY }}
                  className="bg-gradient-to-br from-primary/10 via-accent-gold/10 to-primary/10 rounded-2xl p-8 border border-accent-gold/20 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-yellow-600 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-primary mb-2">בונים באהבה</h3>
                      <p className="text-gray-700 leading-relaxed">
                        מעל 25 שנות ניסיון בבניית יחידות דיור איכותיות
                      </p>
                      <div className="flex gap-6 mt-4 justify-end text-sm">
                        <div>
                          <div className="text-2xl font-bold text-primary">5,000+</div>
                          <div className="text-gray-500">יחידות דיור</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">98%</div>
                          <div className="text-gray-500">שביעות רצון</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Left side - REALISTIC Building Display (3 columns) */}
              <div className="lg:col-span-3 relative h-screen flex items-center justify-center">
                
                {/* Main image container with 3D perspective */}
                <motion.div
                  style={{
                    perspective: 2000,
                    rotateX,
                    rotateY
                  }}
                  className="relative w-full max-w-4xl aspect-[4/3]"
                >
                  {/* Current phase image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                    {/* The actual building image */}
                    <motion.img
                      key={currentPhase.image}
                      src={currentPhase.image}
                      alt={currentPhase.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Subtle overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
                      style={{ opacity: currentPhase.overlay }}
                    />

                    {/* Phase label on image - minimal */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                        className="text-white text-right"
                      >
                        <div 
                          className="text-2xl font-bold mb-1"
                          style={{
                            textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                          }}
                        >
                          {currentPhase.title}
                        </div>
                        <div 
                          className="text-white/90"
                          style={{
                            textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.5)'
                          }}
                        >
                          {currentPhase.subtitle}
                        </div>
                      </motion.div>
                    </div>

                    {/* Progress indicator on image */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
                      <span className="text-primary font-bold text-lg tabular-nums">{progress}%</span>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  {progress > 5 && progress < 95 && (
                    <>
                      {/* Corner brackets */}
                      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent-gold/30 rounded-tr-3xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent-gold/30 rounded-bl-3xl" />
                    </>
                  )}
                </motion.div>

                {/* Ambient lighting effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingScrollUltraRealistic;
