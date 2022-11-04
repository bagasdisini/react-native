import { View, Text, Box, Button, ScrollView, Flex } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

function Details({ navigation }) {
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
                  Study - Golang
                </Text>
              </View>
              <View>
                <Box backgroundColor="#81C8FF" py={1} px={2} borderRadius={8}>
                  <Text
                    fontSize={10}
                    fontWeight="bold"
                    color="white"
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
            </Flex>
            <View mt={3} width={wp("75%")}>
              <Text fontSize={15} style={{ color: "#9B9B9B" }}>
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
                semper at eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              <Text fontSize={15} mt={5} style={{ color: "#9B9B9B" }}>
                19 July 2022
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Flex>
  );
}

export default Details;
