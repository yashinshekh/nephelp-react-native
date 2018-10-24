import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";


class Login extends Component{
    state = {
        email:'',
        password:'',
        password2:'',
        errors:{}
    };

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        You are in login page.
                    </Text>
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

export default Login;