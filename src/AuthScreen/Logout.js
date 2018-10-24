import React,{Component} from 'react';
import {Text} from 'react-native';
import {logout} from "../actions/authAction";

import {connect} from 'react-redux';

class Logout extends Component{
    componentDidMount = () => {
        this.props.logout();
        this.props.navigation.navigate('Login')
    };

    render(){
        return(
            null
        )
    }
}

const mapDispatchToProps = (state) => ({
    auth:state.auth
});

export default connect(mapDispatchToProps,{logout})(Logout);