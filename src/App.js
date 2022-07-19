import React from 'react';
import './App.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import { ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import theme from './themes/theme';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" exact element={<Home/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </ThemeProvider>
  );
}

export default App;