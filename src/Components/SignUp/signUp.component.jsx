import React from "react";
import FormInput from "../FormInput/formInput.component";
import CustomButton from "../CustomButton/customButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signUp.styles.sass";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signUp">
        <h2 className="title">I do not have an account.</h2>
        <span>Sign up with your email and password</span>

        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            handleChange={this.handleInputChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleInputChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            handleChange={this.handleInputChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleInputChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
