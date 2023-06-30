import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Keyboard,
  Animated,
  StatusBar,
  Image,
  TouchableOpacity,ActivityIndicator,
} from "react-native";
import {
  Center,
  Heading,
  Pressable,
  Text,
  ScrollView,
  NativeBaseProvider,
} from "native-base";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import TextInput, { Btn, InputPassword } from "../../components/TextInput";

const SignUp = () => {
  const navigation = useNavigation();

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phone_number, setPhone] = useState("");
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
          duration: 0,
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
          duration: 0,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const Handlesignup = () => {
    setLoading(true)
    // const API_URL = "https://devstigar.pythonanywhere.com";

    // Log the entered data
    console.log("Full Name:", full_name);
    console.log("Email:", email);
    console.log("Phone Number:", phone_number);
    console.log("Password:", password);
    console.log("Confirm Password:", confirm_password);

    try {
      axios
        .post(`${API_URL}/api/auth/register/`, {
          full_name: full_name,
          email: email,
          phone_number: phone_number,
          password: password,
          confirm_password: confirm_password,
        })
        .then((response) => {
          console.log(response.data);
          const phoneData = response.data.data.phone_number;
          const messageData = response.data.message;
          alert(messageData);
          navigation.navigate("OTP", { data: phoneData });
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            // Server responded with a status code outside the range of 2xx
            const errorMessage =
              error.response.data.message || "Account creation failed";
            alert(errorMessage);
          } else if (error.request) {
            // The request was made but no response was received
            alert("No response received from the server");
          } else {
            // Something happened in setting up the request that triggered an Error
            alert("An error occurred during the request");
          }
        });
    } catch (error) {
      console.error(error);
      alert("An error occurred during account creation");
    }

    setLoading(false)
  };

  

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Center
        style={{
          flex: 1,
          paddingTop:5,
          backgroundColor: "white",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Center
            flex={1}
            p={10}
            justifyContent="center"
            bgColor="white"
            alignItems="center"
          >
            <Animated.View style={{ opacity: headingOpacity, alignSelf: "stretch" }}>
              {!isKeyboardVisible && (
                <Heading  mb={3} size="xl">
                  <Text fontFamily={'Poppins-Bold'}>Sign up</Text>
                </Heading>
              )}
            </Animated.View>

            <TextInput
              value={full_name}
              placeholder="Enter full name"
              onChangeText={setFullName}
              name="full_name"
            />
            <TextInput
              value={email}
              placeholder="Enter email"
              onChangeText={setEmail}
              name="email"
            />

            <TextInput
              variant="filled"
              value={phone_number}
              placeholder="Enter phone"
              onChangeText={setPhone}
              name="phone_number"
            />

            <InputPassword
              name="password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
            />

            <InputPassword
              name="confirm_password"
              value={confirm_password}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
            />

            <Btn onPress={Handlesignup} text="Register" />
            <ActivityIndicator animating={loading} size="large" color="#0000ff" />


            

            <Pressable
              p="2"
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text textAlign="center">
                If you already have an account register{"\n"}
                You can <Text color="#4D47C3">Login here!</Text>
              </Text>
            </Pressable>
          </Center>
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
};

export default SignUp;
