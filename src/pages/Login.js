import LoginRegister from "../assets/loginRegister.png";
import {
  Image,
  View,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  HStack,
  Flex,
} from "native-base";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { API } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);
      const response = await API.post("/auth/login", body, config);

      if (response) {
        await AsyncStorage.setItem("token", response.data.token);
        await AsyncStorage.setItem("email", form.email);
        await AsyncStorage.setItem("id", response.data.user._id);
        await AsyncStorage.setItem("email", response.data.user.email);
        await AsyncStorage.setItem("firstName", response.data.user.firstName);
      }

      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        alert(`Login berhasil!`);
        navigation.navigate("MyTab");
      }
    } catch (e) {
      console.log(e);
      alert("Email atau password salah!");
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("85%")}
      mt={50}
    >
      <View width="90%" justifyContent="center" mt={15} height={hp("80%")}>
        <Image
          maxWidth="100%"
          height={hp("26%")}
          source={LoginRegister}
          resizeMode="contain"
          alt="photo"
        />
        <View width={wp("85%")}>
          <Text
            fontSize={30}
            fontWeight="bold"
            position="relative"
            marginTop={50}
          >
            Login
          </Text>
        </View>
        <VStack width="100%" mt={4}>
          <FormControl>
            <Input
              placeholder="Email"
              backgroundColor="#0000001a"
              fontSize={15}
              name="email"
              onChangeText={(value) => handleChange("email", value)}
              value={form.email}
            />
          </FormControl>
          <FormControl mt={4}>
            <Input
              type="password"
              placeholder="Password"
              fontSize={15}
              backgroundColor="#0000001a"
              name="password"
              onChangeText={(value) => handleChange("password", value)}
              value={form.password}
            />
          </FormControl>
          <Button
            mt="6"
            backgroundColor="#FF5555"
            py={2}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={{ color: "white" }} fontSize={17}>
              Login
            </Text>
          </Button>
          <HStack mt="5" justifyContent="center">
            <Text
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
                textDecoration: "none",
              }}
              p={0}
              backgroundColor="none"
              onPress={() => navigation.navigate("Register")}
              fontSize={17}
            >
              Sign Up
            </Button>
          </HStack>
        </VStack>
      </View>
      <View width={wp("80%")}></View>
    </Flex>
  );
}

export default Login;
