import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../layout/Navbar';

function Layout() {
  const navigate = useNavigate();
  const authenticated = useSelector((state) => state.content.authenticated);
  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
