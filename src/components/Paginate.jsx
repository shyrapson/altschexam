import React, { useState } from "react";
import { useGlobalContext } from "../context/UsersContext";

const Paginate = () => {
    
  const { totalUsers, userPerpage, page,prev,next,currentpage,isDisable } = useGlobalContext();
  console.log(isDisable,'faaa')
  const PageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / userPerpage); i++) {
    PageNumber.push(i);
  }


  return (
    <div>
      <ul className="pageNumber">
        <li>
          <button  className={`${isDisable ?'btn xyz':'btn'}`}  onClick={prev} disabled={isDisable} >prev</button>
        </li>
        
        {PageNumber.map((number) => {
          return (
            <li>
              <a className="pagenums" onClick={() => page(number)} href="#">
                {number}
              </a>
            </li>
          );
        })}

        <li>
          <button onClick={next}  className='btn'>next</button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
