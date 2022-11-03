import Photo from "../assets/1.jpg";
import Details from "./Details";
import {
  Image,
  View,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  Link,
  HStack,
  Box,
  Heading,
  Select,
  Divider,
  CheckIcon,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({ navigation }) {
  const [cat, setCat] = useState("");
  const [service, setService] = useState("");

  const Profile = [
    {
      id: 1,
      title: "jedeye__",
      status: "Complete",
      description:
        "Learn Golang to improve fundamentals and familiarize with coding.",
      date: "12 June 2022",
    },
    {
      id: 2,
      title: "jedeye__",
      status: "Complete",
      description:
        "Learn Golang to improve fundamentals and familiarize with coding.",
      date: "12 June 2022",
    },
    {
      id: 3,
      title: "jedeye__",
      status: "Complete",
      description:
        "Learn Golang to improve fundamentals and familiarize with coding.",
      date: "12 June 2022",
    },
    {
      id: 4,
      title: "jedeye__",
      status: "Complete",
      description:
        "Learn Golang to improve fundamentals and familiarize with coding.",
      date: "12 June 2022",
    },
  ];

  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("85%")}
      mt={50}
    >
      <View flex="90%" justifyContent="center" width={wp("85%")}>
        <View display="flex" width={wp("85%")} flexDirection="row">
          <View justifyContent="center" width="84%">
            <Text
              fontSize={20}
              fontWeight="bold"
              position="relative"
              style={{}}
            >
              Hi, Bagas!
            </Text>
            <Text fontSize={13} position="relative" color="#FF5555" style={{}}>
              200 lists
            </Text>
          </View>
          <Image
            source={Photo}
            resizeMode="contain"
            width="10"
            height="10"
            borderRadius={50}
          />
        </View>
        <VStack w="100%" space={5} alignSelf="center" mt={4}>
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="2"
            px="3"
            style={{}}
          />
        </VStack>
        <View
          w="100%"
          space={5}
          alignSelf="center"
          mt={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <VStack w="31%" space={5} alignSelf="center">
            <Input
              placeholder="Search"
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="3"
              style={{}}
            />
          </VStack>
          <VStack w="31%" space={5} alignSelf="center">
            <Select
              selectedValue={service}
              placeholder="Category"
              mt={1}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="3"
              onValueChange={(itemValue) => setService(itemValue)}
              dropdownCloseIcon
              style={{}}
            >
              <Select.Item label="Study" value="study" style={{}} />
              <Select.Item label="Work" value="work" style={{}} />
            </Select>
          </VStack>
          <VStack w="31%" space={5} alignSelf="center">
            <Select
              selectedValue={cat}
              placeholder="Status"
              mt={1}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="2"
              px="3"
              onValueChange={(itemValue) => setCat(itemValue)}
              dropdownCloseIcon
              style={{}}
            >
              <Select.Item label="Progress" value="progress" style={{}} />
              <Select.Item label="Done" value="done" style={{}} />
            </Select>
          </VStack>
        </View>
        <ScrollView
          width={wp("85%")}
          h="80"
          showsHorizontalScrollIndicator={false}
          mt={3}
        >
          <View justifyContent="center" width={wp("85%")}>
            {Profile.map((p, index) => (
              <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <View
                  backgroundColor="#DAEFFF"
                  display="flex"
                  flexDirection="row"
                  py={2}
                  px={4}
                  borderRadius={10}
                  my={2}
                  onPress={() => navigation.navigate("Detail")}
                  key={index}
                >
                  <View width={wp("60%")}>
                    <Text fontSize={13} fontWeight="bold" style={{}}>
                      {p.title}
                    </Text>
                    <Text fontSize={8} style={{ color: "#9B9B9B" }} width="90%">
                      {p.description}
                    </Text>
                    <Text fontSize={8} mt={4} style={{ color: "#9B9B9B" }}>
                      {p.date}
                    </Text>
                  </View>
                  <View>
                    <Box
                      backgroundColor="#81C8FF"
                      py={1}
                      px={2}
                      borderRadius={8}
                    >
                      <Text
                        fontSize={10}
                        fontWeight="bold"
                        color="white"
                        style={{}}
                      >
                        Study
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
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;
