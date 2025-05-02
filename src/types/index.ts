export interface ContentItem {
  title: string;
  link: string;
  img: string;
  creator: string;
}

export interface ContentData {
  games: ContentItem[];
  movies: ContentItem[];
  apps: ContentItem[];
  books: ContentItem[];
}

export type ContentCategory = 'games' | 'movies' | 'apps' | 'books';