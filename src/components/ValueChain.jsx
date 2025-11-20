import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { 
  Lightbulb, 
  TrendingUp, 
  FileText, 
  Megaphone, 
  ShoppingCart, 
  Hammer, 
  Palette, 
  Key, 
  Shield,
  Building2,
  CheckCircle2
} from 'lucide-react'

const ValueChain = () => {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const valueChainSteps = [
    {
      icon: Lightbulb,
      title: "ייזום ופיתוח עסקי",
      description: "המחלקה פועלת בשקיפות מלאה, סטנדרט מקצועי ללא פשרות ולפי לוח הזמנים של היזם, תוך מתן פתרונות יצירתיים ומלאים לאתגרים משתנים.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: TrendingUp,
      title: "השבחת קרקע",
      description: "ייעודה של המחלקה הוא השבחת הנכסים אותה רוכשת החברה ושותפיה. המחלקה מנהלת בכל רגע נתון עשרות תב\"עות ברחבי הארץ.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: FileText,
      title: "ניהול, תכנון ורישוי",
      description: "חטיבת ניהול הפרויקטים באשכול מספקת שירותי ניהול מתקדמים המלווים ותומכים את כל שרשרת הערך בעשיית החברה.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Megaphone,
      title: "שיווק",
      description: "מחלקת השיווק מהווה תפקיד מכריע בקידום המותג, שמירה על זהות וערכי המותג, השירותים והמוצרים של החברה.",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: ShoppingCart,
      title: "מכירות",
      description: "צוות המכירות באשכול מורכב כולו מאנשי החברה המקבלים הכשרה פנימית ופועלים כדי לתת את השירות הטוב ביותר ללקוחות.",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Hammer,
      title: "ביצוע",
      description: "אשכול מבצעת בינוי לפרויקטי מגורים, משרדים ומסחר בכל גודל והיקף. קהל הלקוחות כולל יזמי נדל\"ן, בעלי קרקעות ופרויקטי פינוי בינוי.",
      color: "from-orange-400 to-amber-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Palette,
      title: "תיאום תכנון לקוחות",
      description: "אשכול מפעילה מערך תיאום תכנון ושינויי דיירים המונה עשרות אנשי צוות מקצועיים מתחום האדריכלות ועיצוב הפנים.",
      color: "from-indigo-400 to-purple-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Key,
      title: "מסירה",
      description: "כחברה המחויבת לשקיפות מלאה, איכות ומצוינות בכל תחומי פעילותה, אנחנו מתחייבים למסור ללקוח דירה מוכנה למגורים וללא ליקויים.",
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "בדק ואחריות",
      description: "לאשכול מערך בדק ואחריות גדול ומקצועי המלווה את הלקוח מיום קבלת הדירה ועד שנים רבות לאחר האכלוס.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Building2,
      title: "ניהול נכסים",
      description: "אשכול מקפידה להעניק לשוכרים ולדיירים את רמת התחזוקה והשירות הגבוהים ביותר, תוך שמירה על ערך הנכס לאורך זמן.",
      color: "from-gray-400 to-slate-500",
      bgColor: "bg-gray-50"
    }
  ]

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-lg mb-6"
          >
            שרשרת הערך שלנו
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            מייזום ועד מסירה
          </h2>
          
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            היכולת הייחודית שלנו לשלב בין כל מחלקות הארגון וליצור ערך סינרגטי לפרויקטים איכותיים יותר
          </p>
        </motion.div>

        {/* Value Chain Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden lg:block">
            {/* Connection Line */}
            <div className="relative mb-20">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-l from-primary via-accent-gold to-primary transform -translate-y-1/2" />
              
              {/* Steps */}
              <div className="grid grid-cols-5 gap-4 relative">
                {valueChainSteps.slice(0, 5).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full aspect-square rounded-2xl shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4 ${
                        activeStep === index 
                          ? 'bg-gradient-to-br ' + step.color + ' text-white scale-110 shadow-2xl'
                          : 'bg-white text-primary hover:shadow-xl'
                      }`}
                    >
                      <step.icon size={40} className="mb-2" />
                      <span className="text-xs font-bold text-center leading-tight">
                        {step.title}
                      </span>
                    </motion.button>
                    
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className={`absolute -top-4 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeStep === index
                          ? 'bg-accent-gold text-white'
                          : 'bg-primary text-white'
                      }`}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-5 gap-4 relative mt-12">
                {valueChainSteps.slice(5).map((step, index) => (
                  <motion.div
                    key={index + 5}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 5) * 0.1 }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => setActiveStep(index + 5)}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full aspect-square rounded-2xl shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4 ${
                        activeStep === index + 5
                          ? 'bg-gradient-to-br ' + step.color + ' text-white scale-110 shadow-2xl'
                          : 'bg-white text-primary hover:shadow-xl'
                      }`}
                    >
                      <step.icon size={40} className="mb-2" />
                      <span className="text-xs font-bold text-center leading-tight">
                        {step.title}
                      </span>
                    </motion.button>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index + 5) * 0.1, type: "spring" }}
                      className={`absolute -top-4 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeStep === index + 5
                          ? 'bg-accent-gold text-white'
                          : 'bg-primary text-white'
                      }`}
                    >
                      {index + 6}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Vertical List */}
          <div className="lg:hidden space-y-4">
            {valueChainSteps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`w-full p-6 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-4 ${
                  activeStep === index
                    ? step.bgColor + ' border-2 border-primary'
                    : 'bg-white hover:shadow-xl'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                  <step.icon size={32} className="text-white" />
                </div>
                <div className="text-right flex-grow">
                  <div className="text-sm text-primary font-bold mb-1">שלב {index + 1}</div>
                  <div className="text-lg font-bold text-primary">{step.title}</div>
                </div>
                <CheckCircle2 
                  size={24} 
                  className={`flex-shrink-0 ${
                    activeStep === index ? 'text-primary' : 'text-gray-300'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-primary"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${valueChainSteps[activeStep].color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                {(() => {
                  const Icon = valueChainSteps[activeStep].icon
                  return <Icon size={40} className="text-white" />
                })()}
              </div>
              <div className="flex-grow">
                <div className="text-sm text-primary font-bold mb-2">שלב {activeStep + 1} מתוך {valueChainSteps.length}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {valueChainSteps[activeStep].title}
                </h3>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {valueChainSteps[activeStep].description}
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(prev => prev > 0 ? prev - 1 : valueChainSteps.length - 1)}
                className="flex-1 bg-gray-100 text-primary px-6 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                ← שלב קודם
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(prev => prev < valueChainSteps.length - 1 ? prev + 1 : 0)}
                className="flex-1 bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-light transition-colors"
              >
                שלב הבא →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ValueChain
