import LoginRegister from "../assets/loginRegister.png";
import {
  Image,
  View,
  Text,
  Button,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  HStack,
  Center,
  NativeBaseProvider,
  Touchable,
} from "native-base";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("85%")}
      mt={50}
    >
      <View flex="90%" justifyContent="center" mt={15}>
        <Image
          maxWidth="100%"
          height={hp("26%")}
          source={LoginRegister}
          resizeMode="contain"
        />
        <View width={wp("85%")}>
          <Text
            fontSize={20}
            fontWeight="bold"
            position="relative"
            marginTop={50}
            style={{}}
          >
            Login
          </Text>
        </View>
        <VStack flex="10%" mt={4}>
          <FormControl>
            <Input placeholder="Email" backgroundColor="#0000001a" style={{}} />
          </FormControl>
          <FormControl mt={4}>
            <Input
              type="password"
              placeholder="Password"
              backgroundColor="#0000001a"
              style={{}}
            />
          </FormControl>
          <Button
            mt="6"
            backgroundColor="#FF5555"
            py={2}
            onPress={() => navigation.navigate("MyTab")}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Button>
          <HStack mt="3" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              style={{}}
            >
              I'm a new user.{" "}
            </Text>
            <Button
              _text={{
                color: "#FF5555",
                fontWeight: "medium",
                fontSize: "sm",
                textDecoration: "none",
              }}
              p={0}
              backgroundColor="none"
              onPress={() => navigation.navigate("Register")}
            >
              Sign Up
            </Button>
          </HStack>
        </VStack>
      </View>
      <View width={wp("80%")} flex="30%"></View>
    </View>
  );
}

export default Login;
