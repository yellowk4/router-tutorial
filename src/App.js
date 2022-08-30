import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';

//index prop 사용
const App = () => {
  return (
    <Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} /> 
				<Route path="/about" element={<About />} />
				<Route path="/profiles/:username" element={<Profile />} />
			</Route>
      
      <Route path="/articles" element={<Articles />}>
	      <Route path=":id" element={<Article />} />
			</Route>
    </Routes>
  );
};

export default App;
