import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";


export default (DrawNav = createStackNavigator(
    {
        Login:{screen:Login},
        Register:{screen: Register},
        Logout:{screen:Logout}
    },
    {
        initalRouteName:"Login"
    }
))