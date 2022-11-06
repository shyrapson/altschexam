import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [authenticate, setAuthenticate] = useState(null);
  const user = localStorage.getItem("name", true);
  console.log(user);

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) {
      setAuthenticate(user);
    }
  }, []);

  return (
    <div className="dashboard">
      {authenticate && (
        <div className="user_dashboard">
          <img src={localStorage.getItem("profile")} alt="user" />
          <h1>Name:{localStorage.getItem("name")}</h1>
          <h1>Email:{localStorage.getItem("email")}</h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
