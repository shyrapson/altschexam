import React from "react";
import { BiMenu } from "react-icons/bi";
import { useGlobalContext } from "../context/UsersContext";


const Navbar = () => {
  const {openSideBar} = useGlobalContext()
  return (
    <nav className="navbar">
      <div className="logo">
        ALT <span>SCHOOL</span>
      </div>

      <ul className="listItem">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">SignUp</a>
        </li>
        <li> <a href="/dashboard">Dashboard</a></li>
        <li> <a href="/about">About</a></li>
       
      </ul>
      <div className="menu" onClick={openSideBar}>
        <BiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
