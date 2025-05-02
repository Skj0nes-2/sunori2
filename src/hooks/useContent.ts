import { useState, useEffect } from 'react';
import { ContentData, ContentItem, ContentCategory } from '../types';
import contentData from '../data/src.json';

interface UseContentProps {
  category?: ContentCategory;
  limit?: number;
}

export const useContent = ({ category, limit }: UseContentProps = {}) => {
  const [data, setData] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    try {
      setData(contentData as ContentData);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load content data');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      if (category) {
        const items = data[category];
        setFilteredItems(limit ? items.slice(0, limit) : items);
      } else {
        // If no category is provided, we can return featured items from all categories
        const allItems: ContentItem[] = [];
        
        // Get a few items from each category
        Object.keys(data).forEach((key) => {
          const categoryItems = data[key as ContentCategory];
          const categoryLimit = Math.min(limit || 4, categoryItems.length);
          allItems.push(...categoryItems.slice(0, categoryLimit));
        });
        
        setFilteredItems(allItems);
      }
    }
  }, [data, category, limit]);

  const searchItems = (searchTerm: string) => {
    if (!data || !searchTerm.trim()) {
      // If no search term or it's empty, reset to original items
      if (category) {
        setFilteredItems(limit ? data[category].slice(0, limit) : data[category]);
      }
      return;
    }

    const term = searchTerm.toLowerCase().trim();
    
    if (category) {
      // Search within the specific category
      const results = data[category].filter(
        item => 
          item.title.toLowerCase().includes(term) || 
          item.src.toLowerCase().includes(term)
      );
      setFilteredItems(results);
    } else {
      // Search across all categories
      const results: ContentItem[] = [];
      
      Object.keys(data).forEach((key) => {
        const categoryItems = data[key as ContentCategory];
        const matchingItems = categoryItems.filter(
          item => 
            item.title.toLowerCase().includes(term) || 
            item.src.toLowerCase().includes(term)
        );
        results.push(...matchingItems);
      });
      
      setFilteredItems(results);
    }
  };

  return {
    isLoading,
    error,
    data,
    items: filteredItems,
    searchItems,
  };
};