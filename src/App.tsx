<<<<<<< HEAD
import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
=======
import { Routes, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizzaPage/FullPizza';
import MainLayout from './layouts/MainLayout';
>>>>>>> 74218b69c6c4024c0d0d207502bea1267296419a

import './scss/App.scss';

const Cart = React.lazy(() => import("./pages/Cart"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const FullPizza = React.lazy(() => import("./pages/FullPizza"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));

function App() {
<<<<<<< HEAD
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<div>Идёт загрузка страницы...</div>}>
            <MainLayout />
          </React.Suspense>
        }
      >
        <Route path="" element={<Home />} />
        <Route
          path="/cart"
          element={
            <React.Suspense fallback={<div>Идёт загрузка страницы...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="/pizza/:id"
          element={
            <React.Suspense fallback={<div>Идёт загрузка страницы...</div>}>
              <FullPizza />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Идёт загрузка страницы...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
=======
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
>>>>>>> 74218b69c6c4024c0d0d207502bea1267296419a
}

export default App;
