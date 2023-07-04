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
  Divider,
} from "native-base";


const Profile= (navigation) => {
 

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
            Profile
          </Heading>


          <Text></Text>
        </Center>
        
        <Center mb={5}>
          <Image source={require('../../assets/img/User-Icon.png')} style={{width:110, height:110, marginTop:15}}/>
        </Center>

        <Text textAlign={'center'} mb={5} fontSize={16}>La Nkwantanang Madina Municipal {'\n'} Assembly</Text>
        
       <Divider/>


       <Box flexDirection={'column'} mt={5} justifyContent={'space-between'} >
        <Box flexDirection={'row'} mb={7} >

        <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="bell-badge-outline" size={30} style={{marginRight:10}} />
              
            </TouchableOpacity>

            <Text fontSize={18}>Create New Files</Text>


        </Box>

        <Box flexDirection={'row'} mb={7}>

<TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="bell-badge-outline" size={30} style={{marginRight:10}} />
      
    </TouchableOpacity>

    <Text fontSize={18}>Create New Files</Text>


</Box>


<Box flexDirection={'row'} mb={7}>

<TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="bell-badge-outline" size={30} style={{marginRight:10}} />
      
    </TouchableOpacity>

    <Text fontSize={18}>Create New Files</Text>


</Box>



<Box flexDirection={'row'} mb={7}>

<TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="bell-badge-outline" size={30} style={{marginRight:10}} />
      
    </TouchableOpacity>

    <Text fontSize={18}>Create New Files</Text>


</Box>


<Box flexDirection={'row'} mb={7}>

<TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="bell-badge-outline" size={30} style={{marginRight:10}} />
      
    </TouchableOpacity>

    <Text fontSize={18}>Create New Files</Text>


</Box>



       </Box>
        </Box>
         

       
  
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Profile;



