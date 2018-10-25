import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import TextField from "react-native-material-textfield/src/components/field";
import {logout, registerUser,checkLocalToken} from "../actions/authAction";
import {connect} from 'react-redux';

class Register extends Component{
    state = {
        email:'',
        password:'',
        password2:'',
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
        this.props.registerUser(this.state)
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

                    <TextField
                        label='Confirm Password'
                        value={this.state.password2}
                        onChangeText={ (password2) => this.setState({ password2 }) }
                        error={this.props.errors.password2}
                    />

                    <Button
                        full
                        rounded
                        style={{ marginTop: 10 }}
                        onPress={() => this.onSubmit()}>
                        <Text>Register</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}

Register.navigationOptions = ({ navigation }) => {
    return {
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                <Title>Register</Title>
                </Body>
                <Right />
            </Header>
        )
    };
};

const mapStateToProps = (state) => ({
    errors:state.errors,
    auth:state.auth
});

export default connect(mapStateToProps,{checkLocalToken,registerUser,logout})(Register);