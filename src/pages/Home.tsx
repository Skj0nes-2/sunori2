import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import ContentGrid from '../components/ContentGrid';
import Search from '../components/Search';
import { Gamepad2, Film, BookOpen, AppWindow } from 'lucide-react';

const Home: React.FC = () => {
  const { items, searchItems, isLoading } = useContent();

  const categories = [
    { name: 'Games', icon: <Gamepad2 size={24} />, path: '/games', color: 'bg-purple-600' },
    { name: 'Movies', icon: <Film size={24} />, path: '/movies', color: 'bg-blue-600' },
    { name: 'Apps', icon: <AppWindow size={24} />, path: '/apps', color: 'bg-green-600' },
    { name: 'Books', icon: <BookOpen size={24} />, path: '/books', color: 'bg-red-600' }
  ];

  return (
    <div>
      <motion.div 
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Discover Great Content
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our curated collection of games, movies, apps, and books.
        </p>

        <div className="mt-8">
          <Search onSearch={searchItems} placeholder="Search for content..." />
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <Link 
            key={category.path} 
            to={category.path}
            className="block"
          >
            <motion.div 
              className={`${category.color} text-white rounded-lg p-6 h-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-white mb-3">{category.icon}</div>
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h2>
          <ContentGrid items={items} />
        </motion.div>
      )}
    </div>
  );
};

export default Home;