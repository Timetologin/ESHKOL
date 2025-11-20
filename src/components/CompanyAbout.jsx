import { motion } from 'framer-motion'
import { Building2, Users, Award, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const CompanyAbout = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const highlights = [
    {
      icon: Building2,
      title: "פרויקטים איכותיים",
      description: "בניה בסטנדרטים הגבוהים ביותר"
    },
    {
      icon: Users,
      title: "צוות מקצועי",
      description: "משב רוח רענן ואנשי מקצוע ותיקים"
    },
    {
      icon: Award,
      title: "טכנולוגיה מתקדמת",
      description: "שימוש במתקדם והמודרני ביותר"
    },
    {
      icon: TrendingUp,
      title: "בניה ירוקה",
      description: "חיסכון בעלויות ובאנרגיה"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-accent-gold/10 text-accent-gold px-6 py-2 rounded-full font-semibold text-lg">
                אודות אשכול
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight"
            >
              חדשנות ומקצועיות<br />בכל פרויקט
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                <strong className="text-primary">אשכול מתמחה בייזום וביצוע של פרויקטים למגורים בסטנדרטים גבוהים</strong>, 
                תוך שימוש בטכנולוגיה המתקדמת והמודרנית ביותר, ודוגלת בבניה ירוקה שמביאה לחיסכון בעלויות ובאנרגיה לטובת הדיירים.
              </p>

              <p>
                ככל שמדובר בפרויקטים יזמיים ובפרויקטים של התחדשות עירונית כגון תמ"א 38 ומתחמי פינוי בינוי, 
                <strong className="text-primary"> אשכול הינה בעלת הידע, המקצועיות והניסיון</strong>, הן בתכנון והן בביצוע.
              </p>

              <p>
                עובדי החברה מביאים אתם <strong className="text-primary">משב רוח רענן ואנרגיה חדשה וצעירה</strong> לשוק הנדל"ן המקומי, 
                זאת לצד הנהלה ואנשי מקצוע ותיקים ובעלי ניסיון רב בתחום הבניה, 
                ניסיון הכולל יזמות וביצוע של <strong className="text-primary">אלפי יחידות דיור ברחבי הארץ</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-primary-light transition-all duration-300 flex items-center gap-3"
                >
                  קרא עוד אודותינו
                  <motion.span
                    animate={{ x: [-3, 0, -3] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ←
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Left Side - Image & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070"
                alt="פרויקט אשכול"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyAbout