import { View, Text, Box, Button, ScrollView, Flex } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Moment from "moment";
import { AntDesign } from "@expo/vector-icons";

function Details({ navigation, route }) {
  const { user123 } = route.params;

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
                <Box
                  backgroundColor="#D9D9D9"
                  width={9}
                  height={9}
                  borderRadius={50}
                  mt={2}
                  ml={1}
                ></Box>
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
