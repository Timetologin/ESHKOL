import { motion } from 'framer-motion'
import { Building2, Users, Award, TrendingUp } from 'lucide-react'

const About = () => {
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
      title: "סיווג ג' 5",
      description: "הסיווג הגבוה ביותר למגורים"
    },
    {
      icon: TrendingUp,
      title: "איתנות פיננסית",
      description: "חוסן ואמון הבנקים הגדולים"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            {/* לוגו GIF */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <img 
                src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif"
                alt="אשכול"
                className="w-32 h-32 mx-auto object-contain"
              />
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              אודות אשכול
            </h1>
            <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              מובילים בתחום הייזום והבניה עם ניסיון של עשרות שנים
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Company Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-gray-100">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-primary text-xl">אשכול מתמחה בייזום וביצוע של פרויקטים למגורים בסטנדרטים גבוהים</strong>, 
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

                  <p>
                    <strong className="text-primary">הזרוע הביצועית של החברה רשומה בפנקס הקבלנים</strong> ונהנית מסיווג ג' 5 – בלתי מוגבל, 
                    הגבוה ביותר בסיווג למגורים.
                  </p>

                  <p>
                    אשכול מלווה את דייריה בכל שלב ושלב, <strong className="text-primary">בשירות אישי, מקצועי ומסור</strong> לכל אחת ואחד מהדיירים שלנו – 
                    החל מיזמות הפרויקט, ממשיך לתכנון וביצועו ועד למסירה של מפתחות הדירה החדשה שלכם.
                  </p>

                  <p>
                    <strong className="text-primary">איתנות פיננסית</strong> – אשכול הינה חברה פרטית וותיקה, בעלת חוסן ואיתנות פיננסית 
                    הנהנית מאמון הבנקים הגדולים בישראל. כל הפרויקטים של החברה מבוצעים בליווי בנקאי. 
                    כל אלו מאפשרים לחברה ליזום ולבנות בעצמה את הפרויקטים המובחרים, בעיקר באזורי הביקוש בגוש דן.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video Section - עם Vimeo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  הכירו את אשכול
                </h2>
                <div className="h-1 w-32 bg-accent-gold mx-auto" />
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://player.vimeo.com/video/504354093?title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="אשכול - סרטון תדמית"
                  />
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  למה לבחור באשכול?
                </h2>
                <div className="h-1 w-32 bg-accent-gold mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              המספרים מדברים בעד עצמם
            </h2>
            <div className="h-1 w-32 bg-accent-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "5000+", label: "יחידות דיור", desc: "נבנו ברחבי הארץ" },
              { number: "25+", label: "שנות ניסיון", desc: "בתחום הבניה והיזמות" },
              { number: "ג' 5", label: "סיווג", desc: "הסיווג הגבוה ביותר" },
              { number: "100%", label: "ליווי בנקאי", desc: "בכל הפרויקטים" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-accent-gold/50 transition-all duration-300 hover:bg-white/15"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-white to-accent-gold bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-300 text-lg">
                    {stat.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - הצוות שלנו */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              הצוות שלנו
            </h2>
            <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              אנשי המקצוע המובילים את אשכול להצלחה
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            
            {/* דרור אברהמי - מנכ"ל */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIDLz24CJy_6NrgHaeq-OPA6o3vE6hDsX6Q&s"
                  alt="דרור אברהמי"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-t-2 border-accent-gold">
                <h3 className="text-xl font-bold text-primary mb-2">
                  דרור אברהמי
                </h3>
                <p className="text-gray-600">
                  מנכ"ל ודירקטור
                </p>
              </div>
            </motion.div>

            {/* שי אברהמי - סמנכ"ל כספים */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://jerusalemnews.co.il/wp-content/uploads/2023/08/%D7%A9%D7%99-%D7%90%D7%91%D7%A8%D7%94%D7%9E%D7%99-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%A2%D7%95%D7%93%D7%93-%D7%A7%D7%A8%D7%A0%D7%99_800x737.jpg"
                  alt="שי אברהמי"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-t-2 border-accent-gold">
                <h3 className="text-xl font-bold text-primary mb-2">
                  שי אברהמי
                </h3>
                <p className="text-gray-600">
                  סמנכ"ל כספים
                </p>
              </div>
            </motion.div>

            {/* עו"ד לילך אברהמי-יעקב - מנהלת מחלקת יזמות */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://res.cloudinary.com/dmabeivkl/image/upload/w_800,fl_lossy,f_auto/v1610522948/main-image/qa7rvr9dov9ux8sqmldz.jpg"
                  alt="עו&quot;ד לילך אברהמי-יעקב"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-t-2 border-accent-gold">
                <h3 className="text-xl font-bold text-primary mb-2">
                  עו"ד לילך אברהמי-יעקב
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  מנהלת מחלקת יזמות והתחדשות עירונית
                </p>
              </div>
            </motion.div>

            {/* גדעון אברהמי - יו"ר הדירקטוריון */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://sites3.webetter.net/wp-content/uploads/2018/07/gidon-avrahami.jpg"
                  alt="גדעון אברהמי"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-t-2 border-accent-gold">
                <h3 className="text-xl font-bold text-primary mb-2">
                  גדעון אברהמי
                </h3>
                <p className="text-gray-600">
                  יו"ר הדירקטוריון
                </p>
              </div>
            </motion.div>

            {/* אביטל משה - שמאית ומנהלת פיתוח עסקי */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary via-primary-light to-accent-gold/20 flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                    <Award className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center border-t-2 border-accent-gold">
                <h3 className="text-xl font-bold text-primary mb-2">
                  אביטל משה
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  שמאית מקרקעין, מנהלת פיתוח עסקי ובקרה תקציבית
                </p>
              </div>
            </motion.div>

            {/* טלי אלבז - שיווק וקשרי לקוחות */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://res.cloudinary.com/dmabeivkl/image/upload/w_800,fl_lossy,f_auto/v1610525074/profile-image/e0gppkaamsley3y4r5wf.jpg"
                  alt="טלי אלבז"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center border-t-2 border-accent-gold">
                <h3 className="text-xl font-bold text-primary mb-2">
                  טלי אלבז
                </h3>
                <p className="text-gray-600">
                  שיווק וקשרי לקוחות
                </p>
              </div>
            </motion.div>

            {/* אלון מעטוף - סמנכ"ל ביצוע */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary via-primary-light to-accent-gold/20 flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                    <Building2 className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center border-t-2 border-accent-gold">
                <h3 className="text-xl font-bold text-primary mb-2">
                  אלון מעטוף
                </h3>
                <p className="text-gray-600">
                  סמנכ"ל ביצוע
                </p>
              </div>
            </motion.div>

            {/* כרטיסי עובדים נוספים יתווספו כאן */}
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
