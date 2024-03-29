import { Routes, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizzaPage/FullPizza';
import MainLayout from './layouts/MainLayout';

import './scss/App.scss';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/pizza/:id' element={<FullPizza />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
