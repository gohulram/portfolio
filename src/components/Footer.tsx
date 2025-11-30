import { Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a href="mailto:gohulhgohulh@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                gohulhgohulh@gmail.com
              </a>
              <a href="tel:+919080197042" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                +91-9080197042
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Tirunelveli, Tamil Nadu, India
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="https://github.com/gohulram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/gohul-h" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base">&copy; 2025 Gohul H. All rights reserved. Crafted with care for design excellence.</p>
        </div>
      </div>
    </footer>
  );
}
