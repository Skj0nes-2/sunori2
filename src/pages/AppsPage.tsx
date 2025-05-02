import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import ContentGrid from '../components/ContentGrid';
import Search from '../components/Search';

const AppsPage: React.FC = () => {
  const { items, searchItems, isLoading } = useContent({ category: 'apps' });
  const [searchApplied, setSearchApplied] = useState(false);

  const handleSearch = (term: string) => {
    searchItems(term);
    setSearchApplied(!!term);
  };

  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Apps</h1>
        <p className="text-gray-600 mb-6">
          Discover useful applications to enhance your productivity.
        </p>
        <Search onSearch={handleSearch} placeholder="Search apps..." />
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
          {searchApplied && items.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-700">No apps found matching your search.</h3>
              <p className="text-gray-500 mt-2">Try a different search term or browse all apps.</p>
            </div>
          ) : (
            <ContentGrid items={items} />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AppsPage;