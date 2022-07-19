import "./App.css";
import { DetailMovie } from "./pages/DetailMovie";
import { Homepage } from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import theme from './themes/theme';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
      </Routes>
    </>
  );
}

export default App;