import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, ArrowDown, Zap, Users, Target } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-lg mb-2 font-medium">Get to Know More</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
              >
                <img
                  src="/data-center.webp"
                  alt="Data Center"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-3xl"></div>
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dashed border-secondary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -right-4 w-16 h-16 border border-dotted border-accent/40 rounded-full"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/30"
                >
                  <Briefcase className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">10+ years<br />Telecommunications Engineer</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-secondary/30"
                >
                  <GraduationCap className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-gray-300">Telecommunications<br />Engineer Degree</p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Proactive, customer oriented professional with more than 10 years of experience.
                Motivated, team player with strong organizational and interpersonal skills.
                Always looking to learn new skills, take on additional responsibilities and grow professionally.
              </p>
            </motion.div>

            {/* Key Attributes */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Zap, label: 'Proactive' },
                { icon: Users, label: 'Team Player' },
                { icon: Target, label: 'Goal Oriented' },
              ].map((attr, index) => (
                <motion.div
                  key={attr.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="glass p-4 rounded-xl text-center border border-white/10"
                >
                  <attr.icon className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-sm text-gray-300 font-medium">{attr.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#experience"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
