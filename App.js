import React, { Component } from "react";
import Expo from "expo";
import HomeScreen from "./src/HomeScreen/index.js";
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './src/reducer/index';

const initalState = {};
const middleware = [thunk];
const store = createStore(
    reducers,
    initalState,
    compose(
        applyMiddleware(...middleware)
    )
);


class AwesomeApp extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return(
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        )
    }
}

export default AwesomeApp;