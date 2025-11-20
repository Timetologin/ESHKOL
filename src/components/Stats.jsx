import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString('he-IL') + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const Stats = () => {
  const stats = [
    {
      value: 5000,
      suffix: "+",
      label: "יחידות דיור",
      description: "נבנו ברחבי הארץ"
    },
    {
      value: 25,
      suffix: "+",
      label: "שנות ניסיון",
      description: "בתחום הבניה והיזמות"
    },
    {
      value: 50,
      suffix: "+",
      label: "פרויקטים פעילים",
      description: "בשלבי תכנון וביצוע"
    },
    {
      value: 98,
      suffix: "%",
      label: "שביעות רצון",
      description: "של לקוחותינו"
    }
  ]

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            המספרים מדברים בעד עצמם
          </h2>
          <div className="h-1 w-32 bg-accent-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="text-center group"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-accent-gold/50 transition-all duration-300 hover:bg-white/15"
              >
                <motion.div 
                  className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-white to-accent-gold bg-clip-text text-transparent"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.3 + index * 0.1
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-gray-300 text-lg">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
