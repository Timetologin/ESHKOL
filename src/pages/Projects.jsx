import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Home, Calendar, Filter, Search, ArrowLeft } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'כל הפרויקטים' },
    { id: 'תל-אביב', name: 'תל אביב' },
    { id: 'מרכז', name: 'מרכז הארץ' },
    { id: 'צפון', name: 'צפון' },
    { id: 'דרום', name: 'דרום' }
  ]

  const projects = [
    {
      id: 1,
      name: "מגדלי הצפון",
      location: "צפון תל אביב",
      category: "תל-אביב",
      units: 120,
      status: "בבנייה",
      year: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      description: "פרויקט יוקרתי בלב צפון תל אביב עם נוף פתוח ומיקום אטרקטיבי"
    },
    {
      id: 2,
      name: "רוטשילד פארק",
      location: "דרום תל אביב",
      category: "תל-אביב",
      units: 85,
      status: "בשיווק",
      year: "2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      description: "מתחם בוטיק יוקרתי עם גינות ומתחמי דיירים מעוצבים"
    },
    {
      id: 3,
      name: "הרצליה גלים",
      location: "הרצליה",
      category: "מרכז",
      units: 64,
      status: "בשיווק",
      year: "2024",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      description: "פרויקט על חוף הים עם נוף פנורמי ומרפסות שמש"
    },
    {
      id: 4,
      name: "מגדל הכרמל",
      location: "חיפה",
      category: "צפון",
      units: 156,
      status: "בבנייה",
      year: "2024",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
      description: "מגדל מגורים מפואר עם נוף מרהיב לים ולכרמל"
    },
    {
      id: 5,
      name: "העיר החדשה",
      location: "באר שבע",
      category: "דרום",
      units: 98,
      status: "בתכנון",
      year: "2025",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      description: "מתחם מגורים חדש בלב העיר עם מסחר ושטחים ציבוריים"
    },
    {
      id: 6,
      name: "פארק העיר",
      location: "פתח תקווה",
      category: "מרכז",
      units: 72,
      status: "בשיווק",
      year: "2024",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      description: "פרויקט ירוק סמוך לפארק העירוני עם שטחים ציבוריים"
    },
    {
      id: 7,
      name: "נוף הים",
      location: "נתניה",
      category: "מרכז",
      units: 110,
      status: "בבנייה",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      description: "מתחם מגורים יוקרתי עם נוף לים התיכון"
    },
    {
      id: 8,
      name: "העמק הירוק",
      location: "עמק יזרעאל",
      category: "צפון",
      units: 45,
      status: "נמכר",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      description: "פרויקט כפרי בסביבה ירוקה ושקטה"
    },
    {
      id: 9,
      name: "מתחם היהלום",
      location: "רמת גן",
      category: "תל-אביב",
      units: 135,
      status: "בבנייה",
      year: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      description: "פרויקט פרימיום במיקום מרכזי ליד בורסת היהלומים"
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.name.includes(searchTerm) || project.location.includes(searchTerm)
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status) => {
    switch(status) {
      case 'בבנייה': return 'bg-blue-500'
      case 'בשיווק': return 'bg-green-500'
      case 'נמכר': return 'bg-gray-500'
      case 'בתכנון': return 'bg-yellow-500'
      default: return 'bg-primary'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              הפרויקטים שלנו
            </h1>
            <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              גלו את מגוון הפרויקטים האיכותיים שלנו ברחבי הארץ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-md py-6 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <Filter size={20} className="text-primary" />
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="חיפוש פרויקט..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 pr-12 pl-6 py-3 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-gray-600 text-center md:text-right"
          >
            נמצאו <span className="font-bold text-primary">{filteredProjects.length}</span> פרויקטים
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full ${getStatusColor(project.status)} text-white font-bold text-sm shadow-lg`}>
                      {project.status}
                    </div>

                    {/* Year Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary font-bold text-sm">
                      <Calendar size={14} className="inline ml-1" />
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin size={18} className="text-accent-gold" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Home size={18} className="text-accent-gold" />
                      <span>{project.units} יחידות דיור</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      לפרטים נוספים
                      <ArrowLeft size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                לא נמצאו פרויקטים
              </h3>
              <p className="text-gray-500">
                נסה לשנות את הסינון או החיפוש
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
