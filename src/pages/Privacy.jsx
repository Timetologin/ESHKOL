import { motion } from 'framer-motion';

const Privacy = () => {
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
              מדיניות פרטיות
            </h1>
            <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              אשכול מכבדת את פרטיות המשתמשים ומחויבת להגן על המידע האישי
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
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                
                <div className="bg-primary/5 rounded-2xl p-6 border-r-4 border-primary">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>הערה:</strong> מתחת לגיל 18? אינך רשאי לעשות שימוש בשירותים המוצעים באתר. מומלץ להיוועץ במבוגר.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-primary mb-6">1. כללי</h2>
                
                <p>
                  אשכול ("החברה") מכבדת את פרטיותם של המשתמשים ושל לקוחותיה וכלל המשתמשים בשירותים המוצעים והניתנים על-ידה ("המשתמש/ים") באתר האינטרנט. החברה רואה חשיבות רבה בשמירה על פרטיות המשתמשים, ומחויבת להגן על המידע האישי שהם משתפים עם החברה, ולשם כך פועלת לפי הוראות מדינית הפרטיות שלהלן והוראות הדין החל.
                </p>

                <p>
                  החברה מאמינה כי יש למשתמשים את הזכות המלאה להכיר את המדיניות ואת הנהלים של החברה בנוגע לאיסוף ושימוש במידע המתקבל מהם ונאסף עליהם אגב השימוש באתר. מטרת מדיניות הפרטיות הינה, בין היתר, להסביר את נוהלי החברה ביחס לפרטיות המשתמשים וכיצד החברה עושה שימוש במידע אישי הנמסר לה מהמשתמשים או הנאסף על-ידיה כחלק מהביקורים והשימושים שלהם באתר.
                </p>

                <p className="font-semibold text-primary">
                  הכניסה או השימוש באתר מהווים הסכמה להוראות מדיניות פרטיות זו. ככל שהמשתמש אינו מסכים לתנאים אלה, עליו להימנע באופן מידי מהמשך כניסה ושימוש באתר.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">2. איזה מידע אנו אוספים?</h2>
                
                <p>החברה אוספת, מקבלת ושומרת את סוגי המידע הבאים:</p>

                <h3 className="text-xl font-bold text-primary mb-3 mt-6">מידע טכני</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>מידע אודות התנהגות המשתמשים</strong> – דפוסי פעילות באתר, שעות הגלישה, נתיב הגלישה, ביקורים בדפים</li>
                  <li><strong>מידע אודות מכשירי המשתמשים</strong> – כתובת IP, מזהה מכשיר, סוג דפדפן ומידע אודות מיקום גיאוגראפי</li>
                </ul>

                <h3 className="text-xl font-bold text-primary mb-3 mt-6">מידע אישי</h3>
                <p>חלק מהשירותים טעונים הרישום ומסירת מידע אישי, הכולל:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>שם מלא, פרטי קשר, כתובת מגורים</li>
                  <li>מספר ת.ז., גיל, תאריך לידה, מגדר</li>
                  <li>נתונים על אמצעי תשלום</li>
                  <li>מידע בקשר עם פרויקטים ונכסים</li>
                  <li>תקשורת עם נציגי החברה</li>
                </ul>

                <div className="bg-accent-gold/10 rounded-2xl p-6 border border-accent-gold/30 mt-6">
                  <p className="font-semibold text-primary mb-2">⚠️ חשוב לדעת:</p>
                  <p className="text-sm">
                    ככל שמשתמש שיתף עם החברה מידע אישי אודות צדדים שלישיים, על המשתמש ליידע את אותם גורמים על כך בטרם המידע יימסר, ולקבל את הסכמתם.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">3. איך נשתמש במידע?</h2>
                
                <p>החברה משתמשת במידע למטרות הבאות:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>לנהל ולתפעל את האתר והשירותים</li>
                  <li>לספק שירות לקוחות ותמיכה טכנית</li>
                  <li>להתאים, לפתח ולשפר את האתר והשירותים</li>
                  <li>להשיב לשאלות ופניות</li>
                  <li>לצורך משלוח הודעות תפעוליות והתראות</li>
                  <li>לצורך משלוח תכנים שיווקיים (בכפוף להסכמה)</li>
                  <li>לצרכים סטטיסטיים, אנליטיים ומחקריים</li>
                  <li>לעמוד בדרישות חוק</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">4. האם מועבר מידע לצדדים שלישיים?</h2>
                
                <p>
                  המידע האישי לא יימסר לצדדים שלישיים ללא הסכמה, אלא במקרים הבאים:
                </p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>בקבלת הסכמה מהמשתמשים</li>
                  <li>לספקי שירות המסייעים בהפעלת האתר</li>
                  <li>בשיתופי פעולה עם שותפים עסקיים (בהודעה מפורשת)</li>
                  <li>על מנת לעמוד בדרישות חוק</li>
                  <li>על מנת לגלות ולמנוע תרמית, הונאה או שימוש לרעה</li>
                  <li>במקרה של מכירה או מיזוג של החברה</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">5. עוגיות (Cookies)</h2>
                
                <p>
                  האתר עושה שימוש בעוגיות (Cookies) לשיפור החוויה ולמטרות סטטיסטיות. העוגיות מאפשרות לאסוף מידע על פעילות באתר, דפוסי גלישה והתנהגות המשתמשים.
                </p>

                <p className="mt-4">
                  השירותים הבאים משמשים באתר:
                </p>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>Google Analytics</strong> – ניתוח תנועה באתר</li>
                  <li><strong>Facebook Pixel</strong> – פרסום מותאם</li>
                  <li><strong>Google Ads</strong> – קמפיינים פרסומיים</li>
                </ul>

                <p className="mt-4">
                  ניתן לחסום עוגיות דרך הגדרות הדפדפן, אך פעולה זו עלולה להשפיע על תפקוד האתר.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">6. דיוור שיווקי</h2>
                
                <p>
                  ככל שהמשתמשים הסכימו לקבל דיוור שיווקי, החברה תשלח עדכונים, הצעות, הטבות ומבצעים באמצעות דוא"ל, SMS והתראות. ניתן לבטל את ההסכמה בכל עת באמצעות:
                </p>
                <ul className="list-none pr-0 space-y-2 mt-4">
                  <li>📧 אימייל: <a href="mailto:privacy@eshkol.co.il" className="text-accent-gold hover:underline">privacy@eshkol.co.il</a></li>
                  <li>📞 טלפון: <a href="tel:0528445566" className="text-accent-gold hover:underline">052-8445566</a></li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">7. שימוש על-ידי ילדים</h2>
                
                <p className="font-semibold text-primary">
                  על מנת לעשות שימוש באתר, על המשתמשים להיות מעל גיל 18.
                </p>
                <p className="mt-2">
                  החברה שומרת על זכותה לבקש הוכחת גיל בכל שלב. אם הנך הורה לילד מתחת לגיל זה והנך סבור שילדך מסר פרטים אישיים, ניתן ליצור קשר לבקש מחיקת המידע.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">8. זכויות משתמשים</h2>
                
                <p>למשתמשים יש את הזכויות הבאות:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>לעיין במידע אישי המוחזק עליהם</li>
                  <li>לבקש תיקון מידע שאינו נכון או מעודכן</li>
                  <li>לבקש מחיקת מידע</li>
                  <li>להסיר עצמם מרשימות תפוצה</li>
                </ul>

                <p className="mt-4">
                  למימוש הזכויות, ניתן ליצור קשר:
                </p>
                <ul className="list-none pr-0 space-y-2 mt-4">
                  <li>📧 <a href="mailto:privacy@eshkol.co.il" className="text-accent-gold hover:underline">privacy@eshkol.co.il</a></li>
                  <li>📞 <a href="tel:0528445566" className="text-accent-gold hover:underline">052-8445566</a></li>
                  <li>📍 פי גלילות, ישראל</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">9. אבטחת מידע</h2>
                
                <p>
                  באתר הושקעו מאמצים סבירים לשמירה על אבטחת המידע, באמצעות מנגנונים ומערכות טכנולוגיות. ואולם, לא ניתן להתחייב כי האתר יהיה חסין באופן מוחלט מפני פריצות או דליפות מידע.
                </p>

                <div className="bg-primary/5 rounded-2xl p-6 border-r-4 border-primary mt-6">
                  <p className="font-semibold text-primary mb-2">🔒 אבטחה:</p>
                  <p className="text-sm">
                    המשתמשים מודעים לכך שקיים סיכון מסוים בעת העברת מידע ברשת האינטרנט, והם מסכימים למסירת המידע ונוטלים על עצמם את הסיכון.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">10. שינויים במדיניות</h2>
                
                <p>
                  הוראות מדיניות פרטיות זו עשויות להשתנות מעת לעת. ככל שיבוצעו שינויים מהותיים, תפורסם הודעה באתר. השימוש באתר לאחר ביצוע השינויים יעיד על הסכמה להם.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">11. יצירת קשר</h2>
                
                <p>לשאלות בנוגע למדיניות הפרטיות:</p>
                <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-6 border border-gray-200 mt-4">
                  <ul className="list-none space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📧</span>
                      <a href="mailto:privacy@eshkol.co.il" className="text-accent-gold hover:underline text-lg">
                        privacy@eshkol.co.il
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📞</span>
                      <a href="tel:0528445566" className="text-accent-gold hover:underline text-lg">
                        052-8445566
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📍</span>
                      <span className="text-gray-700">פי גלילות, ישראל</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500">
                    מועד עדכון אחרון: <strong>ינואר 2025</strong>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    © 2025 Josh Ggman. כל הזכויות שמורות.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
