import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowLeft } from 'lucide-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const ref = useRef(null)
  const navigate = useNavigate()
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const handleProjectsClick = () => {
    navigate('/projects')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            אשכול
          </h1>
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light">
            ייזום ובניה בסטנדרטים גבוהים
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-12 leading-relaxed"
        >
          מתמחים בייזום וביצוע של פרויקטים למגורים תוך שימוש בטכנולוגיה המתקדמת ביותר
        </motion.p>

        {/* CTA Button - Only Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={handleProjectsClick}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-gold text-white px-10 py-5 rounded-lg text-xl font-bold shadow-2xl hover:bg-accent-gold/90 transition-all duration-300 flex items-center gap-3 justify-center group"
          >
            הפרויקטים שלנו
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white text-sm">גלול למטה</span>
            <ChevronDown className="text-white" size={32} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero