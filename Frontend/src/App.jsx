import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import { useAuth } from "./contex/AuthProvider";
// Importing Components
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Signup";

function App() {
  const [authUser, setauthUser] = useAuth()
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;