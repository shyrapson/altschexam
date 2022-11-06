import React, { createContext, useContext, useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";

const userContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userPerpage] = useState(3);
  const [currentpage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalUsers = users.length;
  const [isDisable, setIsDisable] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isDisable, "wahala");

  useEffect(() => {
    const fetchusers = async () => {
      setLoading(true);
      const res = await publicRequest("/?results=27");
      setUsers(res.data?.results);
      setLoading(false);
    };
    fetchusers();
  }, []);

  const numberPages = Math.ceil(totalUsers / userPerpage);
  const lastUserIndex = currentpage * userPerpage;
  const firstUserIndex = lastUserIndex - userPerpage;
  const CurrentUserIndex = users.slice(firstUserIndex, lastUserIndex);
  const page = (num) => setCurrentPage(num);
  useEffect(() => {
    

    if (currentpage === numberPages) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  
    if (currentpage <= 1) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
    if(currentpage<2){
      setIsDisable(true)
    }



   
  }, [currentpage,numberPages])
  

  const prev = () => {
    if (currentpage !== 1) {
      setCurrentPage(currentpage - 1);
    }
  };

  const next = () => {
    if (currentpage !== numberPages) {
      setCurrentPage(currentpage + 1);
    }
  };




  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <userContext.Provider
      value={{
        loading,
        CurrentUserIndex,
        userPerpage,
        totalUsers,
        page,
        next,
        prev,
        currentpage,
        isDisable,
        isSidebarOpen,
        openSideBar,
        closeSideBar
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UsersContextProvider;

export const useGlobalContext = () => {
  return useContext(userContext);
};
