import { motion } from 'framer-motion'

const VideoSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://player.vimeo.com/video/504354093?autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="אשכול - סרטון רקע"
        />
      </div>
    </section>
  )
}

export default VideoSection