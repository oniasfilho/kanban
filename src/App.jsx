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
			root.style.setProperty('--task-card-background', '#9797972d');
			root.style.setProperty(
				'--box-shadow',
				'0px 4px 8px 0px rgba(51, 51, 51, 0.6)'
			);
		} else {
			root.style.setProperty('--background-color', '#FFFFFF');
			root.style.setProperty('--text-color', 'black');
			root.style.setProperty('--secondary-color', '#F4F7FD');
			root.style.setProperty('--navbar-border', 'rgba(148, 147, 147, 0.4)');
			root.style.setProperty('--task-card-background', '#FFFFFF');
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
