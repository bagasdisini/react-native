import LandingPict from "../assets/landing.png";
import { Image, View, Text, Button } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Landing({ navigation }) {
  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("85%")}
      mt={50}
    >
      <View flex="70%" justifyContent="center">
        <Image
          maxWidth="100%"
          height={hp("35%")}
          source={LandingPict}
          resizeMode="contain"
        />
        <View width={wp("70%")}>
          <Text
            textAlign="center"
            fontSize={35}
            fontWeight="bold"
            position="relative"
            marginTop={-5}
            style={{}}
          >
            Ways <Text color="#B82020">To</Text>
            <Text color="#FF5555">Do</Text>
          </Text>
          <Text textAlign="center" fontSize={12} marginTop={5} style={{}}>
            Write and finish your activity. <br></br>Fast, Simple and Easy to
            Use
          </Text>
        </View>
      </View>
      <View width={wp("80%")} flex="30%" justifyContent="end">
        <Button
          backgroundColor="#FF5555"
          width="100%"
          marginBottom={4}
          fontWeight="bold"
          padding={2}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{}} color="white">
            Login
          </Text>
        </Button>
        <Button
          backgroundColor="#0000004f"
          width="100%"
          fontWeight="bold"
          padding={2}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{}} color="white">
            Register
          </Text>
        </Button>
      </View>
    </View>
  );
}

export default Landing;
