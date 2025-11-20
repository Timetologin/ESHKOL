import { motion } from 'framer-motion'
import { Leaf, Shield, Lightbulb, Users, Award, TrendingUp, Building, CheckCircle } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: "בניה ירוקה",
      description: "שימוש בטכנולוגיות ירוקות וחומרים ידידותיים לסביבה המביאים לחיסכון משמעותי באנרגיה ובעלויות",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Shield,
      title: "איכות ואמינות",
      description: "סטנדרטים גבוהים של בניה והקפדה על פרטים קטנים לשביעות רצון מלאה של הדיירים",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "טכנולוגיה מתקדמת",
      description: "שילוב הטכנולוגיות המתקדמות ביותר בתכנון ובביצוע לתוצאות מושלמות",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Users,
      title: "צוות מקצועי",
      description: "שילוב ייחודי של אנשי מקצוע ותיקים ומנוסים עם אנרגיה צעירה ורעננה",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Building,
      title: "התחדשות עירונית",
      description: "מומחיות בפרויקטי תמ\"א 38 ופינוי-בינוי עם ניסיון מוכח ברחבי הארץ",
      color: "from-red-400 to-pink-600"
    },
    {
      icon: Award,
      title: "מצוינות בביצוע",
      description: "התחייבות למסירה בזמן ובאיכות הגבוהה ביותר בכל פרויקט",
      color: "from-teal-400 to-cyan-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
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
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-lg mb-6"
          >
            היתרונות שלנו
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            למה לבחור באשכול?
          </h2>
          
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            אנחנו משלבים ניסיון עשיר עם חדשנות טכנולוגית ומחויבות לאיכות ללא פשרות
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full -z-0"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-primary-light text-white px-12 py-5 rounded-xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          >
            <CheckCircle size={24} />
            בואו נדבר על הפרויקט שלכם
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
