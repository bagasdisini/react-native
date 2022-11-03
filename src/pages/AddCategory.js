import { View, Text, Button, VStack, FormControl, Input } from "native-base";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AddCategory() {
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
          <Text fontSize={20} fontWeight="bold" position="relative">
            Add Category
          </Text>
        </View>
        <VStack flex="10%" mt={5}>
          <FormControl>
            <Input placeholder="Name" backgroundColor="#0000001a" />
          </FormControl>
          <Button mt="6" backgroundColor="#FF5555" py={2}>
            <Text style={{ color: "white" }}>Add Category</Text>
          </Button>
        </VStack>
        <View width={wp("85%")}>
          <Text fontSize={20} fontWeight="bold" position="relative">
            List Category{" "}
          </Text>
        </View>
        <VStack flex="20%" display="flex">
          <Text
            fontSize={10}
            fontWeight="bold"
            color="white"
            style={{ backgroundColor: "#81C8FF", alignSelf: "flex-start" }}
            py={1}
            px={2}
            borderRadius={8}
            mt={3}
          >
            Study
          </Text>
        </VStack>
      </View>
    </View>
  );
}

export default AddCategory;
