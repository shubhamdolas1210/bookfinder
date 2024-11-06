import  { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar.jsx';
import { BookList } from './components/BookList';

import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const fetchBooks = async () => {
    if (!searchQuery) return;
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchQuery}`);
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  
  useEffect(() => {
    fetchBooks();
  }, [searchQuery]);

  return (
    <div className="App">
      <SearchBar setSearchQuery={setSearchQuery} />
      <BookList books={books} />
    </div>
  );
}

export default App;
