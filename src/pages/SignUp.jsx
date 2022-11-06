import React from "react";
import { signUpWithGoogle } from "../fiebase";
import { FcGoogle } from "react-icons/fc";
import Input from "../components/Input";

const SignUp = () => {
  return (
    <div className="signUpContainer">
      <div className="signup">
      <div className="googlesignUp" onClick={signUpWithGoogle}>
        <FcGoogle />
        SignUp with Google
      </div>
      <div className="or">
        <hr /> <span>OR</span>
        <hr />
      </div>
      <form action="" className="form-container">

        <Input type="text" name="FirstName" placeholder="please enter first name"/>
        <Input type="text" name="LastName" placeholder="please enter last name"/>
        <Input type="email" name="Email" placeholder="please enter email"/>
        <Input type="password" name="Password" placeholder="please enter password"/>
        <button type="submit" class="sing__in">Sign up</button>
      </form>

   
      </div>
     
    </div>
  );
};

export default SignUp;
