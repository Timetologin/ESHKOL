import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Building2, Hammer, Users, CheckCircle, Award } from 'lucide-react';

const BuildingScrollAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll to building progress (0% to 100%)
  const buildingProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = buildingProgress.onChange(v => setProgress(Math.round(v)));
    return unsubscribe;
  }, [buildingProgress]);

  // Building stages based on scroll progress
  const foundationOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const groundFloorHeight = useTransform(scrollYProgress, [0.15, 0.30], [0, 100]);
  const floor1Height = useTransform(scrollYProgress, [0.30, 0.45], [0, 100]);
  const floor2Height = useTransform(scrollYProgress, [0.45, 0.60], [0, 100]);
  const roofOpacity = useTransform(scrollYProgress, [0.60, 0.75], [0, 1]);
  const finishingOpacity = useTransform(scrollYProgress, [0.75, 0.90], [0, 1]);
  const celebrationOpacity = useTransform(scrollYProgress, [0.90, 1], [0, 1]);

  // Crane movement
  const craneX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const craneRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  // Workers animation
  const workerX = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]);

  // Background sky color
  const skyColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#87CEEB', '#FFB347', '#FF6B6B', '#4A90E2']
  );

  const stages = [
    { 
      progress: 0, 
      icon: Building2, 
      title: 'יזמות ותכנון', 
      desc: 'אנחנו מתחילים עם חזון' 
    },
    { 
      progress: 20, 
      icon: Hammer, 
      title: 'יסודות וחפירה', 
      desc: 'בונים בסיס איתן' 
    },
    { 
      progress: 40, 
      icon: Building2, 
      title: 'בניית השלד', 
      desc: 'הבניין מתחיל לקום' 
    },
    { 
      progress: 60, 
      icon: Building2, 
      title: 'קומות עליונות', 
      desc: 'מתקרבים לשמיים' 
    },
    { 
      progress: 80, 
      icon: Hammer, 
      title: 'גימורים ופיתוח', 
      desc: 'כל פרט חשוב' 
    },
    { 
      progress: 100, 
      icon: CheckCircle, 
      title: 'מסירה ושביעות רצון', 
      desc: 'החלום שלכם התגשם!' 
    }
  ];

  const currentStage = stages.reduce((acc, stage) => 
    progress >= stage.progress ? stage : acc
  , stages[0]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-gradient-to-b from-gray-50 to-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Animated Sky Background */}
        <motion.div 
          style={{ backgroundColor: skyColor }}
          className="absolute inset-0 transition-colors duration-1000"
        >
          {/* Clouds */}
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-16 bg-white/50 rounded-full blur-xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-40 h-20 bg-white/40 rounded-full blur-xl"
          />
        </motion.div>

        {/* Main Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Text & Progress */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-right space-y-8 relative z-10"
              >
                {/* Stage Info */}
                <motion.div
                  key={currentStage.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4 justify-end">
                    <h2 className="text-4xl font-bold text-primary">
                      {currentStage.title}
                    </h2>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <currentStage.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{currentStage.desc}</p>
                  
                  {/* Progress Counter */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-6xl font-bold text-primary">
                        {progress}%
                      </span>
                      <span className="text-xl text-gray-500">הושלם</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        style={{ width: `${progress}%` }}
                        className="absolute inset-y-0 right-0 bg-gradient-to-l from-primary to-primary-light rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Company Values */}
                  {progress >= 95 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-6 bg-accent-gold/10 rounded-xl border border-accent-gold/30"
                    >
                      <div className="flex items-center gap-3 justify-end mb-4">
                        <h3 className="text-2xl font-bold text-primary">בונים באהבה</h3>
                        <Award className="w-8 h-8 text-accent-gold" />
                      </div>
                      <p className="text-gray-700 text-lg">
                        מעל 25 שנות ניסיון, 5000+ יחידות דיור, ושביעות רצון של 98%
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Scroll Hint */}
                {progress < 5 && (
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center text-gray-500"
                  >
                    <div className="text-lg mb-2">גלול למטה לבניית הבניין</div>
                    <div className="text-3xl">↓</div>
                  </motion.div>
                )}
              </motion.div>

              {/* Right Side - Building Animation */}
              <div className="relative h-[600px]">
                {/* Construction Site Base */}
                <motion.div
                  style={{ opacity: foundationOpacity }}
                  className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-lg"
                >
                  {/* Ground texture */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)',
                    }} />
                  </div>
                </motion.div>

                {/* Building Container */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64">
                  
                  {/* Ground Floor */}
                  <motion.div
                    style={{ height: groundFloorHeight }}
                    className="relative bg-gradient-to-b from-gray-300 to-gray-400 border-4 border-gray-500 overflow-hidden"
                  >
                    {/* Windows */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.div
                        key={`gf-window-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: progress > 30 ? 1 : 0,
                          scale: progress > 30 ? 1 : 0
                        }}
                        transition={{ delay: i * 0.1 }}
                        className="absolute w-8 h-10 bg-cyan-300 border-2 border-gray-600"
                        style={{
                          right: `${(i + 1) * 15}%`,
                          top: '30%'
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Floor 1 */}
                  <motion.div
                    style={{ height: floor1Height }}
                    className="relative bg-gradient-to-b from-gray-400 to-gray-500 border-x-4 border-gray-500 overflow-hidden"
                  >
                    {/* Windows */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.div
                        key={`f1-window-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: progress > 45 ? 1 : 0,
                          scale: progress > 45 ? 1 : 0
                        }}
                        transition={{ delay: i * 0.1 }}
                        className="absolute w-8 h-10 bg-cyan-300 border-2 border-gray-600"
                        style={{
                          right: `${(i + 1) * 15}%`,
                          top: '30%'
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Floor 2 */}
                  <motion.div
                    style={{ height: floor2Height }}
                    className="relative bg-gradient-to-b from-gray-500 to-gray-600 border-x-4 border-gray-500 overflow-hidden"
                  >
                    {/* Windows */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <motion.div
                        key={`f2-window-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: progress > 60 ? 1 : 0,
                          scale: progress > 60 ? 1 : 0
                        }}
                        transition={{ delay: i * 0.1 }}
                        className="absolute w-8 h-10 bg-cyan-300 border-2 border-gray-600"
                        style={{
                          right: `${(i + 1) * 15}%`,
                          top: '30%'
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Roof */}
                  <motion.div
                    style={{ opacity: roofOpacity }}
                    className="relative h-12 bg-gradient-to-b from-red-700 to-red-800 border-4 border-red-900"
                  >
                    {/* Roof tiles effect */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.2) 20px, rgba(0,0,0,0.2) 22px)',
                    }} />
                  </motion.div>

                  {/* Celebration - CEO & Client */}
                  <motion.div
                    style={{ opacity: celebrationOpacity }}
                    className="absolute -top-24 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-accent-gold"
                  >
                    {/* CEO */}
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-2 shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-bold text-primary">המנכ"ל</p>
                    </div>

                    {/* Handshake */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl"
                    >
                      🤝
                    </motion.div>

                    {/* Client */}
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-gold to-yellow-500 flex items-center justify-center mb-2 shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-bold text-accent-gold">הלקוח</p>
                    </div>
                  </motion.div>

                  {/* Finishing touches - Paint & Details */}
                  <motion.div
                    style={{ opacity: finishingOpacity }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {/* Paint drips */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={`paint-${i}`}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className="absolute w-2 h-8 bg-white/60 rounded-full"
                        style={{
                          right: `${(i + 1) * 15}%`,
                          top: `${Math.random() * 80}%`
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Crane */}
                <motion.div
                  style={{ 
                    x: craneX,
                    rotate: craneRotate,
                    opacity: progress < 95 ? 1 : 0
                  }}
                  className="absolute top-10 left-1/2 -translate-x-1/2"
                >
                  {/* Crane arm */}
                  <div className="relative w-32 h-2 bg-yellow-500 origin-left">
                    <div className="absolute right-0 top-0 w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  {/* Crane tower */}
                  <div className="absolute bottom-0 left-0 w-2 h-24 bg-yellow-600" />
                  {/* Hook */}
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute right-0 top-2 w-1 h-12 bg-gray-800"
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-sm" />
                  </motion.div>
                </motion.div>

                {/* Workers */}
                <motion.div
                  style={{ x: workerX }}
                  className="absolute bottom-24 left-1/4"
                >
                  {progress < 90 && (
                    <motion.div
                      animate={{ 
                        x: [0, 10, 0],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl"
                    >
                      👷
                    </motion.div>
                  )}
                </motion.div>

                {/* Particles/Dust */}
                {progress > 10 && progress < 80 && (
                  <motion.div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        initial={{ 
                          y: Math.random() * 200,
                          x: Math.random() * 300,
                          opacity: 0
                        }}
                        animate={{ 
                          y: Math.random() * 400,
                          x: Math.random() * 300,
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                        className="absolute w-2 h-2 bg-amber-400 rounded-full blur-sm"
                      />
                    ))}
                  </motion.div>
                )}

                {/* Confetti when done */}
                {progress >= 98 && (
                  <motion.div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={`confetti-${i}`}
                        initial={{ 
                          y: -20,
                          x: Math.random() * 400,
                          rotate: 0,
                          opacity: 1
                        }}
                        animate={{ 
                          y: 600,
                          rotate: 360,
                          opacity: 0
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                        className={`absolute w-3 h-3 ${
                          i % 3 === 0 ? 'bg-accent-gold' :
                          i % 3 === 1 ? 'bg-primary' :
                          'bg-red-500'
                        } rounded-full`}
                      />
                    ))}
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

export default BuildingScrollAnimation;
