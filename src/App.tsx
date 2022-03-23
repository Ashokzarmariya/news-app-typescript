//import { Category } from '@mui/icons-material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category/Category';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Nabar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/search/:keyword' element={<SearchResults/>}></Route>
        <Route path='/category/:category' element={<Category/>}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
