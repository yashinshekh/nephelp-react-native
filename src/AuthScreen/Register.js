import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import TextField from "react-native-material-textfield/src/components/field";
import {registerUser} from "../actions/authAction";
import {connect} from 'react-redux';

class Register extends Component{
    state = {
        email:'',
        password:'',
        password2:'',
        errors:{}
    };

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
                        error={this.state.errors.email}
                    />
                    <TextField
                        label='Password'
                        value={this.state.password}
                        onChangeText={ (password) => this.setState({ password }) }
                        error={this.state.errors.password}
                    />

                    <TextField
                        label='Confirm Password'
                        value={this.state.password2}
                        onChangeText={ (password2) => this.setState({ password2 }) }
                        error={this.state.errors.password2}
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
    errors:state.errors
});

export default connect(mapStateToProps,{registerUser})(Register);