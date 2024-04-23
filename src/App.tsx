import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./scss/App.scss";

const Cart = React.lazy(() => import("./pages/Cart"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const FullPizza = React.lazy(() => import("./pages/FullPizza"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));

function App() {
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
}

export default App;
