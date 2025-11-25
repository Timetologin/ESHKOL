import { motion } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, Shield, Target } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '25+', label: 'שנות ניסיון', icon: Award },
    { number: '5,000+', label: 'יחידות דיור', icon: Building2 },
    { number: 'ג\'5', label: 'סיווג קבלני', icon: Shield },
    { number: '98%', label: 'שביעות רצון', icon: Users }
  ];

  const values = [
    {
      icon: Target,
      title: 'מומחיות בתחום',
      description: 'פרויקטים יזמיים, התחדשות עירונית (תמ"א 38), ומתחמי פינוי בינוי'
    },
    {
      icon: Users,
      title: 'צוות משולב',
      description: 'אנרגיה צעירה ומשב רוח רענן לצד הנהלה ותיקה עם עשרות שנות ניסיון'
    },
    {
      icon: TrendingUp,
      title: 'איתנות פיננסית',
      description: 'חברה פרטית וותיקה בעלת חוסן, בליווי הבנקים הגדולים בישראל'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#1a3a52 1px, transparent 1px), linear-gradient(90deg, #1a3a52 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <img 
                  src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif"
                  alt="אשכול"
                  className="w-32 h-32 object-contain"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight"
              >
                אודות אשכול
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6 text-xl text-gray-700 leading-relaxed"
              >
                <p>
                  <strong className="text-primary">אשכול מתמחה בייזום וביצוע של פרויקטים למגורים בסטנדרטים גבוהים</strong>, תוך שימוש בטכנולוגיה המתקדמת והמודרנית ביותר, ודוגלת בבניה ירוקה שמביאה לחיסכון בעלויות ובאנרגיה לטובת הדיירים.
                </p>
                
                <p>
                  ככל שמדובר בפרויקטים יזמיים ובפרויקטים של התחדשות עירונית כגון תמ"א 38 ומתחמי פינוי בינוי, אשכול הינה בעלת הידע, המקצועיות והניסיון, הן בתכנון והן בביצוע.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://eshkol.co.il/wp-content/uploads/2019/04/2-1-1.jpg"
                  alt="אשכול - פרויקטים"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:border-accent-gold/30 transition-colors duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-l from-primary to-accent-gold bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Experience section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              הצוות שלנו
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              עובדי החברה מביאים אתם משב רוח רענן ואנרגיה חדשה וצעירה לשוק הנדל"ן המקומי, זאת לצד הנהלה ואנשי מקצוע ותיקים ובעלי ניסיון רב בתחום הבניה, ניסיון הכולל יזמות וביצוע של אלפי יחידות דיור ברחבי הארץ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Contractor certification */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl border border-accent-gold/20 mb-8"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <div className="text-right flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    סיווג קבלני ג'5 - בלתי מוגבל
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    הזרוע הביצועית של החברה רשומה בפנקס הקבלנים ונהנית מסיווג ג' 5 – בלתי מוגבל, הגבוה ביותר בסיווג למגורים.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Financial stability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl border border-primary/20"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <div className="text-right flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    איתנות פיננסית
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    אשכול הינה חברה פרטית וותיקה, בעלת חוסן ואיתנות פיננסית הנהנית מאמון הבנקים הגדולים בישראל. כל הפרויקטים של החברה מבוצעים בליווי בנקאי. כל אלו מאפשרים לחברה ליזום ולבנות בעצמה את הפרויקטים המובחרים, בעיקר באזורי הביקוש בגוש דן.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer service section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-primary/5 via-accent-gold/5 to-primary/5 rounded-3xl p-12 border border-accent-gold/20">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              
              <h2 className="text-4xl font-bold text-primary mb-6">
                שירות אישי ומסור
              </h2>
              
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                אשכול מלווה את דייריה בכל שלב ושלב, בשירות אישי, מקצועי ומסור לכל אחת ואחד מהדיירים שלנו – החל מיזמות הפרויקט, ממשיך לתכנון וביצועו ועד למסירה של מפתחות הדירה החדשה שלכם.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-5 bg-gradient-to-l from-primary to-primary-light text-white rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                בואו נדבר
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
