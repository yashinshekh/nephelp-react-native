import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import {connect} from 'react-redux';
import {checkLocalToken} from "../actions/authAction";


class SideBar extends React.Component {

    state ={
        isAuthenticated:false
    };

    componentDidMount = () => {
        this.props.checkLocalToken();
    };

    static getDerivedStateFromProps(nextProps,previosProps){
        return{
            isAuthenticated: nextProps.auth.isAuthenticated
        }
    }

  render() {
      let routes;

      if(this.state.isAuthenticated){
          routes = ["Home","Profile","Logout"]
      } else {
          routes = ["Login","Register"];
      }

    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (state) => ({
    auth:state.auth
});

export default connect(mapDispatchToProps,{checkLocalToken})(SideBar)