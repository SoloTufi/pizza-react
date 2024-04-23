import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
