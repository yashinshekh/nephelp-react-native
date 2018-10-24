import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import Profile from "../ProfileScreen/Profile";

class Register extends Component{
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>
                        You are in register page.
                    </Text>
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

export default Register;