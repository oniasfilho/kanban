import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar';

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
