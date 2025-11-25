import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              תנאי שימוש
            </h1>
            <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              תנאי השימוש באתר אשכול
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-gray-100"
            >
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                
                <h2 className="text-3xl font-bold text-primary mb-6">כללי</h2>
                <p>
                  השימוש באתר זה כפוף לתנאים המפורטים להלן. הכניסה לאתר ו/או השימוש בו מהווים הסכמה מצידך לתנאים אלה.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">שימוש באתר</h2>
                <p>
                  האתר מיועד לשימוש אישי ופרטי בלבד. אין לעשות שימוש מסחרי בתכנים המופיעים באתר ללא אישור מפורש בכתב מאשכול.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">זכויות יוצרים</h2>
                <p>
                  כל התכנים באתר, לרבות טקסטים, תמונות, גרפיקה ועיצוב, הינם רכושה הבלעדי של אשכול ומוגנים על פי חוקי זכויות היוצרים.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">אחריות</h2>
                <p>
                  המידע באתר מוצג כפי שהוא. אשכול אינה אחראית לכל נזק ישיר או עקיף הנובע משימוש באתר או מהסתמכות על המידע בו.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">שינויים</h2>
                <p>
                  אשכול שומרת לעצמה את הזכות לשנות את תנאי השימוש מעת לעת ללא הודעה מוקדמת.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">יצירת קשר</h2>
                <p>
                  לשאלות בנוגע לתנאי השימוש, ניתן ליצור קשר בכתובת: office@eshkol.co.il
                </p>

                <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
                  <p>עדכון אחרון: ינואר 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
