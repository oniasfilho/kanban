import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Layout from './Component/Layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/home"} element={<Layout />} >
					<Route path='boards' element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
