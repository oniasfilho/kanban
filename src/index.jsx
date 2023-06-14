import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import App from './App';
import store from './app/store';
import { apiSlice } from './features/api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApiProvider api={apiSlice}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApiProvider>
	</React.StrictMode>
);
