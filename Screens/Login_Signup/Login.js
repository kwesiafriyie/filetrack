import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Keyboard,
  Animated,
  StatusBar,
  Image,ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  Center,
  Heading,
  Link,
  Button,
  Pressable,
  NativeBaseProvider,
  Text,
  Input,
  Icon,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextInput, { InputPassword, Btn } from "../../components/TextInput";

import SignUp from "./SignUp";

const Login = (params) => {
  const navigation = params.navigation;
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [headingOpacity] = useState(new Animated.Value(1));
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true);
        Animated.timing(headingOpacity, {
          toValue: 0,
          duration: 75,
          useNativeDriver: true,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
        Animated.timing(headingOpacity, {
          toValue: 1,
          duration: 75,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // ... previous code ...

  const handleLogin = async () => {
    setLoading(true);
    // const API_URL = "https://devstigar.pythonanywhere.com/";
    try {
      const response = await axios.post(`${API_URL}api/auth/login/`, {
        email_or_phone: emailOrPhone,
        password: password,
      });

      const { token } = response.data;

      // Save the token to AsyncStorage or any other secure storage
      await AsyncStorage.setItem("Token", token);

      // Set the token in the default headers of axios
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;

      console.log(response.data);
      alert("Login successful");
      
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.message;
        alert(`Login failed: ${errorMessage}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("An error occurred during account login");
      }
    }
    setLoading(false);
  };

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Center
          p={10}
          bgColor={"white"}
          flex={1}
          justifyContent={"center"}
          
          alignItems={"center"}
        >
          <Animated.View style={{ opacity: headingOpacity, alignSelf: "stretch" }}>
            {!isKeyboardVisible && (
              <Heading size="xl"  mb={3}>
                <Text fontFamily='Poppins-Bold' >Sign in</Text>
              </Heading>
            )}
          </Animated.View>

          <TextInput
            placeholder="Enter email or phone number"
            onChangeText={setEmailOrPhone}
            name="email_or_phone"
            value={emailOrPhone}
          />

          <InputPassword
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            p="2"
            alignSelf="flex-end"
            onPress={() => {
              navigation.navigate("PasswordReset");
            }}
          >
            <Text mb={5} color={"#4D47C3"}>
              Forgot Password?
            </Text>
          </Pressable>

          <Btn text="Login" onPress={handleLogin} />
          <ActivityIndicator animating={loading} size="large" color="#0000ff" />


         

          <Pressable
            p="2"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text textAlign={"center"}>
              If you don’t have an account, register.
              {"\n"}
              <Text color={"#4D47C3"}>Register here</Text>
            </Text>
          </Pressable>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Login;



