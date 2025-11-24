// EshkolButton.jsx - קומפוננטת כפתור אחידה לכל האתר עם לוגו אשכול מונפש
import { motion } from 'framer-motion'

/**
 * קומפוננטת כפתור אחידה לכל האתר עם לוגו אשכול מונפש
 * 
 * @param {ReactNode} children - תוכן הכפתור
 * @param {Function} onClick - פונקציה שתתבצע בלחיצה
 * @param {string} variant - סוג הכפתור: 'primary' | 'secondary' | 'outline' | 'white'
 * @param {boolean} showGif - האם להציג את הלוגו המונפש (ברירת מחדל: true)
 * @param {string} className - classes נוספים
 * @param {string} size - גודל הכפתור: 'sm' | 'md' | 'lg' (ברירת מחדל: 'lg')
 */
const EshkolButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  showGif = true,
  className = '',
  size = 'lg',
  disabled = false,
  ...props 
}) => {
  // סוגי כפתורים שונים
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-2xl',
    secondary: 'bg-accent-gold text-white hover:bg-accent-gold/90 hover:shadow-2xl',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-gray-50 hover:shadow-2xl'
  }

  // גדלים שונים
  const sizes = {
    sm: 'px-6 py-3 text-base',
    md: 'px-10 py-4 text-lg',
    lg: 'px-12 py-5 text-xl'
  }

  // גודל הלוגו לפי גודל הכפתור
  const gifSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-8 h-8'
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-xl font-bold 
        shadow-xl transition-all duration-300 
        inline-flex items-center gap-3 justify-center
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {showGif && (
        <motion.img 
          src="https://eshkol.co.il/wp-content/themes/nastunish/images/logo-gif.gif" 
          alt="אשכול לוגו"
          className={`${gifSizes[size]} object-contain`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        />
      )}
      {children}
    </motion.button>
  )
}

export default EshkolButton
