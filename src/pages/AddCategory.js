import {
  View,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  Flex,
  ScrollView,
} from "native-base";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { API } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AddCategory() {
  const [form, setForm] = useState({ id: null });
  const [dataCategory, setdataCategory] = useState([]);

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token === null) {
        navigation.navigate("Login");
      }

      const response = await API.post("/add-category", form, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      getCategory();
      alert(`Berhasil!`);
    } catch (e) {
      console.log(e);
      alert("Gagal!");
    }
  };

  const getCategory = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const id = await AsyncStorage.getItem("id");
      setForm({
        id,
      });
      if (token === null) {
        navigation.navigate("Login");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await API.get(`/category?$lookup=*&id=${id}`, config);
      setdataCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("85%")}
      mt={50}
    >
      <View width="90%" justifyContent="center" mt={15}>
        <View height="50%" mt={10}>
          <View width={wp("85%")}>
            <Text fontSize={30} fontWeight="bold" position="relative">
              Add Category
            </Text>
          </View>
          <VStack width="100%" mt={5}>
            <FormControl>
              <Input
                placeholder="Name"
                backgroundColor="#0000001a"
                fontSize={15}
                borderRadius="10"
                name="name"
                onChangeText={(value) => handleChange("name", value)}
                value={form.name}
              />
            </FormControl>
            <Button
              mt="6"
              backgroundColor="#FF5555"
              py={2}
              borderRadius="10"
              onPress={handleSubmit}
            >
              <Text style={{ color: "white" }} fontSize={17}>
                Add Category
              </Text>
            </Button>
          </VStack>
        </View>
        <View height="50%">
          <View width={wp("85%")} mt={-25}>
            <Text fontSize={30} fontWeight="bold" position="relative">
              List Category{" "}
            </Text>
          </View>
          <ScrollView
            width="100%"
            showsHorizontalScrollIndicator={false}
            mt={3}
          >
            <Flex width="100%" flexDirection="row" flexWrap="wrap">
              {dataCategory?.map((p) => (
                <Text
                  fontSize={15}
                  fontWeight="bold"
                  color="white"
                  style={{
                    backgroundColor: "#81C8FF",
                    alignSelf: "flex-start",
                  }}
                  py={1}
                  px={2}
                  borderRadius={8}
                  mt={3}
                  mx={2}
                  key={p._id}
                >
                  {p.name}
                </Text>
              ))}
            </Flex>
          </ScrollView>
        </View>
      </View>
    </Flex>
  );
}

export default AddCategory;
