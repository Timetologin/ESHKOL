import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'נא להזין שם'
    if (!formData.phone.trim()) newErrors.phone = 'נא להזין טלפון'
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין אימייל'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        })
      }, 3000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
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
              נשמח לעמוד לשירותך
            </h1>
            <p className="text-2xl text-white/90">
              אשכול בונים באהבה את הבית שלך
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* מחלקת מכירות */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">מחלקת מכירות</h3>
                      <a 
                        href="tel:052-7847101" 
                        className="text-2xl font-bold text-accent-gold hover:text-primary transition-colors"
                      >
                        052-7847101
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* מחלקת שירות לקוחות */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-xl">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">מחלקת שירות לקוחות</h3>
                      <a 
                        href="tel:050-7107119" 
                        className="text-2xl font-bold text-accent-gold hover:text-primary transition-colors"
                      >
                        050-7107119
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* טלפון נוסף */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">טלפון</h3>
                      <a 
                        href="tel:052-8445566" 
                        className="text-2xl font-bold text-accent-gold hover:text-primary transition-colors"
                      >
                        052-8445566
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* אימייל */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-red-400 to-pink-600 p-3 rounded-xl">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">אימייל</h3>
                      <a 
                        href="mailto:office@eshkol.co.il" 
                        className="text-xl font-bold text-accent-gold hover:text-primary transition-colors"
                      >
                        office@eshkol.co.il
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* כתובת */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-teal-400 to-cyan-600 p-3 rounded-xl">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">פי גלילות</h3>
                      <p className="text-gray-700">גלילות, ישראל</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.8825199999997!2d34.84815!3d32.08825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzE3LjciTiAzNMKwNTAnNTMuMyJF!5e0!3m2!1sen!2sil!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="מיקום משרדי אשכול - פי גלילות"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 sticky top-24">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                  השאירו פרטים ונחזור אליכם
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* שם */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="נושא הפנייה*"
                      className={`w-full px-6 py-4 rounded-xl border-2 transition-colors text-right ${
                        errors.name ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                      } focus:outline-none`}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 text-right"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* שם מלא */}
                  <div>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="שם מלא*"
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right"
                    />
                  </div>

                  {/* אימייל */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="אימייל*"
                      className={`w-full px-6 py-4 rounded-xl border-2 transition-colors text-right ${
                        errors.email ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                      } focus:outline-none`}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 text-right"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* טלפון */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="טלפון*"
                      className={`w-full px-6 py-4 rounded-xl border-2 transition-colors text-right ${
                        errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                      } focus:outline-none`}
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 text-right"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>

                  {/* הודעה */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="תוכן הפנייה"
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                    className={`w-full py-5 rounded-xl font-bold text-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'bg-primary text-white hover:bg-primary-light'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={24} />
                        ההודעה נשלחה בהצלחה!
                      </>
                    ) : (
                      <>
                        שלח
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact