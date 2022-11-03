import { View, Text, Box, Button, ScrollView } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

function Details({ navigation }) {
  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={hp("90%")}
      mt={30}
    >
      <View flex="90%" justifyContent="center" width={wp("85%")}>
        <Button
          alignSelf="start"
          backgroundColor="none"
          onPress={() => navigation.navigate("MyTab")}
        >
          <Ionicons name="arrow-undo-outline" size={25} color="black" />
        </Button>
        <ScrollView
          width={wp("85%")}
          h="80"
          showsHorizontalScrollIndicator={false}
          mt={3}
        >
          <View
            backgroundColor="#DAEFFF"
            py={3}
            px={4}
            borderRadius={10}
            my={2}
          >
            <View
              backgroundColor="#DAEFFF"
              display="flex"
              flexDirection="row"
              borderRadius={10}
              my="auto"
            >
              <View width={wp("60%")}>
                <Text fontSize={20} fontWeight="bold" my="auto" style={{}}>
                  Study - Golang
                </Text>
              </View>
              <View>
                <Box backgroundColor="#81C8FF" py={1} px={2} borderRadius={8}>
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
            <View mt={3} width={wp("75%")}>
              <Text fontSize={11} style={{ color: "#9B9B9B" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque imperdiet massa ac tincidunt scelerisque. Morbi vel
                turpis maximus, pulvinar metus quis, mattis neque. Pellentesque
                ut nulla lectus. Nulla ut vulputate risus, non ultricies mauris.
                Suspendisse posuere velit pellentesque felis posuere, a volutpat
                diam cursus. In iaculis risus nunc, sollicitudin varius ante
                blandit vel. Sed nec nisi hendrerit, vulputate est eget, luctus
                nisi. Donec quis lobortis nulla. Fusce rutrum lobortis ex id
                vestibulum. Sed elementum sagittis nibh, sed venenatis lectus
                efficitur non. Mauris metus magna, luctus vitae nunc non,
                blandit blandit velit. Nunc bibendum neque a dolor rhoncus
                semper at eget.
              </Text>
              <Text fontSize={8} mt={5} style={{ color: "#9B9B9B" }}>
                19 July 2022
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Details;
