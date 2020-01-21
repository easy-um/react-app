import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { LoginPage, SignupPage, AddProductPage } from "../pages";
import { MainPage } from '../../containers/MainPage/MainPage'
import { PostPage } from '../../containers/PostPage/PostPage'

import { MainLayout } from '../layout/main/Main'

export default class App extends Component {
  maxIdUser = 1;
  maxIdProduct = 1;

  state = {
    isLoggedIn: false,
    isAdmin: false,
    usersData: [{ email: 'admin', password: 'admin', id: 1 }],
    productsData: [],
    adminCredentials: {
      email: 'admin',
      password: '123'
    },
  };

  funcUser(email, password) {
    return {
      email,
      password,
      id: this.maxIdUser++
    };
  };

  funcProduct(title, price) {
    return {
      title,
      price,
      id: this.maxIdProduct++
    };
  };


  onLogin = (email, password) => {
    // lets check admin creds
    if (email === this.state.adminCredentials.email && password === this.state.adminCredentials.password) {
      this.setState({ isAdmin: true, isLoggedIn: true })
    }
  };

  onSignUp = (email, password) => {
    const newUser = this.funcUser(email, password);

    this.setState(({ usersData }) => {
      const newArr = [...usersData, newUser];

      return {
        usersData: newArr
      };
    });
  };

  onAddProduct = (title, price) => {
    const newProduct = this.funcProduct(title, price);

    this.setState(({ productsData }) => {
      const newArr = [...productsData, newProduct];

      return {
        productsData: newArr
      };
    });
  };

  render() {
    const { isLoggedIn, isAdmin } = this.state;

    return (
      <MainLayout
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        onLogout={() => this.setState({ isAdmin: false, isLoggedIn: false })}>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/login" exact >
            <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
          </Route>

          <Route path="/signup" exact>
            <SignupPage onSignUp={this.onSignUp.bind(this)} />
          </Route>

          <Route path="/addProduct" exact >
            <AddProductPage onAddProduct={this.onAddProduct} />
          </Route>

          <Route path="/post/:postId" exact>
            <PostPage />
          </Route>

        </Switch>
      </MainLayout>
    );
  }
}
