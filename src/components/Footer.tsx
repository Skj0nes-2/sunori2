import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sunori</h3>
            <p className="text-gray-300">
              Discover the best games, movies, apps, and books all in one place.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/games" className="text-gray-300 hover:text-white transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="/movies" className="text-gray-300 hover:text-white transition-colors">
                  Movies
                </a>
              </li>
              <li>
                <a href="/apps" className="text-gray-300 hover:text-white transition-colors">
                  Apps
                </a>
              </li>
              <li>
                <a href="/books" className="text-gray-300 hover:text-white transition-colors">
                  Books
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Sunori-Official/Sunori" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:sunori_@outlook.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-indigo-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sunori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;