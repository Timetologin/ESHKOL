import { motion } from 'framer-motion'

const VideoSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full scale-150"
          src="https://player.vimeo.com/video/504354093?autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="אשכול - סרטון רקע"
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Over Video */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold text-lg mb-6 border border-white/30"
          >
            הכירו אותנו
          </motion.span>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            אשכול - בונים באהבה
          </h2>
          
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-6" />
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            מאחורי כל פרויקט עומדים צוות מסור, ניסיון רב שנים, וחזון ברור
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection