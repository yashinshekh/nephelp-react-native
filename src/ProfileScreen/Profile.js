import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

import { StackNavigator } from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
import {TextField} from 'react-native-material-textfield';

export default class Profile extends React.Component {

  state = {
      firstname:'',
      lastname:'',
      dob:'',
      passportno:'',
      nationality:'',
  };

  onSubmit = () => {
    console.log("Submit");
  };

  render() {
    return (
      <Container>
        <Content padder>
            <TextField
                label='First Name'
                value={this.state.firstname}
                onChangeText={ (firstname) => this.setState({ firstname }) }
            />
            <TextField
                label='Last Name'
                value={this.state.lastname}
                onChangeText={ (lastname) => this.setState({ lastname }) }
            />
            <TextField
                label='Date Of Birth'
                value={this.state.dob}
                onChangeText={ (dob) => this.setState({ dob }) }
            />
            <TextField
                label='Passport No'
                value={this.state.passportno}
                onChangeText={ (passportno) => this.setState({ passportno }) }
            />
            <TextField
                label='Nationality'
                value={this.state.nationality}
                onChangeText={ (nationality) => this.setState({ nationality }) }
            />

            <Button
                full
                rounded
                style={{ marginTop: 10 }}
                onPress={() => this.onSubmit()}>
                <Text>Save</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};
