import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp, Building2, Heart } from 'lucide-react';

const WhyEshkol = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'סיווג קבלני ג\'5 - בלתי מוגבל',
      description: 'הזרוע הביצועית רשומה בפנקס הקבלנים עם הסיווג הגבוה ביותר למגורים',
      stat: 'ג\'5',
      statLabel: 'סיווג'
    },
    {
      icon: TrendingUp,
      title: 'איתנות פיננסית מוכחת',
      description: 'חברה פרטית וותיקה בעלת חוסן פיננסי, בליווי הבנקים הגדולים בישראל',
      stat: '100%',
      statLabel: 'ליווי בנקאי'
    },
    {
      icon: Building2,
      title: 'בניה ירוקה וחכמה',
      description: 'טכנולוגיה מתקדמה ומודרנית לחיסכון בעלויות ובאנרגיה לטובת הדיירים',
      stat: 'ECO',
      statLabel: 'בניה ירוקה'
    },
    {
      icon: Users,
      title: 'צוות משולב וחזק',
      description: 'משב רוח צעיר ואנרגטי לצד הנהלה ותיקה עם ניסיון של עשרות שנים בתחום',
      stat: '25+',
      statLabel: 'שנות ניסיון'
    },
    {
      icon: Award,
      title: 'מומחיות בהתחדשות עירונית',
      description: 'בעלי ידע ומקצועיות בפרויקטים יזמיים, תמ"א 38 ומתחמי פינוי בינוי',
      stat: '5000+',
      statLabel: 'יחידות דיור'
    },
    {
      icon: Heart,
      title: 'שירות אישי ומסור',
      description: 'ליווי מלא בכל שלב - מיזמות הפרויקט ועד מסירת מפתחות הדירה החדשה',
      stat: '98%',
      statLabel: 'שביעות רצון'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Background decoration - subtle */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1a3a52 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-6 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10">
              היתרונות שלנו
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
            למה אשכול?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            אשכול מתמחה בייזום וביצוע של פרויקטים למגורים בסטנדרטים גבוהים,
            תוך שימוש בטכנולוגיה המתקדמת והמודרנית ביותר
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-accent-gold/30 transition-all duration-300">
                  
                  {/* Icon & stat */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <advantage.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                      </div>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-accent-gold/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Stat badge */}
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-l from-primary to-accent-gold bg-clip-text text-transparent">
                        {advantage.stat}
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-1">
                        {advantage.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-primary via-accent-gold to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-10 border border-accent-gold/20">
            <h3 className="text-3xl font-bold text-primary mb-4">
              בונים באהבה
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              אשכול מלווה את דייריה בכל שלב ושלב, בשירות אישי, מקצועי ומסור
              לכל אחת ואחד מהדיירים שלנו
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-l from-primary to-primary-light text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              בואו נדבר
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEshkol;
