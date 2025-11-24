import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { MapPin, Home, Calendar, ArrowLeft } from 'lucide-react'

const ProjectsMap = () => {
  const [filter, setFilter] = useState('all')

  // פרויקטים - תחליף בנתונים אמיתיים שלך
  const projects = [
    {
      id: 1,
      title: "פרויקט דגל - תל אביב",
      location: "תל אביב",
      units: 120,
      status: "בבנייה",
      completion: "2025",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      description: "פרויקט יוקרה בלב תל אביב עם נוף פתוח למרכז העיר"
    },
    {
      id: 2,
      title: "מתחם פי גלילות",
      location: "פי גלילות",
      units: 85,
      status: "נמכר",
      completion: "2024",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      description: "מתחם דירות יוקרה בצפון הארץ עם נוף לגליל"
    },
    {
      id: 3,
      title: "פרויקט הכרמל",
      location: "חיפה",
      units: 65,
      status: "בתכנון",
      completion: "2026",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      description: "בניין בוטיק על הכרמל עם נוף מדהים לים"
    },
    {
      id: 4,
      title: "מגדלי הים",
      location: "נתניה",
      units: 200,
      status: "בשיווק",
      completion: "2026",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      description: "שני מגדלי יוקרה על קו החוף הראשון"
    },
    {
      id: 5,
      title: "שכונת העתיד",
      location: "באר שבע",
      units: 340,
      status: "בבנייה",
      completion: "2025",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      description: "פרויקט התחדשות עירונית מקיף בדרום"
    },
    {
      id: 6,
      title: "מרכז העיר",
      location: "ירושלים",
      units: 95,
      status: "בתכנון",
      completion: "2027",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      description: "פרויקט יוקרה במרכז העיר העתיקה"
    }
  ]

  const filters = [
    { id: 'all', label: 'הכל' },
    { id: 'בבנייה', label: 'בבנייה' },
    { id: 'בשיווק', label: 'בשיווק' },
    { id: 'בתכנון', label: 'בתכנון' },
    { id: 'נמכר', label: 'נמכר' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter)

  const statusColors = {
    'בבנייה': 'bg-blue-500',
    'בשיווק': 'bg-green-500',
    'בתכנון': 'bg-yellow-500',
    'נמכר': 'bg-gray-500'
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #1a3a52 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - בונים את העתיד */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary/70 font-medium text-lg mb-4"
          >
            הפרויקטים שלנו
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
            בונים את
          </h2>
          
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="block text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent-gold via-yellow-500 to-accent-gold bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            העתיד
          </motion.span>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-24 bg-accent-gold mx-auto mt-8 mb-6"
          />
          
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>רוצים לשמוע עוד?</span>
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Project Card with 3D tilt effect
const ProjectCard = ({ project, index, statusColors }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring animations for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20
  })
  
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20
  })

  // Image parallax
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-15, 15])
  const imageX = useTransform(mouseX, [-0.5, 0.5], [-15, 15])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)
    
    mouseX.set(percentX)
    mouseY.set(percentY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer"
    >
      {/* Card */}
      <motion.div
        whileHover={{ z: 50 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              x: isHovered ? imageX : 0,
              y: isHovered ? imageY : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Status badge */}
          <motion.div
            style={{
              transform: isHovered ? "translateZ(30px)" : "translateZ(0px)"
            }}
            className="absolute top-4 right-4"
          >
            <span className={`${statusColors[project.status]} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
              {project.status}
            </span>
          </motion.div>

          {/* Title on image */}
          <motion.div
            style={{
              transform: isHovered ? "translateZ(40px)" : "translateZ(0px)"
            }}
            className="absolute bottom-4 right-4 left-4"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{project.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          style={{
            transform: isHovered ? "translateZ(20px)" : "translateZ(0px)"
          }}
          className="p-6"
        >
          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-700 mb-4">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              <span className="font-bold">{project.units}</span>
              <span className="text-sm text-gray-500">יח"ד</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-bold">{project.completion}</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>למידע נוסף</span>
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectsMap
