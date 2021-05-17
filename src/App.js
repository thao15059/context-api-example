import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAngSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckOutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import CurrentUserContext from "./contexts/current-user/current-user.context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // just user ref not include data
        const userRef = await createUserProfileDocument(userAuth);
        // get data from userRef
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              currentUser: {
                id: userRef.id,
                ...snapShot.data(),
              },
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            path="/signin"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAngSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
