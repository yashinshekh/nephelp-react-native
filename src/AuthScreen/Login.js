import React,{Component} from 'react';
import {Text,View,TextInput,StyleSheet,Keyboard} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {TextField} from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {loginUser, checkLocalToken, logout} from "../actions/authAction";

class Login extends Component{
    state = {
        email:'',
        password:'',
        errors:{}
    };

    componentDidMount = () => {
        this.props.checkLocalToken();
    };

    static getDerivedStateFromProps(nextProps,previosProps){
        if(nextProps.auth.isAuthenticated){
            nextProps.navigation.navigate('Home')
        }
        return null;
    }

    onSubmit = () => {
        this.props.loginUser(this.state);
        Keyboard.dismiss();
    };

    render() {
        return (
            <Container >
                <Content padder>
                    <TextField
                        label='Email'
                        value={this.state.email}
                        onChangeText={ (email) => this.setState({ email }) }
                        error={this.props.errors.email}
                    />
                    <TextField
                        label='Password'
                        value={this.state.password}
                        onChangeText={ (password) => this.setState({ password }) }
                        error={this.props.errors.password}
                    />

                    <Button
                        full
                        rounded
                        style={{ marginTop: 10 }}
                        onPress={() => this.onSubmit()}>
                        <Text>Login</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}

Login.navigationOptions = ({ navigation }) => {
    return {
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                <Title>Login</Title>
                </Body>
                <Right />
            </Header>
        )
    };
};

const styles = StyleSheet.create({
    textsyle:{
        flex:1,
        marginLeft: 5,
        marginRight: 5
    }
});

const mapStateToProps = (state) => ({
    errors:state.errors,
    auth:state.auth
});

export default connect(mapStateToProps,{loginUser,checkLocalToken,logout})(Login);