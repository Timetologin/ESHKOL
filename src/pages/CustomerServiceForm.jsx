import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import EshkolButton from '../components/EshkolButton'

const CustomerServiceForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectName: '',
    apartmentDate: '',
    address: '',
    floor: '',
    apartmentNumber: '',
    phoneForContact: '',
    customer1: '',
    customer2: '',
    customer3: ''
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
    if (!formData.fullName.trim()) newErrors.fullName = 'נא להזין שם מלא'
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין דואר אלקטרוני'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'דואר אלקטרוני לא תקין'
    }
    if (!formData.projectName.trim()) newErrors.projectName = 'נא להזין שם הפרויקט'
    if (!formData.apartmentDate.trim()) newErrors.apartmentDate = 'נא לבחור תאריך אירוע'
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      
      // כאן תוסיף את הלוגיקה לשליחת הטופס לשרת
      // לדוגמה: API call, EmailJS, וכו'
      
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: '',
          email: '',
          projectName: '',
          apartmentDate: '',
          address: '',
          floor: '',
          apartmentNumber: '',
          phoneForContact: '',
          customer1: '',
          customer2: '',
          customer3: ''
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
            {/* לוגו מונפש */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="mb-6 flex justify-center"
            >
              <img 
                src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif" 
                alt="אשכול לוגו"
                className="w-24 h-24 object-contain"
              />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              שירות לקוחות
            </h1>
            <p className="text-2xl text-white/90">
              אנחנו כאן בשבילכם - מלאו את הטופס ונחזור אליכם בהקדם
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 bg-green-50 border-2 border-green-500 rounded-2xl p-6 flex items-center gap-4"
                >
                  <CheckCircle className="text-green-500" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-green-700 mb-1">הטופס נשלח בהצלחה!</h3>
                    <p className="text-green-600">נחזור אליכם בהקדם האפשרי</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* שם מלא */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    שם מלא <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-xl border-2 transition-colors text-right ${
                      errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                    } focus:outline-none`}
                  />
                  {errors.fullName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 text-right flex items-center gap-2 justify-end"
                    >
                      <AlertCircle size={16} />
                      {errors.fullName}
                    </motion.p>
                  )}
                </div>

                {/* דואר אלקטרוני */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    דואר אלקטרוני <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-xl border-2 transition-colors text-right ${
                      errors.email ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                    } focus:outline-none`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 text-right flex items-center gap-2 justify-end"
                    >
                      <AlertCircle size={16} />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* שם הפרויקט */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    שם הפרויקט <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-xl border-2 transition-colors text-right ${
                      errors.projectName ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                    } focus:outline-none`}
                  />
                  {errors.projectName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 text-right flex items-center gap-2 justify-end"
                    >
                      <AlertCircle size={16} />
                      {errors.projectName}
                    </motion.p>
                  )}
                </div>

                {/* תאריך אירוע */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    תאריך אירוע <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="apartmentDate"
                    value={formData.apartmentDate}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 rounded-xl border-2 transition-colors text-right ${
                      errors.apartmentDate ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                    } focus:outline-none`}
                  />
                  {errors.apartmentDate && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 text-right flex items-center gap-2 justify-end"
                    >
                      <AlertCircle size={16} />
                      {errors.apartmentDate}
                    </motion.p>
                  )}
                </div>

                {/* כתובת */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    כתובת
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right"
                  />
                </div>

                {/* קומה */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    קומה
                  </label>
                  <input
                    type="text"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right"
                  />
                </div>

                {/* מספר דירה */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    מספר דירה
                  </label>
                  <input
                    type="text"
                    name="apartmentNumber"
                    value={formData.apartmentNumber}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right"
                  />
                </div>

                {/* טלפון ליצירת קשר */}
                <div>
                  <label className="block text-right text-lg font-semibold text-primary mb-2">
                    טלפון ליצירת קשר
                  </label>
                  <input
                    type="tel"
                    name="phoneForContact"
                    value={formData.phoneForContact}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right"
                  />
                </div>

                {/* פרטי הלקוח */}
                <div className="pt-6 border-t-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-right">
                    פרטי הלקוח
                  </h3>

                  {/* לקוח 1 */}
                  <div className="mb-6">
                    <label className="block text-right text-lg font-semibold text-primary mb-2">
                      לקוח 1
                    </label>
                    <select
                      name="customer1"
                      value={formData.customer1}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right bg-white"
                    >
                      <option value="">בחר אפשרות</option>
                      <option value="option1">אפשרות 1</option>
                      <option value="option2">אפשרות 2</option>
                      <option value="option3">אפשרות 3</option>
                    </select>
                  </div>

                  {/* לקוח 2 */}
                  <div className="mb-6">
                    <label className="block text-right text-lg font-semibold text-primary mb-2">
                      לקוח 2
                    </label>
                    <select
                      name="customer2"
                      value={formData.customer2}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right bg-white"
                    >
                      <option value="">בחר אפשרות</option>
                      <option value="option1">אפשרות 1</option>
                      <option value="option2">אפשרות 2</option>
                      <option value="option3">אפשרות 3</option>
                    </select>
                  </div>

                  {/* לקוח 3 */}
                  <div>
                    <label className="block text-right text-lg font-semibold text-primary mb-2">
                      לקוח 3
                    </label>
                    <select
                      name="customer3"
                      value={formData.customer3}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-right bg-white"
                    >
                      <option value="">בחר אפשרות</option>
                      <option value="option1">אפשרות 1</option>
                      <option value="option2">אפשרות 2</option>
                      <option value="option3">אפשרות 3</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <EshkolButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? 'נשלח בהצלחה!' : 'שלח'}
                  </EshkolButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerServiceForm