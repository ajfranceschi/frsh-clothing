import React from "react";
import "./signIn-signUp.styles.sass";
import SignIn from "../../Components/SignIn/signIn.component";
import SignUp from "../../Components/SignUp/signUp.component";

const SignInSignUp = () => {
  return <div className="signInSignUp">
    <SignIn />
    <SignUp />
  </div>;
};

export default SignInSignUp;
