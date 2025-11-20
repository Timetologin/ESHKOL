import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const VideoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
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
            הכירו אותנו
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            אשכול - בונים באהבה
          </h2>
          
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            צפו בסרטון ולמדו עוד על הערכים והחזון שלנו
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative group">
            {/* Video Wrapper with Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent-gold to-primary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-3xl p-4 md:p-8 shadow-2xl">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://player.vimeo.com/video/504354093?title=0&byline=0&portrait=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="אשכול - סרטון תדמית"
                />
              </div>
            </div>

            {/* Play Icon Overlay (decorative) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 bg-accent-gold text-white p-6 rounded-full shadow-2xl"
            >
              <Play size={32} fill="white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            מאחורי כל פרויקט עומדים צוות מסור, ניסיון רב שנים, וחזון ברור - 
            <strong className="text-primary"> לבנות לכם את הבית שתמיד חלמתם עליו</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection
