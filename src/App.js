import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/header.component";
import SignInSignUp from "./Pages/SignIn-SignUp/signIn-signUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // firebase auth
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

class App extends React.Component {
  /*constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }*/

  unsubscribeFromAuth = null; //declare a null funciton to be reassigned later:

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObject => {
      if (userAuthObject) {
        const userRef = await createUserProfileDocument(userAuthObject);

        // listen to userRef's snapshot changes
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            userId: userRef.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuthObject);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route
            exact
            path={"/signin"}
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUp />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => {
  // function that gets the user object and then calls dispatch and dispatches setCurrentUser action with the user
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
