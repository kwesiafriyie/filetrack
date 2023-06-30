import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Keyboard,
  Animated,
  StatusBar,
  Image,ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons, Ionicons,Octicons, Entypo,MaterialIcons } from "@expo/vector-icons";

import {
  Center,
  Heading,
  Link,
  Button,
  Pressable,
  NativeBaseProvider,Box,
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
            Customer List
          </Heading>


          <Text></Text>
        </Center></Box>
         

       
  
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default FileMgt;



