import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './component/Main-page' 
import Home from './component/content/home/home';
import BlogMain from './component/content/blog/blog-main';

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogMain />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;