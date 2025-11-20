import { motion } from 'framer-motion'
import { Shield, Award, Users, Heart, Lightbulb, TrendingUp } from 'lucide-react'

const CompanyValues = () => {
  const values = [
    {
      icon: Shield,
      title: "אחריות",
      description: "אנו פועלים באווירה חיובית, תוך עמידה בכל היעדים ואי פשרות על איכות. ניסיון רב והישגיות הם ערכים מרכזיים עבורנו, ולכן אכפת לנו להוביל את כל המהלכים בצורה הטובה ביותר עבור לקוחותינו. אנו מאמינים בהשקעה מלאה, במתן אוזן קשבת וביצירת אמון לאורך כל הדרך. בזכות זאת אנו מצליחים לפתח ולקדם כל פרויקט תוך עמידה בלוחות הזמנים וקבלת התוצאות הטובות ביותר.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      title: "מקצועיות",
      description: "אנו מאמינים בחובתנו לחתור למצוינות, בהצגת תכנון מדויק והליך קבלת החלטות חכם ומתקדם. היכולת לנהל תהליכים מורכבים בצורה ברורה ולא מתפשרת כדי שתוכלו להיות רגועים ובטוחים שהפרויקט שלכם יתקדם בצורה מיטבית ויעילה.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "חדשנות",
      description: "אנו מתבססים על חשיבה חדשנית ויצירתית לייצור מוצרים איכותיים, יעילים ותומכים. משימתנו לייצר פתרונות חדשים ומתקדמים המתאימים לאתגרים, לשוק ולשינויים הטכנולוגיים. החברה מחויבת ליצירתיות, בחשיבה מחוץ לקופסה ובחיפוש אחר תהליכים חדשים ומתקדמים. בזכות חשיבה יצירתית זו אנו מספקים פתרונות נוספים שמותאמים לכל לקוח ולכל פרויקט ומסייעים בהצלחת המיזמים.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "שירות",
      description: "לקוחות מרוצים הם בסיס לכל מערכת עסקית מוצלחת שלנו. אנו דואגים כי אתם תיהנו מהשירות המקצועי ביותר, תוך זמינות מלאה, אכפתיות ומתן מענה מהיר ומדויק. היחס שאתם מקבלים הוא אישי, נעים ומקצועי, והינו חלק בלתי נפרד מהמחויבות שלנו להעניק ללקוחות חוויית שירות ברמה הגבוהה ביותר.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "יזמות",
      description: "אנו מתמודדים בסביבה העסקית המאתגרת ומשתמשים בידע הנצבר לשאת את הדגל. שאיפת הלמידה המתמדת שלנו והתפתחות החברה תומכת תמיד בתהליכי יזמות, פתיחות לשינויים, מיקוד ביעדים והסתכלות קדימה לטובת צמיחה חיובית ויצירת פתרונות פורצי דרך שיהיו לשירות לקוחותינו בצורה מיטבית.",
      color: "from-teal-400 to-cyan-600"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-bold text-lg mb-6"
            >
              ערכים מובילים
            </motion.span>
            
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              הערכים שמנחים אותנו
            </h2>
            
            <div className="h-1 w-32 bg-accent-gold mx-auto" />
          </div>

          {/* Values Grid - 2 columns layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Right Column */}
            <div className="space-y-8">
              {/* אחריות */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${values[0].color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  {(() => {
                    const Icon = values[0].icon
                    return <Icon className="text-white" size={32} />
                  })()}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
                  {values[0].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {values[0].description}
                </p>
              </motion.div>

              {/* שירות */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${values[3].color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  {(() => {
                    const Icon = values[3].icon
                    return <Icon className="text-white" size={32} />
                  })()}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
                  {values[3].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {values[3].description}
                </p>
              </motion.div>
            </div>

            {/* Left Column */}
            <div className="space-y-8">
              {/* מקצועיות */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${values[1].color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  {(() => {
                    const Icon = values[1].icon
                    return <Icon className="text-white" size={32} />
                  })()}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
                  {values[1].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {values[1].description}
                </p>
              </motion.div>

              {/* חדשנות */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${values[2].color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  {(() => {
                    const Icon = values[2].icon
                    return <Icon className="text-white" size={32} />
                  })()}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
                  {values[2].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {values[2].description}
                </p>
              </motion.div>

              {/* יזמות */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${values[4].color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  {(() => {
                    const Icon = values[4].icon
                    return <Icon className="text-white" size={32} />
                  })()}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
                  {values[4].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {values[4].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyValues