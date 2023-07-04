import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Keyboard,
  Animated,
  StatusBar,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  Center,
  Heading,
  Link,
  Button,
  Pressable,
  NativeBaseProvider,
  Box,
  Text,
  Input,
  Icon,
} from "native-base";

const FileMgt = (navigation) => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Box flex={1} p={5}>
          <Center
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="md-chevron-back-sharp" size={30} />
            </TouchableOpacity>
            <Heading fontFamily="Poppins-Bold" size="lg">
              File Management
            </Heading>

            <Text></Text>
          </Center>

          <View
            style={{
              alignContent: "center",
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            <Input
              h={50}
              width={322}
              borderWidth={1}
              fontSize={15}
              variant="outline"
              borderRadius={4}
              borderColor={"#ccc"}
              w="xs"
              // value={searchInput}
              fontFamily={"Poppins-Light"}
              placeholder="Search item"
              // onChangeText={handleSearchInput}
              name="searchInput"
              mt={3}
              // onSubmitEditing={handleSearch} // Handle search on submit
              InputRightElement={
                <Pressable>
                  <Icon
                    as={MaterialIcons}
                    name="search"
                    size={6}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
            />
          </View>

          <Box marginTop={5}>
            <Heading>
              <Text>My Files</Text>
            </Heading>

            <Center
              flexDirection={"row"}
              justifyContent={"space-around"}
              marginTop={5}
            >
              <Box flexDirection={"column"}>
                <Box
                  height={125}
                  width={167}
                  backgroundColor={"warmGray.200"}
                  borderRadius={10}
                >
                  <Box height={83} width={167} backgroundColor={"#05A2D3"}>
                    {" "}
                    <Text textAlign={"center"} color={"white"}>
                      467 {"\n"}files
                    </Text>
                  </Box>
                  <Text textAlign={"center"}>All files</Text>
                </Box>
              </Box>
              <Box flexDirection={"column"}>
                <Box
                  height={125}
                  width={167}
                  backgroundColor={"warmGray.200"}
                  borderRadius={10}
                >
                  <Box height={83} width={167} backgroundColor={"#05A2D3"}>
                    {""}
                    <Text textAlign={"center"} color={"white"}>
                      26 {"\n"}files
                    </Text>
                  </Box>
                  <Text textAlign={"center"}>Borrowed files</Text>
                </Box>
              </Box>
            </Center>
          </Box>

          <Center
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt={5}
          >
            <Heading fontFamily="Poppins-Bold" size="lg">
              Reports and Statistics
            </Heading>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="md-chevron-forward-sharp" size={30} />
            </TouchableOpacity>
          </Center>

          <Center mt={5}>
            <Image source={require("../../assets/img/Statistics.png")} />
          </Center>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default FileMgt;
