import { motion } from 'framer-motion'
import { Shield, Award, Heart, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CompanyValues = () => {
  const navigate = useNavigate()
  
  const values = [
    {
      icon: Shield,
      title: "אחריות",
      description: "אחריות מלאה על כל שלבי הפרויקט, מהתכנון ועד המסירה הסופית",
      color: "bg-blue-500",
      lightBg: "bg-blue-50",
      lineColor: "bg-blue-500"
    },
    {
      icon: Award,
      title: "מקצועיות",
      description: "צוות מקצועי ומנוסה עם למעלה מ-25 שנות ניסיון בתחום",
      color: "bg-yellow-500",
      lightBg: "bg-yellow-50",
      lineColor: "bg-yellow-500"
    },
    {
      icon: Heart,
      title: "שירות",
      description: "שירות אישי ומסור עם דגש על יחס אישי ותקשורת שוטפת",
      color: "bg-pink-500",
      lightBg: "bg-pink-50",
      lineColor: "bg-pink-500"
    },
    {
      icon: Sparkles,
      title: "נגיעה אישית",
      description: "כל פרויקט מקבל תשומת לב מיוחדת והתאמה אישית מלאה",
      color: "bg-purple-500",
      lightBg: "bg-purple-50",
      lineColor: "bg-purple-500"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-bold text-lg mb-4"
          >
            הערכים שלנו
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            מה שמניע אותנו
          </h2>
          
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="block text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent-gold to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            קדימה
          </motion.span>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-24 bg-accent-gold mx-auto mt-8"
          />
          
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            ארבעה ערכי ליבה שמגדירים את הדרך שלנו לבנות ולהוביל פרויקטים
          </p>
        </motion.div>

        {/* Values Grid - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
                  
                  {/* Hover background effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    className={`absolute inset-0 ${value.color}`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {value.description}
                  </p>

                  {/* Bottom line */}
                  <motion.div
                    initial={{ scaleX: 0.3 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 w-16 ${value.lineColor} rounded-full origin-right`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            רוצים לראות איך הערכים שלנו מתבטאים בפועל?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
            className="bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            גלה את הפרויקטים שלנו
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyValues
