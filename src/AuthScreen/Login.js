import React,{Component} from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {TextField} from 'react-native-material-textfield';

class Login extends Component{
    state = {
        email:'',
        password:'',
        errors:{}
    };

    onSubmit = () => {
        console.log(this.state);
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
})

export default Login;