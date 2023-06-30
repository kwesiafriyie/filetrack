import { useState } from "react";
import { TouchableOpacity, View, } from "react-native";
import {
  Center,
  Heading,
  Link,
  Button,
  Pressable,
  
  Input,Text,
  Icon,
} from "native-base";
import { MaterialCommunityIcons,Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from 'react'



export const Btn=(props)=> {
  return (
    <TouchableOpacity
  style={{
    width: 330,
    marginTop: 15,
    height: 55,
    backgroundColor: '#05A2D3',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 20, // Add elevation for drop shadow
    shadowColor: '#05A2D3', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  }}
  onPress={props.onPress}
>
  <Text
    fontFamily="Poppins-Regular"
    style={{
      marginTop: 15,
      color: 'white',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 15,
    }}
  >
    {props.text}
  </Text>
</TouchableOpacity>


  )
}







export const InputPassword = (props) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      

      h={58}
      width={322}
      borderWidth={2}
      fontSize={15}
      my={2}
      name="password"
      borderRadius={4}
      borderColor={"#DEDCDC"}
      fontFamily={'Poppins-Regular'}
      variant="outline"
      type={show ? "text" : "password"}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon
            as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
            size={5}
            mr="2"
            color="muted.400"
          />
        </Pressable>
      }
    />
  );
};



export const DressType = (props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#D7E0FF', width: 322, height: 55, borderRadius: 10, marginBottom: 18 }}
      onPress={props.onPress} // Pass the onPress prop to the TouchableOpacity
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, alignItems: 'center' }}>
        <Text fontFamily={'Poppins-Regular'} >{props.text}</Text>
        <Ionicons name="chevron-forward-sharp" size={18} />
      </View>
    </TouchableOpacity>
  );
};



export const TextView = (props) => {
  return (
    <>
    <Center
      h={39}
      width={322}
      w={props.width}
        variant="outline"
        
        
        fontSize={15}
        placeholder={props.placeholder}
        
        value={props.value}
        borderRadius={4}
        borderWidth={1}
        bgColor={"#F3F3F3"}
        borderColor={"#DEDCDC"}
        mb={2}
        my={1}
      >
         <Text
    fontFamily="Poppins-Regular"
    style={{
      width:200,
      color: 'black',
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
    }}
  >
    {props.text}
  </Text>
      </Center>
    </>
  );
};





const TextInput = (props) => {
  return (
    <>
      <Input
      h={58}
      width={322}
      w={props.width}
        variant="outline"
        
        
        fontSize={15}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        borderRadius={4}
        borderWidth={2}
        borderColor={"#DEDCDC"}
        mb={5}
        my={2}
      />
    </>
  );
};

export default TextInput;
