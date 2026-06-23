import { motion } from 'framer-motion'
import { CheckCircle, ArrowDown, Code, Server, Cloud, Shield, Database, Globe, Languages } from 'lucide-react'

const Experience = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: [
        { name: 'HelpDesk', level: 'Experienced' },
        { name: 'Cisco', level: 'Intermediate' },
        { name: 'Active Directory', level: 'Intermediate' },
        { name: 'Technical Support', level: 'Experienced' },
        { name: 'Firewall', level: 'Basic' },
        { name: 'MS365', level: 'Intermediate' },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 'Basic' },
        { name: 'GCP', level: 'Basic' },
        { name: 'PC Hardware', level: 'Experienced' },
        { name: 'Meridian PBX', level: 'Intermediate' },
      ],
    },
    {
      title: 'Languages',
      icon: Languages,
      skills: [
        { name: 'English', level: 'Intermediate' },
        { name: 'Spanish', level: 'Native' },
      ],
    },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Experienced':
        return { text: 'text-green-400', bg: 'from-green-500 to-emerald-400', progress: 100 }
      case 'Intermediate':
        return { text: 'text-primary', bg: 'from-primary to-secondary', progress: 70 }
      case 'Native':
        return { text: 'text-accent', bg: 'from-accent to-pink-400', progress: 100 }
      default:
        return { text: 'text-yellow-400', bg: 'from-yellow-500 to-orange-400', progress: 40 }
    }
  }

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-lg mb-2 font-medium">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center"
                >
                  <category.icon className="text-white" size={20} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.skills.map((skill, index) => {
                  const levelColor = getLevelColor(skill.level)
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass p-5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            className="p-2 bg-white/5 rounded-lg"
                          >
                            <CheckCircle className={levelColor.text} size={20} />
                          </motion.div>
                          <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        </div>
                        <span className={`text-sm font-medium ${levelColor.text} px-3 py-1 rounded-full bg-white/5`}>
                          {skill.level}
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${levelColor.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + index * 0.05 + 0.2, duration: 0.8 }}
                        className="h-2 bg-white/10 rounded-full overflow-hidden"
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${levelColor.bg}`}
                        />
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#contact"
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

export default Experience
