import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full transform rotate-180">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* חברה - עם לוגו */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img 
                src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif"
                alt="אשכול"
                className="w-16 h-16 object-contain mb-4"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              חברה מובילה בתחום הייזום והבניה של פרויקטים למגורים בסטנדרטים גבוהים
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/eshkol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent-gold transition-all duration-300 flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/eshkol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent-gold transition-all duration-300 flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/eshkol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent-gold transition-all duration-300 flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* מידע משפטי */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">מידע משפטי</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/terms" 
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300"
                >
                  תנאי שימוש
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300"
                >
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link 
                  to="/accessibility" 
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300"
                >
                  הצהרת נגישות
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* צור קשר */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">צור קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="tel:0528445566" 
                    className="text-white/80 hover:text-accent-gold transition-colors duration-300 block"
                  >
                    052-8445566
                  </a>
                  <a 
                    href="tel:0527847101" 
                    className="text-white/80 hover:text-accent-gold transition-colors duration-300 block"
                  >
                    052-7847101
                  </a>
                  <a 
                    href="tel:0507107119" 
                    className="text-white/80 hover:text-accent-gold transition-colors duration-300 block"
                  >
                    050-7107119
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <a 
                  href="mailto:office@eshkol.co.il"
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300"
                >
                  office@eshkol.co.il
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  פי גלילות, ישראל
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © 2025 Josh Ggman. כל הזכויות שמורות.
            </div>
            <div className="flex gap-2">
              <span>עיצוב ופיתוח:</span>
              <a 
                href="https://joshggman.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gold hover:text-accent-gold/80 transition-colors duration-300"
              >
                Josh Ggman
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
