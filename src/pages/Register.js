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

function Register({ navigation }) {
  const [form, setForm] = useState("");

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    try {
      
      const response = await API.post("/auth/register", form);
      alert(`Register berhasil!`);
      navigation.navigate("Login");

    } catch (e) {

      console.log(e);
      alert("Register gagal!");

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
      <View width="90%" justifyContent="center" mt={15}>
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
            style={{}}
          >
            Register
          </Text>
        </View>
        <VStack width="100%" mt={4}>
          <FormControl>
            <Input
              placeholder="Name"
              backgroundColor="#0000001a"
              fontSize={15}
              name="firstName"
              onChangeText={(value) => handleChange("firstName", value)}
              value={form.firstName}
            />
          </FormControl>
          <FormControl mt={4}>
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
              backgroundColor="#0000001a"
              fontSize={15}
              name="password"
              onChangeText={(value) => handleChange("password", value)}
              value={form.password}
            />
          </FormControl>
          <Button
            mt="6"
            backgroundColor="#FF5555"
            py={2}
            onPress={handleSubmit}
          >
            <Text style={{ color: "white" }} fontSize={17}>
              Register
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
              Joined us before?{" "}
            </Text>
            <Text
              style={{
                color: "#FF5555",
                textDecoration: "none",
              }}
              fontWeight="medium"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </HStack>
        </VStack>
      </View>
      <View width={wp("80%")}></View>
    </Flex>
  );
}

export default Register;
