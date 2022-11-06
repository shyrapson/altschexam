import React from "react";

const User = ({ user }) => {
 const {
  name,
  location,
  email,
  phone,

  
  picture,
  
} = user;
console.log(phone, "pp");

return (
  
  <article className="user">
   
    <div className="image">

    <img src={picture.medium} alt="user_image" />
    </div>
    <div className="userdata">
    <div className="username">
    <p>{name.title}</p>
    <p>{name.first}</p>
    <p>{name.last}</p>
    </div>

    <div className="user_Adress">
      <p className="home_address">house number {location.street.number},{location.street.name}</p>
      <p className="state">{location.state},{location.city}</p>
      <div className="country">{location.country}</div>
    </div>
    <p className="phone">phone: {phone}</p>
    <p className="email">email: {email}</p>
    </div>
    
  </article>
);
};

export default User;
