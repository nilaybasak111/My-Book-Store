import React from "react";
// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing Components
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import Footer from "./components/Footer";

export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/course",
      element:<Course />
    }
  ])


  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer /> */}
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

// 1:21:00
