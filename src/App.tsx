import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GamesPage from './pages/GamesPage';
import MoviesPage from './pages/MoviesPage';
import AppsPage from './pages/AppsPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="apps" element={<AppsPage />} />
          <Route path="books" element={<BooksPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;