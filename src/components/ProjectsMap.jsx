import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Home, Building2, ArrowLeft } from 'lucide-react'

const ProjectsMap = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  // פרויקטים לדוגמה - מיקומים על מפת ישראל
  const projects = [
    {
      id: 1,
      name: "פרויקט צפון תל אביב",
      location: "תל אביב",
      units: 120,
      status: "בבנייה",
      position: { x: 50, y: 45 },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
    },
    {
      id: 2,
      name: "מתחם דרום תל אביב",
      location: "תל אביב",
      units: 85,
      status: "נמכר",
      position: { x: 50, y: 52 },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
    },
    {
      id: 3,
      name: "פרויקט הרצליה",
      location: "הרצליה",
      units: 64,
      status: "בשיווק",
      position: { x: 48, y: 42 },
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"
    },
    {
      id: 4,
      name: "מגדל חיפה",
      location: "חיפה",
      units: 156,
      status: "בבנייה",
      position: { x: 45, y: 25 },
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400"
    },
    {
      id: 5,
      name: "פרויקט באר שבע",
      location: "באר שבע",
      units: 98,
      status: "בתכנון",
      position: { x: 52, y: 75 },
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
    },
    {
      id: 6,
      name: "מתחם פתח תקווה",
      location: "פתח תקווה",
      units: 72,
      status: "בשיווק",
      position: { x: 55, y: 48 },
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
    },
    {
      id: 7,
      name: "פרויקט נתניה",
      location: "נתניה",
      units: 110,
      status: "בבנייה",
      position: { x: 46, y: 38 },
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'בבנייה': return 'bg-blue-500'
      case 'בשיווק': return 'bg-green-500'
      case 'נמכר': return 'bg-gray-500'
      case 'בתכנון': return 'bg-yellow-500'
      default: return 'bg-primary'
    }
  }

  const getStatusBorder = (status) => {
    switch(status) {
      case 'בבנייה': return 'border-blue-500'
      case 'בשיווק': return 'border-green-500'
      case 'נמכר': return 'border-gray-500'
      case 'בתכנון': return 'border-yellow-500'
      default: return 'border-primary'
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-lg mb-6"
          >
            המפה האינטראקטיבית
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            הפרויקטים שלנו ברחבי הארץ
          </h2>
          
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מצפון ועד דרום - פרויקטים איכותיים בכל רחבי ישראל
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
              {/* Israel Map Outline */}
              <div className="relative w-full aspect-[3/4] bg-white/50 rounded-2xl backdrop-blur-sm border-2 border-primary/20 overflow-hidden">
                {/* Simplified Israel Shape */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 150">
                  <path
                    d="M 50 10 L 60 15 L 65 25 L 60 35 L 55 45 L 50 55 L 48 65 L 50 75 L 52 85 L 50 95 L 48 105 L 45 115 L 42 125 L 40 135 L 35 140 L 45 140 L 50 135 L 55 130 L 58 120 L 60 110 L 58 100 L 55 90 L 52 80 L 50 70 L 48 60 L 45 50 L 42 40 L 40 30 L 38 20 L 40 10 Z"
                    fill="currentColor"
                    className="text-primary"
                  />
                </svg>

                {/* Project Pins */}
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    style={{
                      position: 'absolute',
                      left: `${project.position.x}%`,
                      top: `${project.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      onMouseEnter={() => setHoveredProject(project)}
                      onMouseLeave={() => setHoveredProject(null)}
                      whileHover={{ scale: 1.3, z: 50 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                    >
                      {/* Pin */}
                      <div className={`w-10 h-10 rounded-full ${getStatusColor(project.status)} shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 border-4 border-white ${
                        selectedProject?.id === project.id ? 'ring-4 ring-accent-gold' : ''
                      }`}>
                        <Building2 size={20} className="text-white" />
                      </div>

                      {/* Pulse Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute inset-0 rounded-full ${getStatusColor(project.status)} opacity-50`}
                      />

                      {/* Hover Tooltip */}
                      {hoveredProject?.id === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-200 z-50"
                        >
                          <div className="text-sm font-bold text-primary">{project.name}</div>
                          <div className="text-xs text-gray-600">{project.units} יח"ד</div>
                        </motion.div>
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {['בבנייה', 'בשיווק', 'בתכנון', 'נמכר'].map((status) => (
                  <div key={status} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(status)}`} />
                    <span className="text-sm font-medium text-gray-700">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {selectedProject ? (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full ${getStatusColor(selectedProject.status)} text-white font-bold text-sm`}>
                    {selectedProject.status}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {selectedProject.name}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin size={24} className="text-accent-gold" />
                      <span className="text-lg">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Home size={24} className="text-accent-gold" />
                      <span className="text-lg">{selectedProject.units} יחידות דיור</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    פרויקט איכותי המשלב עיצוב מודרני, טכנולוגיות בנייה מתקדמות, ומיקום אטרקטיבי. 
                    הפרויקט כולל מגוון דירות מעוצבות ומתחמי דיירים ייחודיים.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    לפרטים נוספים
                    <ArrowLeft size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl border-2 border-dashed border-gray-300 p-12"
              >
                <div className="text-center">
                  <MapPin size={64} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">
                    בחר פרויקט על המפה
                  </h3>
                  <p className="text-gray-500">
                    לחץ על אחד מהסימנים במפה כדי לראות פרטים
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">{projects.length}</div>
            <div className="text-sm opacity-90">פרויקטים פעילים</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">
              {projects.reduce((sum, p) => sum + p.units, 0)}
            </div>
            <div className="text-sm opacity-90">סה"כ יח"ד</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">
              {projects.filter(p => p.status === 'בבנייה').length}
            </div>
            <div className="text-sm opacity-90">בבנייה</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold mb-2">
              {projects.filter(p => p.status === 'בשיווק').length}
            </div>
            <div className="text-sm opacity-90">בשיווק</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsMap
