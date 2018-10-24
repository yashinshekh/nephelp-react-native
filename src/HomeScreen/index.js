import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import ProfileScreen from "../ProfileScreen/index.js";
import AuthScreen from "../AuthScreen/index";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
      Home: { screen: HomeScreen },
      ProfileScreen: { screen: ProfileScreen },
      LoginScreen:{screen:AuthScreen},
      RegisterScreen:{screen:AuthScreen},
      LogoutScreen:{screen:AuthScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
