import React from 'react';
import ContentCard from './ContentCard';
import { ContentItem } from '../types';

interface ContentGridProps {
  items: ContentItem[];
  title?: string;
}

const ContentGrid: React.FC<ContentGridProps> = ({ items, title }) => {
  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <ContentCard key={`${item.title}-${index}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ContentGrid;