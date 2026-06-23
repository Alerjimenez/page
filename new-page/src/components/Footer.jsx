import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <ul className="flex justify-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://www.linkedin.com/in/alejandro-rosales-38974a103/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full text-gray-400 hover:text-primary hover:bg-primary/20 transition-all duration-300"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="mailto:alerjimenez@gmail.com"
            className="p-3 glass rounded-full text-gray-400 hover:text-secondary hover:bg-secondary/20 transition-all duration-300"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-500 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            Copyright &copy; {currentYear} Alejandro Rosales. All Rights Reserved.
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-primary"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
