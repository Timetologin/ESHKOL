import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { title: 'אודות', path: '/about' },
      { title: 'פרויקטים', path: '/projects' },
      { title: 'צור קשר', path: '/contact' },
    ],
    legal: [
      { title: 'תנאי שימוש', path: '/terms' },
      { title: 'מדיניות פרטיות', path: '/privacy' },
      { title: 'הצהרת נגישות', path: '/accessibility' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* לוגו תמונה */}
            <div className="mb-6">
              <img 
                src="/eshkol-logo.png" 
                alt="לוגו אשכול - בונים באהבה" 
                className="h-[70px] w-auto mb-4"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              חברה מובילה בתחום ייזום ובניה של פרויקטים למגורים בסטנדרטים גבוהים
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 p-3 rounded-lg hover:bg-accent-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">החברה</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-accent-gold transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">מידע משפטי</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-accent-gold transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">צור קשר</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 text-accent-gold flex-shrink-0" size={20} />
                <div>
                  <a href="tel:052-7847101" className="hover:text-accent-gold transition-colors block">
                    052-7847101
                  </a>
                  <a href="tel:050-7107119" className="hover:text-accent-gold transition-colors block">
                    050-7107119
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 text-accent-gold flex-shrink-0" size={20} />
                <div>
                  <a href="mailto:office@eshkol.co.il" className="hover:text-accent-gold transition-colors">
                    office@eshkol.co.il
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-accent-gold flex-shrink-0" size={20} />
                <div className="text-gray-300">
                  פי גלילות, ישראל
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} אשכול. כל הזכויות שמורות.
            </p>
            <p className="text-gray-400 text-sm">
              עיצוב ופיתוח: אשכול דיגיטל
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer