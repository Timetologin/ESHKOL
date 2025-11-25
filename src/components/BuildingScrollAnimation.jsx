import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Building2, Pencil, HardHat, Key, CheckCircle2 } from 'lucide-react';

const BuildingScrollAnimationPro = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const buildingProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = buildingProgress.onChange(v => setProgress(Math.round(v)));
    return unsubscribe;
  }, [buildingProgress]);

  // Building layers - realistic minimal style
  const foundationOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const foundationY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const floor1Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const floor1Y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  
  const floor2Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const floor2Y = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  
  const floor3Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const floor3Y = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);
  
  const roofOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const roofY = useTransform(scrollYProgress, [0.8, 0.9], [50, 0]);
  
  const completionOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  const stages = [
    { 
      progress: 0, 
      icon: Pencil, 
      title: 'תכנון ויזמות', 
      desc: 'מתחילים עם חזון ותכנון מקצועי',
      image: 'https://eshkol.co.il/wp-content/uploads/2019/04/shutterstock_438434868.jpg'
    },
    { 
      progress: 25, 
      icon: Building2, 
      title: 'יסודות והיתרים', 
      desc: 'בניית יסודות איתנים וקבלת כל האישורים',
      image: 'https://eshkol.co.il/wp-content/uploads/2019/04/shutterstock_438434868.jpg'
    },
    { 
      progress: 50, 
      icon: HardHat, 
      title: 'ביצוע ובנייה', 
      desc: 'בונים את הפרויקט עם מומחיות וניסיון',
      image: 'https://eshkol.co.il/wp-content/uploads/2019/04/shutterstock_438434868.jpg'
    },
    { 
      progress: 75, 
      icon: Building2, 
      title: 'גימורים ופיתוח', 
      desc: 'תשומת לב לכל פרט ועיצוב',
      image: 'https://eshkol.co.il/wp-content/uploads/2019/04/shutterstock_438434868.jpg'
    },
    { 
      progress: 100, 
      icon: Key, 
      title: 'מסירה ללקוחות', 
      desc: 'הבית שלכם מוכן - בונים באהבה',
      image: 'https://eshkol.co.il/wp-content/uploads/2021/11/1977_apt_13_002f-scaled.jpg'
    }
  ];

  const currentStage = stages.reduce((acc, stage) => 
    progress >= stage.progress ? stage : acc
  , stages[0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background Pattern - Subtle */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#1a3a52 1px, transparent 1px), linear-gradient(90deg, #1a3a52 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - Professional Text & Progress */}
              <motion.div className="text-right space-y-8 relative z-10">
                
                {/* Eshkol Logo GIF */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-end mb-8"
                >
                  <img 
                    src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif"
                    alt="אשכול"
                    className="w-20 h-20 object-contain"
                  />
                </motion.div>

                {/* Stage Card - Minimal & Professional */}
                <motion.div
                  key={currentStage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100"
                >
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6 justify-end">
                    <h2 className="text-4xl font-bold text-primary">
                      {currentStage.title}
                    </h2>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <currentStage.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {currentStage.desc}
                  </p>
                  
                  {/* Progress Display - Minimal */}
                  <div className="space-y-4">
                    {/* Percentage */}
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-lg text-gray-500 font-medium">התקדמות</span>
                      <span className="text-5xl font-bold text-primary tabular-nums">
                        {progress}%
                      </span>
                    </div>
                    
                    {/* Progress Bar - Clean */}
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        style={{ width: `${progress}%` }}
                        className="absolute inset-y-0 right-0 bg-primary rounded-full"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      {/* Accent highlight */}
                      <motion.div
                        style={{ width: `${progress}%` }}
                        className="absolute inset-y-0 right-0 bg-gradient-to-l from-accent-gold/50 to-transparent rounded-full"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Completion Badge */}
                  {progress >= 95 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-xl border border-accent-gold/20"
                    >
                      <div className="flex items-center gap-3 mb-3 justify-end">
                        <h3 className="text-2xl font-bold text-primary">בונים באהבה</h3>
                        <CheckCircle2 className="w-6 h-6 text-accent-gold" strokeWidth={2} />
                      </div>
                      <p className="text-gray-700 text-lg">
                        מעל 25 שנות ניסיון | 5,000+ יחידות דיור | 98% שביעות רצון
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Real Project Image - Fades in with stage */}
                <motion.div
                  key={currentStage.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={currentStage.image}
                    alt={currentStage.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                  <div className="absolute bottom-6 right-6 left-6">
                    <p className="text-white text-lg font-medium">
                      {currentStage.title}
                    </p>
                  </div>
                </motion.div>

                {/* Scroll Hint - Minimal */}
                {progress < 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center text-gray-400 text-sm"
                  >
                    גלול למטה
                  </motion.div>
                )}
              </motion.div>

              {/* Right Side - Minimal Building Visualization */}
              <div className="relative h-[600px] flex items-end justify-center">
                
                {/* Building Container - Professional & Clean */}
                <div className="relative w-80 h-[500px]">
                  
                  {/* Foundation */}
                  <motion.div
                    style={{ opacity: foundationOpacity, y: foundationY }}
                    className="absolute bottom-0 left-0 right-0"
                  >
                    <div className="h-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
                      {/* Texture */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                      }} />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gold/50" />
                    </div>
                  </motion.div>

                  {/* Floor 1 - Ground */}
                  <motion.div
                    style={{ opacity: floor1Opacity, y: floor1Y }}
                    className="absolute bottom-24 left-0 right-0"
                  >
                    <div className="h-28 bg-gradient-to-b from-gray-200 to-gray-300 border-x-2 border-primary/20 relative overflow-hidden">
                      {/* Windows Grid */}
                      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <motion.div
                            key={`f1-w-${i}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                            className="bg-gradient-to-b from-cyan-100 to-cyan-200 border border-gray-400/30"
                          />
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />
                    </div>
                  </motion.div>

                  {/* Floor 2 */}
                  <motion.div
                    style={{ opacity: floor2Opacity, y: floor2Y }}
                    className="absolute bottom-52 left-0 right-0"
                  >
                    <div className="h-28 bg-gradient-to-b from-gray-300 to-gray-400 border-x-2 border-primary/20 relative overflow-hidden">
                      {/* Windows Grid */}
                      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <motion.div
                            key={`f2-w-${i}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                            className="bg-gradient-to-b from-cyan-100 to-cyan-200 border border-gray-400/30"
                          />
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />
                    </div>
                  </motion.div>

                  {/* Floor 3 - Top */}
                  <motion.div
                    style={{ opacity: floor3Opacity, y: floor3Y }}
                    className="absolute bottom-80 left-0 right-0"
                  >
                    <div className="h-28 bg-gradient-to-b from-gray-400 to-gray-500 border-x-2 border-primary/20 relative overflow-hidden">
                      {/* Windows Grid */}
                      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <motion.div
                            key={`f3-w-${i}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                            className="bg-gradient-to-b from-cyan-100 to-cyan-200 border border-gray-400/30"
                          />
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />
                    </div>
                  </motion.div>

                  {/* Roof - Minimal */}
                  <motion.div
                    style={{ opacity: roofOpacity, y: roofY }}
                    className="absolute bottom-[26rem] left-0 right-0"
                  >
                    <div className="h-12 bg-gradient-to-b from-primary to-primary-light border-2 border-primary relative">
                      {/* Accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />
                    </div>
                  </motion.div>

                  {/* Completion Overlay - Professional */}
                  <motion.div
                    style={{ opacity: completionOpacity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-accent-gold/30 max-w-sm">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">
                          הפרויקט הושלם
                        </h3>
                        <p className="text-gray-600">
                          מוכן למסירה ללקוחות מרוצים
                        </p>
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-primary font-bold text-lg">
                            בונים באהבה
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Subtle Construction Lines */}
                  {progress > 0 && progress < 90 && (
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Vertical guides */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-accent-gold/20" />
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-accent-gold/20" />
                      {/* Horizontal guide at current progress */}
                      <motion.div
                        style={{ 
                          bottom: `${progress * 4.5}px`,
                          opacity: 0.3 
                        }}
                        className="absolute left-0 right-0 h-px bg-accent-gold"
                      />
                    </div>
                  )}
                </div>

                {/* Measurements - Professional Touch */}
                {progress > 10 && progress < 95 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className="absolute right-0 top-1/4 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-8 h-px bg-gray-400" />
                      <span className="font-mono">{Math.round(progress * 4.5)}m</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingScrollAnimationPro;
