import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './pages/Home';
import Layout from './component/Layout';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--background-color', '#2B2C37');
      root.style.setProperty('--text-color', 'white');
      root.style.setProperty('--secondary-color', '#20212C');
      root.style.setProperty('--navbar-border', 'rgba(228, 225, 225, 0.4)');
      root.style.setProperty('--task-card-background', 'rgba(43, 44, 55, 100)');
      root.style.setProperty('--input-border-color', 'rgba(130, 143, 163, 0.25');
      root.style.setProperty('--empty-board-background', 'linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%)');
      root.style.setProperty(
        '--box-shadow',
        '0px 4px 8px 0px rgba(54, 78, 126, 0.20)'
      );
    } else {
      root.style.setProperty('--background-color', '#FFFFFF');
      root.style.setProperty('--text-color', 'black');
      root.style.setProperty('--secondary-color', '#F4F7FD');
      root.style.setProperty('--navbar-border', 'rgba(148, 147, 147, 0.4)');
      root.style.setProperty('--task-card-background', '#FFFFFF');
      root.style.setProperty('--input-border-color', 'rgba(130, 143, 163, 0.25)');
      root.style.setProperty('--empty-board-background', 'linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.50) 100%)');
      root.style.setProperty(
        '--box-shadow',
        '0px 4px 8px 0px rgba(151, 151, 151, 0.2)'
      );
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home/boards' />} />
        <Route path='/home' element={<Layout />}>
          <Route path='boards' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
