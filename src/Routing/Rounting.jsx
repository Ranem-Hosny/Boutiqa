import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router";

export default function Rounting() {
  const Login = lazy(() => import("../Auth/Forms/Login"));
  const Register = lazy(() => import("../Auth/Forms/Register"));
  const Home = lazy(() => import("../Pages/Home"));
  return (
    // <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />

        </Routes>
      </Suspense>
    // </Router>
  );
}
