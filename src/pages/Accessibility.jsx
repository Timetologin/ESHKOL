import { motion } from 'framer-motion';
import { Eye, Keyboard, MousePointer, Monitor } from 'lucide-react';

const Accessibility = () => {
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
              הצהרת נגישות
            </h1>
            <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              אנחנו משקיעים את מירב המאמצים על מנת לספק שירות שוויוני, נגיש ומקצועי
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
                  <p className="text-lg leading-relaxed">
                    החברה פועלת ומקדמת את נושא הנגישות על-פי המוגדר בחקיקת הנגישות ורואה בלקוחות עם מוגבלות לקוחות שווי זכויות, הזכאים ליהנות מנגישות מלאה לנכסי ושירותי החברה. החברה תמשיך ותפעל לשיפור נגישות השירות אותו היא מעניקה ללקוחותיה.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">עיצוב נגיש</h3>
                    <p className="text-gray-600 text-sm">
                      האתר עוצב תוך מודעות והתאמה לגולשים עם לקויות ראייה
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Keyboard className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">ניווט במקלדת</h3>
                    <p className="text-gray-600 text-sm">
                      גולשים יכולים לגלוש באתר באמצעות מקלדת בלבד
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <MousePointer className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">תוכן ברור</h3>
                    <p className="text-gray-600 text-sm">
                      תכני האתר נכתבים בצורה פשוטה, ברורה ונהירה
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-6 border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Monitor className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">קורא מסך</h3>
                    <p className="text-gray-600 text-sm">
                      תמיכה מלאה בתוכנות קורא-מסך עם כותרות מוגדרות
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-primary mb-6">תקינה ותקן</h2>
                
                <p>
                  החברה פועלת בהתאם להנחיות הנגישות בתקן הישראלי <strong>5568</strong> - "קווים מנחים לנגישות תכנים באינטרנט" לרמה <strong>AA</strong>. תקן ישראלי זה זהה למסמך הקווים המנחים של הארגון הבינלאומי העוסק ברשת בתקינה - Web Content Accessibility Guidelines (WCAG) 2.0.
                </p>

                <p className="font-semibold text-primary">
                  האתר נתמך על-ידי הדפדפנים הנפוצים, בגרסתם העדכנית ביותר.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">תכונות נגישות באתר</h2>

                <h3 className="text-xl font-bold text-primary mb-3 mt-6">תוכן האתר</h3>
                <p>
                  החברה פועלת לכתיבת תכני האתר בצורה פשוטה, ברורה ונהירה. רוב דפי האתר בנויים בצורה דומה, המאפשרים למשתמשים להתמצא ולנווט בקלות ברחבי האתר.
                </p>

                <h3 className="text-xl font-bold text-primary mb-3 mt-6">עיצוב האתר</h3>
                <p>
                  האתר עוצב תוך מודעות והתאמה לגולשים ולקוחות עם לקויות ראייה וכאלו הרגישים לריצוד של מרכיבים גרפיים.
                </p>

                <h3 className="text-xl font-bold text-primary mb-3 mt-6">מבנה האתר</h3>
                <p>
                  מבנה האתר מושתת על ניווט נוח וברור ותפריטים הבנויים באמצעות רשימות המאפשרים התמצאות קלה, פשוטה ומהירה באתר.
                </p>

                <div className="bg-accent-gold/10 rounded-2xl p-6 border border-accent-gold/30 mt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">הגדלת התצוגה באתר</h3>
                  <p className="mb-3">
                    גולשים המתקשים בראייה המעוניינים להגדיל את התצוגה באתר יכולים לעשות זאת:
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li>לחיצה בו-זמנית על <strong>Shift + F</strong> (שיפט ואף) להגדלת התצוגה ב-10%</li>
                    <li>לחיצה בו-זמנית על <strong>Shift + Z</strong> (שיפט וזד) להקטנת התצוגה</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 mt-6">הפעלת האתר באמצעות מקלדת</h3>
                <p>
                  גולשים המתקשים בהפעלת עכבר יכולים לגלוש באתר באמצעות מקלדת:
                </p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>לחיצה חוזרת ונשנית על מקש <strong>Tab</strong> תעביר בין הקישורים השונים בעמוד</li>
                  <li>לחיצה על <strong>Enter</strong> תפעיל את הקישור המסומן</li>
                </ul>

                <h3 className="text-xl font-bold text-primary mb-3 mt-6">גלישה באמצעות קורא-מסך</h3>
                <p>
                  מידע זה מיועד לגולשים עיוורים או כבדי-ראייה המשתמשים בתוכנת קורא-מסך:
                </p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>כל האזורים בעמודי האתר מוגדרים באמצעות כותרות</li>
                  <li>כותרות ברמה ראשונה (heading level 1) הן הכותרות הראשיות של העמוד</li>
                  <li>הכותרות המשניות הן ברמה שנייה ושלישית</li>
                  <li>תמונות כוללות חלופה טקסטואלית</li>
                  <li>מסמכים וטפסים באתר הונגשו</li>
                </ul>

                <div className="bg-primary/5 rounded-2xl p-6 border-r-4 border-primary mt-8">
                  <h3 className="text-xl font-bold text-primary mb-3">⚠️ הבהרות</h3>
                  <p className="mb-3">
                    חרף מאמצנו לאפשר גלישה באתר נגיש עבור כל דפי האתר, יתכן ויתגלו חלקים באתר שטרם נגישים, או שטרם נמצא הפתרון הטכנולוגי המתאים. אנו ממשיכים במאמצים לשפר את נגישות האתר, ככל האפשר, וזאת על מנת לאפשר שימוש באתר לכלל האוכלוסייה לרבות אנשים עם מוגבלויות.
                  </p>
                  <p>
                    האתר נבדק והותאם לגלישה ממגוון רחב של מכשירים ודפדפנים. עם זאת, בשל ההתקדמות הטכנולוגית ושפע המכשירים הקיימים בשוק, יתכן בחלק מהמסכים ו/או חלק מהדפדפנים יתגלו אי התאמות מסוימות.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">פניות והצעות לשיפור</h2>
                
                <p>
                  החברה תשמח לקבל פניות לקבלת מידע ו/או הצעות לשיפור על מנת לשפר את השירות ללקוח. לפניות ומידע בנושא נגישות ניתן ליצור קשר עם רכז/ת הנגישות של החברה.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4 mt-8">ממונה נגישות</h2>
                
                <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl p-8 border border-gray-200 mt-4">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">טלי אלבז</h3>
                    <p className="text-gray-600">ממונה נגישות</p>
                  </div>

                  <ul className="list-none space-y-3">
                    <li className="flex items-center gap-3 justify-center">
                      <span className="text-2xl">📧</span>
                      <a href="mailto:tali@eshkol.co.il" className="text-accent-gold hover:underline text-lg">
                        tali@eshkol.co.il
                      </a>
                    </li>
                    <li className="flex items-center gap-3 justify-center">
                      <span className="text-2xl">📞</span>
                      <a href="tel:0528445566" className="text-accent-gold hover:underline text-lg">
                        052-8445566
                      </a>
                    </li>
                    <li className="flex items-center gap-3 justify-center">
                      <span className="text-2xl">📍</span>
                      <span className="text-gray-700">פי גלילות, ישראל</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500">
                    הצהרה זו עודכנה לאחרונה: <strong>ינואר 2025</strong>
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

export default Accessibility;
