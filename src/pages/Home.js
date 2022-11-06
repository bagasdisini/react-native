import Photo from "../assets/1.jpg";
import {
  Image,
  View,
  Text,
  Button,
  VStack,
  Input,
  Box,
  Select,
  ScrollView,
  Flex,
  Modal,
} from "native-base";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DatePicker from "@dietime/react-native-date-picker";
import { API } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import Moment from "moment";

function Home({ navigation }) {
  const [cat, setCat] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState();
  const [list, setList] = useState();
  const [listCount, setListCount] = useState();
  const isFocused = useIsFocused();
  const [dataCategory, setdataCategory] = useState([]);

  console.log(list.status);

  const getUsers = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("id");

      if (token === null) {
        navigation.navigate("Login");
      }

      getCategory();

      const userResponse = await API.get(`/Users/${userId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const listCountResponse = await API.get(`/list1/count`, {});
      const listResponse = await API.get(`/list1?userId=${userId}`, {});

      setUser(userResponse.data.firstName);
      setListCount(listCountResponse.data.count);
      setList(listResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("id");

      if (token === null) {
        navigation.navigate("Login");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await API.get(
        `/category?userId=${userId}`,
        config
      );

      setdataCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDone = (_id) => {
    console.log(_id);
  
    let updatedList = list.data.map(item => 
      {
        if (item._id == _id){
          return {...item, status: !item.status}; //gets everything that was already in item, and updates "done"
        }
        return item; // else return unmodified item 
      });
      
      setList({list: updatedList}); // set state to new object with updated list
  }

  useEffect(() => {
    if (isFocused) {
      getUsers();
    }
  }, [isFocused]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("85%")}
      mt={75}
    >
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Select Date</Modal.Header>
          <Modal.Body>
            <View>
              <Text fontSize={15}>
                {date ? date.toDateString() : "Select date..."}
              </Text>
              <DatePicker
                value={date}
                onChange={(value) => setDate(value)}
                format="yyyy-mm-dd"
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

      <View justifyContent="center" width={wp("85%")}>
        <Flex width={wp("80%")} flexDirection="row">
          <View justifyContent="center" width="84%">
            <Text fontSize={30} fontWeight="bold" position="relative">
              Hi, {user}!
            </Text>
            <Text fontSize={16} position="relative" color="#FF5555" style={{}}>
              {listCount} lists
            </Text>
          </View>
          <Image
            source={Photo}
            resizeMode="contain"
            size="sm"
            borderRadius={50}
            alt="photo"
          />
        </Flex>
        <VStack w="100%" space={5} alignSelf="center" mt={4}>
          <Input
            placeholder="Search List"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="2"
            px="3"
            backgroundColor="#0000001a"
            fontSize={11}
          />
        </VStack>
        <Flex
          w="100%"
          space={5}
          alignSelf="center"
          mt={2}
          flexDirection="row"
          justifyContent="space-between"
        >
          <VStack w="31%" space={5} alignSelf="center">
            <View
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="3"
              backgroundColor="#0000001a"
              marginTop={1}
            >
              <Button
                fontSize={11}
                onPress={() => setShowModal(true)}
                backgroundColor="none"
                padding={0}
                py="4px"
                placeholder="Select Date"
                pl={-5}
                leftIcon={<AntDesign name="calendar" size={15} color="black" />}
              >
                <Text color="#999999" numberOfLines={1} style={{ width: 60 }}>
                  {date ? date.toDateString() : "Select date..."}
                </Text>
              </Button>
            </View>
          </VStack>
          <VStack w="31%" space={5} alignSelf="center">
            <Select
              selectedValue={service}
              fontSize={11}
              placeholder="Category"
              mt={1}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="3"
              backgroundColor="#0000001a"
              onValueChange={(itemValue) => setService(itemValue)}
            >
              {dataCategory?.map((p) => (
                <Select.Item label={p.name} value={p.name} key={p._id} />
              ))}{" "}
            </Select>
          </VStack>
          <VStack w="31%" space={5} alignSelf="center">
            <Select
              selectedValue={cat}
              accessibilityLabel="Status"
              placeholder="Status"
              mt={1}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="3"
              onValueChange={(itemValue) => setCat(itemValue)}
              fontSize={11}
              backgroundColor="#0000001a"
              sceneContainerStyle="transparent"
            >
              <Select.Item label="Progress" value="false" />
              <Select.Item label="Done" value="true" />
            </Select>
          </VStack>
        </Flex>
        <ScrollView
          width={wp("85%")}
          h="70%"
          showsHorizontalScrollIndicator={false}
          mt={3}
        >
          <View justifyContent="center" width={wp("85%")}>
            {list?.map((user) => (
              <Button
                backgroundColor="#F2F2F2"
                py={1}
                onPress={() => navigation.navigate("Detail", { user123: user })}
                key={user._id}
              >
                <Flex
                  backgroundColor="#DAEFFF"
                  flexDirection="row"
                  py={2}
                  px={4}
                  borderRadius={10}
                  my={2}
                >
                  <View width={wp("60%")}>
                    <Text fontSize={20} fontWeight="bold" mt={2}>
                      {user.name}
                    </Text>
                    <Text
                      fontSize={12}
                      style={{ color: "#9B9B9B" }}
                      width="90%"
                      mt={3}
                    >
                      {user.desc}{" "}
                    </Text>
                    <Text fontSize={12} mt={4} style={{ color: "#9B9B9B" }}>
                      <AntDesign name="calendar" size={13} color="grey" />{" "}
                      &nbsp;
                      {Moment(user.date).format("ll")}{" "}
                    </Text>
                  </View>
                  <View ml={4}>
                    <Box
                      backgroundColor="#81C8FF"
                      py={1}
                      px={2}
                      borderRadius={8}
                      mt={3}
                    >
                      <Text
                        textAlign="center"
                        fontSize={10}
                        fontWeight="bold"
                        color="white"
                        style={{}}
                      >
                        {user.category}
                      </Text>
                    </Box>
                    <Button p={0} backgroundColor="none" toggleDone={toggleDone}>
                      <Image
                        source={{
                          uri: "https://res.cloudinary.com/dy5ntbnnh/image/upload/v1667575351/Ellipse_1_pw31dv.png",
                        }}
                        width={9}
                        height={9}
                        alt="status"
                        mt={3}
                      ></Image>
                    </Button>
                  </View>
                </Flex>
              </Button>
            ))}
          </View>
        </ScrollView>
      </View>
    </Flex>
  );
}

export default Home;
