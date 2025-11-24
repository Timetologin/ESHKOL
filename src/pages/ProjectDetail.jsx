// ProjectDetail.jsx - דף פרויקט בודד
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Home, Building2, ArrowRight, ArrowLeft, 
  Check, Play, X, ChevronLeft, ChevronRight,
  Phone, Mail, FileText
} from 'lucide-react';
import { getProjectBySlug, projectsData } from '../data/projectsData';

// קומפוננטת גלריה
const ImageGallery = ({ images, projectName }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="space-y-4">
        {/* תמונה ראשית */}
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setIsLightboxOpen(true)}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={images[selectedImage]}
            alt={`${projectName} - תמונה ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
              לחץ להגדלה
            </span>
          </div>
        </motion.div>

        {/* תמונות ממוזערות */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`${projectName} - תמונה ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedImage]}
              alt={projectName}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 text-white text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// קומפוננטת תכניות דירה
const FloorPlans = ({ plans, projectName }) => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!plans || plans.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 rounded-2xl p-8"
    >
      <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
        <FileText className="w-6 h-6" />
        תכניות דירה
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {plans.map((plan, index) => (
          <motion.button
            key={index}
            onClick={() => { setSelectedPlan(index); setIsLightboxOpen(true); }}
            className="relative aspect-square rounded-xl overflow-hidden border-2 border-gray-200 hover:border-primary transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={plan.image}
              alt={plan.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                {plan.name}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox לתכניות */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="text-center">
              <motion.img
                key={selectedPlan}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={plans[selectedPlan].image}
                alt={plans[selectedPlan].name}
                className="max-w-[90vw] max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white mt-4 text-lg">{plans[selectedPlan].name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

// קומפוננטת סרטון
const VideoSection = ({ videoUrl, projectName }) => {
  if (!videoUrl) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
        <Play className="w-6 h-6" />
        סרטון הפרויקט
      </h2>

      <div className="aspect-video rounded-xl overflow-hidden">
        <video
          src={videoUrl}
          controls
          poster={videoUrl.replace('.mp4', '.jpg')}
          className="w-full h-full object-cover"
        >
          הדפדפן שלך לא תומך בווידאו
        </video>
      </div>
    </motion.section>
  );
};

// קומפוננטת מפרט טכני
const TechnicalSpecs = ({ specs }) => {
  if (!specs || specs.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-primary mb-6">מפרט טכני</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <span className="text-gray-700">{spec}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// קומפוננטת CTA
const ContactCTA = ({ projectName }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white text-center"
  >
    <h2 className="text-2xl font-bold mb-4">מעוניינים לשמוע עוד על {projectName}?</h2>
    <p className="text-white/80 mb-6">השאירו פרטים ונחזור אליכם בהקדם</p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.a
        href="https://eshkol.co.il/form_check/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail className="w-5 h-5" />
        <span>השאירו פרטים</span>
      </motion.a>
      
      <motion.a
        href="tel:052-7847101"
        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-5 h-5" />
        <span>052-7847101</span>
      </motion.a>
    </div>
  </motion.section>
);

// קומפוננטה ראשית
const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = getProjectBySlug(slug);
    setProject(foundProject);
    setLoading(false);
  }, [slug]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'marketing': return 'bg-green-500';
      case 'construction': return 'bg-yellow-500';
      case 'urban-renewal': return 'bg-blue-500';
      case 'occupied': return 'bg-gray-500';
      default: return 'bg-primary';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">הפרויקט לא נמצא</h1>
        <button
          onClick={() => navigate('/projects')}
          className="text-primary hover:underline flex items-center gap-2"
        >
          <ArrowRight className="w-5 h-5" />
          חזרה לכל הפרויקטים
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        {project.mainImage ? (
          <img
            src={project.mainImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light" />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* כפתור חזרה */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/projects')}
          className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
          <span>כל הפרויקטים</span>
        </motion.button>

        {/* מידע על התמונה */}
        <div className="absolute bottom-0 right-0 left-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`inline-block ${getStatusColor(project.status)} text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4`}>
                {project.statusLabel}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {project.name}
              </h1>
              
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <MapPin className="w-5 h-5" />
                <span>{project.neighborhood}, {project.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* תוכן */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* עמודה ראשית */}
          <div className="lg:col-span-2 space-y-8">
            {/* תיאור */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">על הפרויקט</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="whitespace-pre-line">{project.fullDescription || project.description}</p>
              </div>
            </motion.section>

            {/* גלריה */}
            {project.images && project.images.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">גלריית תמונות</h2>
                <ImageGallery images={project.images} projectName={project.name} />
              </motion.section>
            )}

            {/* תכניות */}
            <FloorPlans plans={project.floorPlans} projectName={project.name} />

            {/* סרטון */}
            <VideoSection videoUrl={project.video} projectName={project.name} />

            {/* מפרט טכני */}
            <TechnicalSpecs specs={project.specs} />
          </div>

          {/* סיידבר */}
          <div className="space-y-6">
            {/* כרטיס פרטים */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
            >
              <h3 className="text-xl font-bold text-primary mb-4">פרטי הפרויקט</h3>
              
              <div className="space-y-4">
                {project.units && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Home className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">יחידות דיור</div>
                      <div className="font-bold text-gray-800">{project.units} יח"ד</div>
                    </div>
                  </div>
                )}
                
                {project.buildings && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">בניינים</div>
                      <div className="font-bold text-gray-800">{project.buildings} בניינים</div>
                    </div>
                  </div>
                )}
                
                {project.floors && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">קומות</div>
                      <div className="font-bold text-gray-800">{project.floors} קומות</div>
                    </div>
                  </div>
                )}
                
                {project.apartmentTypes && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Home className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">סוגי דירות</div>
                      <div className="font-bold text-gray-800">{project.apartmentTypes}</div>
                    </div>
                  </div>
                )}
                
                {project.developer && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">יזם</div>
                      <div className="font-bold text-gray-800">{project.developer}</div>
                    </div>
                  </div>
                )}
                
                {project.architect && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">אדריכל</div>
                      <div className="font-bold text-gray-800">{project.architect}</div>
                    </div>
                  </div>
                )}
                
                {project.price && (
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <span className="text-2xl">₪</span>
                    <div>
                      <div className="text-sm text-gray-500">מחיר</div>
                      <div className="font-bold text-primary">{project.price}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* כפתור יצירת קשר */}
              <motion.a
                href="https://eshkol.co.il/form_check/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:bg-primary-light transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                <span>מעוניין לשמוע עוד</span>
              </motion.a>

              <a
                href="tel:052-7847101"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary/5 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>052-7847101</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <ContactCTA projectName={project.name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
