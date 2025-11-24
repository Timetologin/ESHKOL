// Projects.jsx - עמוד הפרויקטים הראשי עם EshkolButton
import React, { useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Home, Building2, ArrowLeft, Play } from 'lucide-react';
import { projectsData, getAllStatuses } from '../data/projectsData';
import EshkolButton from '../components/EshkolButton';

// קומפוננטת כרטיס פרויקט עם אפקט 3D
const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'marketing': return 'bg-green-500';
      case 'construction': return 'bg-yellow-500';
      case 'urban-renewal': return 'bg-blue-500';
      case 'occupied': return 'bg-gray-500';
      default: return 'bg-primary';
    }
  };
  
  const getStatusLabel = (status) => {
    switch (status) {
      case 'marketing': return 'בשיווק';
      case 'construction': return 'בביצוע';
      case 'urban-renewal': return 'התחדשות עירונית';
      case 'occupied': return 'מאוכלס';
      default: return status;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`/projects/${project.slug}`)}
        whileHover={{ scale: 1.02 }}
      >
        {/* תמונה */}
        <div className="relative h-56 overflow-hidden">
          {project.mainImage ? (
            <motion.img
              src={project.mainImage}
              alt={project.name}
              className="w-full h-full object-cover"
              style={{
                scale: isHovered ? 1.1 : 1,
                transition: 'transform 0.5s ease-out'
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <Building2 className="w-16 h-16 text-primary/50" />
            </div>
          )}
          
          {/* שכבת כהות */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* תג סטטוס */}
          <div className={`absolute top-4 right-4 ${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {getStatusLabel(project.status)}
          </div>
          
          {/* אייקון וידאו */}
          {project.video && (
            <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
              <Play className="w-4 h-4 text-primary" />
            </div>
          )}
          
          {/* שם הפרויקט על התמונה */}
          <div className="absolute bottom-4 right-4 left-4">
            <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
        
        {/* תוכן */}
        <div className="p-5">
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {project.description}
          </p>
          
          {/* פרטים */}
          <div className="flex flex-wrap gap-3 mb-4">
            {project.units && (
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Home className="w-4 h-4" />
                <span>{project.units} יח"ד</span>
              </div>
            )}
            {project.buildings && (
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Building2 className="w-4 h-4" />
                <span>{project.buildings} בניינים</span>
              </div>
            )}
          </div>
          
          {/* כפתור */}
          <motion.div
            className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
            whileHover={{ x: -5 }}
          >
            <span>למידע נוסף</span>
            <ArrowLeft className="w-4 h-4" />
          </motion.div>
        </div>
        
        {/* אפקט זוהר */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${(mouseX.get() + 0.5) * 100}% ${(mouseY.get() + 0.5) * 100}%, rgba(26, 58, 82, 0.1) 0%, transparent 50%)`
              : 'none'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// קומפוננטת כפתור סינון
const FilterButton = ({ status, isActive, onClick, count }) => (
  <motion.button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-full font-medium transition-all ${
      isActive
        ? 'bg-primary text-white shadow-lg'
        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {status.label}
    <span className={`mr-2 text-sm ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
      ({count})
    </span>
  </motion.button>
);

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const statuses = getAllStatuses();
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter(project => project.status === activeFilter);
  }, [activeFilter]);

  // פונקציה לניווט לדף צור קשר - קישור פנימי!
  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* רקע מונפש */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/3 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* כותרת */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            בונים את העתיד
          </h1>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            הפרויקטים שלנו משלבים איכות, חדשנות ועיצוב מודרני
          </p>
        </motion.div>

        {/* כפתורי סינון */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {statuses.map((status) => (
            <FilterButton
              key={status.id}
              status={status}
              isActive={activeFilter === status.id}
              onClick={() => setActiveFilter(status.id)}
              count={status.count}
            />
          ))}
        </motion.div>

        {/* רשת פרויקטים */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* אין תוצאות */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">לא נמצאו פרויקטים בקטגוריה זו</p>
          </motion.div>
        )}

        {/* CTA - עם EshkolButton וקישור פנימי */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">מעוניינים לשמוע עוד על הפרויקטים שלנו?</p>
          <EshkolButton
            onClick={handleContactClick}
            variant="primary"
            size="lg"
          >
            צור קשר
          </EshkolButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
