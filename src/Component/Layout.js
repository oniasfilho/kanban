import React from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='layout'>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Layout