import { motion } from 'framer-motion'
import { Mail, Linkedin, Send, MessageCircle, MapPin } from 'lucide-react'

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alerjimenez@gmail.com',
      href: 'mailto:alerjimenez@gmail.com',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/alejandro-rosales-38974a103/',
      gradient: 'from-secondary to-accent',
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-lg mb-2 font-medium">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === 'LinkedIn' ? '_blank' : undefined}
              rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/30"
              >
                <item.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-2">{item.label}</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6"
            >
              <MessageCircle className="text-white" size={32} />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, projects, or collaborations. 
              Feel free to reach out and let's create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = 'mailto:alerjimenez@gmail.com')}
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
