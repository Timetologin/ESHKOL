import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, AlertCircle, Upload, X } from 'lucide-react'

const CustomerServiceForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectName: '',
    apartmentDate: '',
    address: '',
    floor: '',
    apartmentNumber: '',
    phoneForContact: ''
  })
  
  // State נפרד לליקויים
  const [defects, setDefects] = useState({
    defect1: null,
    defect2: null,
    defect3: null
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

  // פונקציה לטיפול בבחירת ליקויי
  const handleDefectSelect = (defectKey, value) => {
    if (value === '') {
      setDefects(prev => ({ ...prev, [defectKey]: null }))
    } else {
      setDefects(prev => ({
        ...prev,
        [defectKey]: {
          customer: '',
          description: '',
          location: '',
          files: []
        }
      }))
    }
  }

  // פונקציה לעדכון שדות בליקויי
  const updateDefectField = (defectKey, field, value) => {
    setDefects(prev => ({
      ...prev,
      [defectKey]: {
        ...prev[defectKey],
        [field]: value
      }
    }))
  }

  // פונקציה להעלאת קבצים
  const handleFileUpload = (defectKey, e) => {
    const files = Array.from(e.target.files)
    setDefects(prev => ({
      ...prev,
      [defectKey]: {
        ...prev[defectKey],
        files: [...prev[defectKey].files, ...files]
      }
    }))
  }

  // פונקציה למחיקת קובץ
  const removeFile = (defectKey, fileIndex) => {
    setDefects(prev => ({
      ...prev,
      [defectKey]: {
        ...prev[defectKey],
        files: prev[defectKey].files.filter((_, i) => i !== fileIndex)
      }
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'נא להזין שם הדייר'
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין דואר אלקטרוני'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'דואר אלקטרוני לא תקין'
    }
    if (!formData.projectName.trim()) newErrors.projectName = 'נא להזין שם הפרויקט'
    if (!formData.apartmentDate.trim()) newErrors.apartmentDate = 'נא לבחור תאריך איכלוס'
    
    // ולידציה לליקויים שנפתחו
    Object.keys(defects).forEach(key => {
      const defect = defects[key]
      if (defect) {
        if (!defect.customer) {
          newErrors[`${key}_customer`] = 'נא לבחור לקוח'
        }
        if (!defect.description.trim()) {
          newErrors[`${key}_description`] = 'נא להזין תיאור הליקויי'
        }
      }
    })
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length === 0) {
      const submitData = new FormData()
      
      // הוספת השדות הבסיסיים
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key])
      })
      
      // הוספת הליקויים
      Object.keys(defects).forEach(key => {
        if (defects[key]) {
          submitData.append(`${key}_customer`, defects[key].customer)
          submitData.append(`${key}_description`, defects[key].description)
          submitData.append(`${key}_location`, defects[key].location)
          
          defects[key].files.forEach((file, index) => {
            submitData.append(`${key}_file_${index}`, file)
          })
        }
      })
      
      console.log('Form submitted:', { formData, defects })
      setIsSubmitted(true)
      
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
          phoneForContact: ''
        })
        setDefects({
          defect1: null,
          defect2: null,
          defect3: null
        })
      }, 3000)
    } else {
      setErrors(newErrors)
      // גלילה לשגיאה הראשונה
      const firstError = document.querySelector('.border-red-500')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  // אופציות ללקוחות
  const customerOptions = [
    { value: '', label: 'בחר לקוח' },
    { value: 'customer1', label: 'לקוח 1' },
    { value: 'customer2', label: 'לקוח 2' },
    { value: 'customer3', label: 'לקוח 3' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
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

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif" 
                alt="אשכול לוגו"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              שירות לקוחות
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* שם הדייר */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  *שם הדייר
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } focus:border-primary focus:outline-none transition-colors text-right`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.fullName}</p>
                )}
              </div>

              {/* דואר אלקטרוני */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  דואר אלקטרוני
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:border-primary focus:outline-none transition-colors text-right`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>
                )}
              </div>

              {/* שם הפרויקט */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  *שם הפרויקט
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.projectName ? 'border-red-500' : 'border-gray-300'
                  } focus:border-primary focus:outline-none transition-colors text-right`}
                />
                {errors.projectName && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.projectName}</p>
                )}
              </div>

              {/* תאריך איכלוס */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  *תאריך איכלוס
                </label>
                <input
                  type="date"
                  name="apartmentDate"
                  value={formData.apartmentDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.apartmentDate ? 'border-red-500' : 'border-gray-300'
                  } focus:border-primary focus:outline-none transition-colors text-right`}
                />
                {errors.apartmentDate && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.apartmentDate}</p>
                )}
              </div>

              {/* כתובת */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  *כתובת
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right"
                />
              </div>

              {/* קומה */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  *קומה
                </label>
                <input
                  type="text"
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right"
                />
              </div>

              {/* מס' דירה */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  *מס' דירה
                </label>
                <input
                  type="text"
                  name="apartmentNumber"
                  value={formData.apartmentNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right"
                />
              </div>

              {/* טלפון ליצירת קשר */}
              <div>
                <label className="block text-right text-base font-medium text-gray-700 mb-2">
                  *טלפון לתיאום 
                </label>
                <input
                  type="tel"
                  name="phoneForContact"
                  value={formData.phoneForContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* פרטי הליקויי */}
              <div>
                <h2 className="text-2xl font-bold text-primary text-right mb-6">
                  פרטי הליקויי
                </h2>

                <div className="space-y-6">
                  {/* ליקויי 1 */}
                  <div>
                    <label className="block text-right text-base font-medium text-gray-700 mb-2">
                      ליקויי 1
                    </label>
                    <select
                      onChange={(e) => handleDefectSelect('defect1', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right bg-white appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "left 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                    >
                      <option value="">בחר אופציה</option>
                      <option value="add">הוספת ליקויי 1</option>
                    </select>

                    <AnimatePresence>
                      {defects.defect1 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          {/* Textarea - תיאור הליקויי */}
                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              תיאור הליקויי:*
                            </label>
                            <textarea
                              value={defects.defect1.description}
                              onChange={(e) => updateDefectField('defect1', 'description', e.target.value)}
                              rows={6}
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.defect1_description ? 'border-red-500' : 'border-gray-300'
                              } focus:border-primary focus:outline-none transition-colors text-right resize-none`}
                            />
                            {errors.defect1_description && (
                              <p className="text-red-500 text-sm mt-1 text-right">{errors.defect1_description}</p>
                            )}
                          </div>

                          {/* Input - איזור בדירה */}
                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              איזור בדירה*
                            </label>
                            <input
                              type="text"
                              value={defects.defect1.location}
                              onChange={(e) => updateDefectField('defect1', 'location', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right"
                            />
                          </div>

                          {/* File Upload - תמונות */}
                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              תמונות
                            </label>
                            <input
                              type="file"
                              multiple
                              accept="image/*,.pdf"
                              onChange={(e) => handleFileUpload('defect1', e)}
                              className="w-full text-right"
                            />

                            {/* תצוגת קבצים */}
                            {defects.defect1.files.length > 0 && (
                              <div className="mt-3 space-y-2">
                                {defects.defect1.files.map((file, idx) => (
                                  <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <button
                                      type="button"
                                      onClick={() => removeFile('defect1', idx)}
                                      className="text-red-500 hover:text-red-700"
                                    >
                                      <X size={18} />
                                    </button>
                                    <span className="text-sm text-gray-700">{file.name}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* ליקויי 2 */}
                  <div>
                    <label className="block text-right text-base font-medium text-gray-700 mb-2">
                      ליקויי 2
                    </label>
                    <select
                      onChange={(e) => handleDefectSelect('defect2', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right bg-white appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "left 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                    >
                      <option value="">בחר אופציה</option>
                      <option value="add">הוספת ליקויי 2</option>
                    </select>

                    <AnimatePresence>
                      {defects.defect2 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              תיאור הליקויי:*
                            </label>
                            <textarea
                              value={defects.defect2.description}
                              onChange={(e) => updateDefectField('defect2', 'description', e.target.value)}
                              rows={6}
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.defect2_description ? 'border-red-500' : 'border-gray-300'
                              } focus:border-primary focus:outline-none transition-colors text-right resize-none`}
                            />
                          </div>

                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              איזור בדירה*
                            </label>
                            <input
                              type="text"
                              value={defects.defect2.location}
                              onChange={(e) => updateDefectField('defect2', 'location', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right"
                            />
                          </div>

                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              תמונות
                            </label>
                            <input
                              type="file"
                              multiple
                              accept="image/*,.pdf"
                              onChange={(e) => handleFileUpload('defect2', e)}
                              className="w-full text-right"
                            />

                            {defects.defect2.files.length > 0 && (
                              <div className="mt-3 space-y-2">
                                {defects.defect2.files.map((file, idx) => (
                                  <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <button
                                      type="button"
                                      onClick={() => removeFile('defect2', idx)}
                                      className="text-red-500 hover:text-red-700"
                                    >
                                      <X size={18} />
                                    </button>
                                    <span className="text-sm text-gray-700">{file.name}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* ליקוי 3 */}
                  <div>
                    <label className="block text-right text-base font-medium text-gray-700 mb-2">
                      ליקוי 3
                    </label>
                    <select
                      onChange={(e) => handleDefectSelect('defect3', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right bg-white appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "left 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em" }}
                    >
                      <option value="">בחר אופציה</option>
                      <option value="add">הוספת ליקוי 3</option>
                    </select>

                    <AnimatePresence>
                      {defects.defect3 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              תיאור הליקוי:*
                            </label>
                            <textarea
                              value={defects.defect3.description}
                              onChange={(e) => updateDefectField('defect3', 'description', e.target.value)}
                              rows={6}
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.defect3_description ? 'border-red-500' : 'border-gray-300'
                              } focus:border-primary focus:outline-none transition-colors text-right resize-none`}
                            />
                          </div>

                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              איזור בדירה*
                            </label>
                            <input
                              type="text"
                              value={defects.defect3.location}
                              onChange={(e) => updateDefectField('defect3', 'location', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none transition-colors text-right"
                            />
                          </div>

                          <div>
                            <label className="block text-right text-base font-medium text-gray-700 mb-2">
                              תמונות
                            </label>
                            <input
                              type="file"
                              multiple
                              accept="image/*,.pdf"
                              onChange={(e) => handleFileUpload('defect3', e)}
                              className="w-full text-right"
                            />

                            {defects.defect3.files.length > 0 && (
                              <div className="mt-3 space-y-2">
                                {defects.defect3.files.map((file, idx) => (
                                  <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <button
                                      type="button"
                                      onClick={() => removeFile('defect3', idx)}
                                      className="text-red-500 hover:text-red-700"
                                    >
                                      <X size={18} />
                                    </button>
                                    <span className="text-sm text-gray-700">{file.name}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-primary hover:bg-primary-light text-white text-xl font-bold py-4 px-8 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? 'נשלח בהצלחה!' : 'שלח'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CustomerServiceForm