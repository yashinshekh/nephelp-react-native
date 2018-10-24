import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from "./Login";
import Register from "./Register";


export default (DrawNav = createStackNavigator(
    {
        Login:{screen:Login},
        Register:{screen: Register}
    },
    {
        initalRouteName:"Login"
    }
))