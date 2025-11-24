// ProjectsMap.jsx - מפת פרויקטים עם כפתור לצור קשר
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Home, Calendar, ArrowLeft } from 'lucide-react'
import EshkolButton from './EshkolButton'

const ProjectsMap = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')

  // פרויקטים מובחרים לתצוגה בדף הבית
  const projects = [
    {
      id: 1,
      title: "הדר יוסף",
      location: "תל אביב",
      units: 72,
      status: "בשיווק",
      completion: "2025",
      image: "https://eshkol.co.il/wp-content/uploads/2021/11/1977_apt_13_002f-scaled.jpg",
      description: "קומפלקס של 3 בניינים בני 8 קומות בשכונת הדר יוסף המתחדשת"
    },
    {
      id: 2,
      title: "הכינור על הפארק",
      location: "הרצליה",
      units: null,
      status: "בשיווק",
      completion: "2025",
      image: "https://eshkol.co.il/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-14.19.17-2.jpeg",
      description: "פרויקט יוקרה בקו הראשון לפארק גליל ים"
    },
    {
      id: 3,
      title: "עמינדב",
      location: "תל אביב",
      units: null,
      status: "בשיווק",
      completion: "2026",
      image: "https://eshkol.co.il/wp-content/uploads/2024/11/3.jpg",
      description: "מתחם מגורים חדש ליד פארק שדרות ההשכלה"
    },
    {
      id: 4,
      title: "גליל ים 360",
      location: "הרצליה",
      units: 38,
      status: "בביצוע",
      completion: "2025",
      image: "https://eshkol.co.il/wp-content/uploads/2021/07/C1_night.jpg",
      description: "38 דירות יוקרה עם 360 מעלות של נוף"
    },
    {
      id: 5,
      title: "הראב\"ע 5",
      location: "רמת גן",
      units: 19,
      status: "בשיווק",
      completion: "2025",
      image: "https://eshkol.co.il/wp-content/uploads/2021/02/%D7%94%D7%A8%D7%90%D7%91%D7%A2-5-.jpeg",
      description: "בניין בוטיק בן 7 קומות עם 19 דירות מפנקות"
    },
    {
      id: 6,
      title: "אבן שפרוט",
      location: "הרצליה",
      units: null,
      status: "בביצוע",
      completion: "2025",
      image: "https://eshkol.co.il/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-04-at-13.20.06-1.jpg",
      description: "שני בניינים בני 7 קומות במיקום מנצח"
    }
  ]

  const filters = [
    { id: 'all', label: 'הכל' },
    { id: 'בשיווק', label: 'בשיווק' },
    { id: 'בביצוע', label: 'בביצוע' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter)

  const statusColors = {
    'בשיווק': 'bg-green-500',
    'בביצוע': 'bg-yellow-500',
    'מאוכלס': 'bg-gray-500'
  }

  // כפתור לדף פרויקטים המלא
  const handleViewAllClick = () => {
    navigate('/projects')
    window.scrollTo(0, 0)
  }

  // כפתור לצור קשר
  const handleContactClick = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold mb-6"
          >
            פרויקטים נבחרים
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            הפרויקטים שלנו
          </h2>
          
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6" />
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            מבט על הפרויקטים המרשימים שלנו ברחבי הארץ
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f, index) => (
            <motion.button
              key={f.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-300 ${
                filter === f.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              statusColors={statusColors}
            />
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* כפתור לכל הפרויקטים */}
            <EshkolButton
              onClick={handleViewAllClick}
              variant="primary"
              size="md"
            >
              לכל הפרויקטים
            </EshkolButton>

            {/* כפתור לצור קשר */}
            <EshkolButton
              onClick={handleContactClick}
              variant="outline"
              size="md"
              showGif={false}
            >
              רוצים לשמוע עוד?
            </EshkolButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Project Card Component
const ProjectCard = ({ project, index, statusColors }) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/projects')}
      className="group cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -10 }}
        className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span className={`${statusColors[project.status]} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
              {project.status}
            </span>
          </div>

          {/* Title on image */}
          <div className="absolute bottom-4 right-4 left-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{project.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-700 mb-4">
            {project.units && (
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                <span className="font-bold">{project.units}</span>
                <span className="text-sm text-gray-500">יח"ד</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-bold">{project.completion}</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-primary font-bold group-hover:text-primary-light transition-colors"
          >
            <span>למידע נוסף</span>
            <ArrowLeft className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectsMap
