import LandingPict from "../assets/landing.png";
import { Image, View, Text, Button, Flex, HStack } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Landing({ navigation }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("85%")}
      mt={50}
    >
      <View width="70%" justifyContent="center" height={hp("80%")}>
        <Image
          maxWidth="100%"
          height={hp("35%")}
          source={LandingPict}
          resizeMode="contain"
          alt="photo"
        />
        <View width={wp("70%")}>
          <Text
            textAlign="center"
            fontSize={50}
            fontWeight="bold"
            position="relative"
            marginTop={-5}
          >
            Ways <Text color="#B82020">To</Text>
            <Text color="#FF5555">Do</Text>
          </Text>
          <Text textAlign="center" fontSize={17} marginTop={15}>
            Write and finish your activity.
          </Text>
          <Text textAlign="center" fontSize={17}>
           Fast, Simple and Easy to Use
          </Text>
        </View>
      </View>
      <View width={wp("80%")} mt={8} height={hp("20%")}>
        <Button
          backgroundColor="#FF5555"
          width="100%"
          marginBottom={4}
          fontWeight="bold"
          padding={2}
          onPress={() => navigation.navigate("Login")}
        >
          <Text color="white" fontSize={17}>Login</Text>
        </Button>
        <Button
          backgroundColor="#0000004f"
          width="100%"
          fontWeight="bold"
          padding={2}
          onPress={() => navigation.navigate("Register")}
        >
          <Text color="white" fontSize={17}>Register</Text>
        </Button>
      </View>
    </Flex>
  );
}

export default Landing;
