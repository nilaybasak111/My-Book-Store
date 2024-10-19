import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Components
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}

// 2:05:00
