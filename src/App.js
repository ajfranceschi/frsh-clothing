import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/header.component";
import SignInSignUp from "./Pages/SignIn-SignUp/signIn-signUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // firebase auth

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null; //declare a null funciton to be reassigned later:

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObject => {
      if (userAuthObject) {
        const userRef = await createUserProfileDocument(userAuthObject);

        // listen to userRef's snapshot changes
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              userId: userRef.id,
              ...snapshot.data()
            }
          });
        });
      }
      this.setState({ currentUser: null });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path={"/signin"} component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
