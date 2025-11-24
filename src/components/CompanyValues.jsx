// CompanyValues.jsx - ערכי החברה עם כפתור לצור קשר (לא לפרויקטים)
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Shield, Users, Award, Lightbulb } from 'lucide-react'
import EshkolButton from './EshkolButton'

const CompanyValues = () => {
  const navigate = useNavigate()

  const values = [
    {
      icon: Shield,
      title: 'אחריות',
      description: 'אנו לוקחים אחריות מלאה על כל פרויקט, מהתכנון ועד המסירה. עומדים מאחורי כל התחייבות.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      lineColor: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'מקצועיות',
      description: 'צוות מומחים עם עשרות שנות ניסיון בתחום הבנייה והנדל"ן, המביאים ידע וניסיון לכל פרויקט.',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      lineColor: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'איכות',
      description: 'סטנדרטים גבוהים ללא פשרות. שימוש בחומרים מהאיכות הגבוהה ביותר ובקרת איכות קפדנית.',
      color: 'bg-gradient-to-br from-accent-gold to-yellow-500',
      lineColor: 'bg-accent-gold'
    },
    {
      icon: Lightbulb,
      title: 'חדשנות',
      description: 'תמיד בחזית הטכנולוגיה עם פתרונות בנייה ירוקה, חכמה ובת-קיימא לעתיד טוב יותר.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      lineColor: 'bg-purple-500'
    }
  ]

  // כפתור לצור קשר - לא לפרויקטים (כדי למנוע כפילויות)
  const handleContactClick = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl" />
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
            className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold mb-6"
          >
            הערכים שלנו
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            מה מנחה אותנו?
          </h2>
          
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6" />
          
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

        {/* CTA - לצור קשר, לא לפרויקטים */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            רוצים לדעת עוד על הדרך שלנו לעבוד?
          </p>
          <EshkolButton
            onClick={handleContactClick}
            variant="primary"
            size="lg"
          >
            דברו איתנו
          </EshkolButton>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyValues
