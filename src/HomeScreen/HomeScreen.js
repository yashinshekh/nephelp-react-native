import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import {TextField} from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {sendEmail} from "../actions/authAction";
import {checkLocalToken} from "../actions/authAction";

class HomeScreen extends React.Component {

  state = {
      subject:'',
      description : ''
  };

    componentDidMount = () => {
        this.props.checkLocalToken();
    };

    static getDerivedStateFromProps(nextProps,previosProps){
        if(!nextProps.auth.isAuthenticated){
            nextProps.navigation.navigate('Login')
        }
        return null;
    }

  onSubmit = () => {
      this.props.sendEmail(this.state);
      this.setState({subject:''});
      this.setState({description:''});
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>NepHelp</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
            <TextField
                label='Subject'
                value={this.state.subject}
                onChangeText={ (subject) => this.setState({ subject }) }
            />
            <TextField
                label='Description (Please leave your contact details if possible)'
                value={this.state.description}
                onChangeText={ (description) => this.setState({ description }) }
                multiline={true}
            />

            <Button
                full
                rounded
                style={{ marginTop: 10 }}
                onPress={() => this.onSubmit()}>
                <Text>Submit Request</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (state) => ({
    auth:state.auth
});

export default connect(mapDispatchToProps,{sendEmail,checkLocalToken})(HomeScreen);
