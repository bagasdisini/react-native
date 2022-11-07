import { View, Text, Box, Button, ScrollView, Flex, Image } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../config/api";

function Details({ navigation, route }) {
  const { user123 } = route.params;

  const updateTodo = async ({ id, name, desc, status, category, userId }) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        navigation.navigate("Login");
      }

      const data = {
        category: category,
        desc: desc,
        userId: userId,
        name: name,
        status: !status,
      };

      await API.patch(`/list1/${id}`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("84%")}
      mt={8}
    >
      <View justifyContent="center" width={wp("85%")}>
        <ScrollView
          width={wp("85%")}
          h="100%"
          showsHorizontalScrollIndicator={false}
        >
          <View
            backgroundColor="#DAEFFF"
            py={3}
            px={4}
            borderRadius={10}
            my={2}
          >
            <Flex
              backgroundColor="#DAEFFF"
              flexDirection="row"
              borderRadius={10}
              my="auto"
            >
              <View width={wp("60%")}>
                <Text fontSize={20} fontWeight="bold" my="auto" style={{}}>
                  {user123.name}
                </Text>
              </View>
              <View>
                <Box backgroundColor="#81C8FF" py={1} px={2} borderRadius={8}>
                  <Text fontSize={10} fontWeight="bold" color="white">
                    {user123.category}
                  </Text>
                </Box>
                <TouchableOpacity
                  p={0}
                  onPress={() =>
                    updateTodo({
                      id: user123._id,
                      name: user123.name,
                      desc: user123.desc,
                      status: user123.status,
                      category: user123.category,
                      userId: user123.userId,
                    })
                  }
                >
                  <Image
                    source={
                      user123.status
                        ? {
                            uri: "https://res.cloudinary.com/dy5ntbnnh/image/upload/v1667575351/Vector_bwiitx.png",
                          }
                        : {
                            uri: "https://res.cloudinary.com/dy5ntbnnh/image/upload/v1667575351/Ellipse_1_pw31dv.png",
                          }
                    }
                    width={9}
                    height={9}
                    alt="status"
                    mt={3}
                  ></Image>
                </TouchableOpacity>
              </View>
            </Flex>
            <View mt={3} width={wp("75%")}>
              <Text fontSize={15} style={{ color: "#9B9B9B" }}>
                {user123.desc}
              </Text>
              <Text fontSize={15} mt={5} style={{ color: "#9B9B9B" }}>
                <AntDesign name="calendar" size={15} color="black" /> &nbsp;
                {Moment(user123.date).format("ll")}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Flex>
  );
}

export default Details;
