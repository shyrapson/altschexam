import "./App.css";

import React from "react";

import ErrorBoundary from "./components/ErrorBoundary";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import UsersContextProvider from "./context/UsersContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => {



  return (
    <UsersContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
       
        
      </Routes>
      <Sidebar/>
      <Footer/>
    </UsersContextProvider>
  );
};

export default App;

