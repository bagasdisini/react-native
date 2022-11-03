import {
  View,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AddList() {
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
        <View width={wp("85%")}>
          <Text fontSize={20} fontWeight="bold" position="relative" style={{}}>
            Add List
          </Text>
        </View>
        <VStack flex="10%" mt={5}>
          <FormControl>
            <Input placeholder="Name" backgroundColor="#0000001a" style={{}} />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Category"
              backgroundColor="#0000001a"
              style={{}}
              mt={4}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Choose Date"
              backgroundColor="#0000001a"
              style={{}}
              mt={4}
            />
          </FormControl>
          <FormControl mt={4}>
            <TextArea
              h={40}
              placeholder="Description"
              backgroundColor="#0000001a"
              w="100%"
              maxW="300"
              style={{}}
            />
          </FormControl>
          <Button mt="6" backgroundColor="#FF5555" py={2}>
            <Text style={{ color: "white" }}>Add List</Text>
          </Button>
        </VStack>
      </View>
    </View>
  );
}

export default AddList;
