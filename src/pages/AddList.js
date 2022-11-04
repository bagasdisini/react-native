import {
  View,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  TextArea,
  Flex,
  Modal,
  Select,
} from "native-base";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { API } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "@dietime/react-native-date-picker";
import { AntDesign } from "@expo/vector-icons";

function AddList() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState({ id: null });
  const [date, setDate] = useState(new Date());
  const [dataCategory, setdataCategory] = useState([]);

  function handleChange(name, value) {
    setList({
      ...list,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token === null) {
        navigation.navigate("Login");
      }

      const response = await API.post("/add-list", list, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

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
      setList({
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
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Select Date</Modal.Header>
          <Modal.Body>
            <View>
              <Text fontSize={15}>
                {list.date ? list.date.toDateString() : "Select date"}
              </Text>
              <DatePicker
                value={list.date ? list.date : new Date()}
                onChange={(value) => handleChange("date", value)}
                format="yyyy-mm-dd"
                name="date"
              />
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <View width="90%" justifyContent="center" mt={15}>
        <View width={wp("85%")}>
          <Text fontSize={30} fontWeight="bold" position="relative">
            Add List
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
              value={list.name}
            />
          </FormControl>
          <FormControl>
            <Select
              fontSize={15}
              placeholder="Category"
              mt={4}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="3"
              px="3"
              backgroundColor="#0000001a"
              onValueChange={(value) => handleChange("category", value)}
            >
              {" "}
              {dataCategory?.map((p) => (
                <Select.Item label={p.name} value={p.name} />
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Button
              fontSize={15}
              onPress={() => setShowModal(true)}
              backgroundColor="#0000001a"
              padding={0}
              borderRadius="10"
              py={4}
              mt={4}
              placeholder="Select Date"
              leftIcon={<AntDesign name="calendar" size={15} color="black" />}
            >
              <Text color="black" numberOfLines={1} style={{ width: 300 }}>
                {list.date ? list.date.toDateString() : "Select date"}
              </Text>
            </Button>
          </FormControl>
          <FormControl mt={4}>
            <TextArea
              h={40}
              placeholder="Description"
              backgroundColor="#0000001a"
              w="100%"
              fontSize={15}
              borderRadius="10"
              name="desc"
              onChangeText={(value) => handleChange("desc", value)}
              value={list.desc}
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
              Add List
            </Text>
          </Button>
        </VStack>
      </View>
    </Flex>
  );
}

export default AddList;
