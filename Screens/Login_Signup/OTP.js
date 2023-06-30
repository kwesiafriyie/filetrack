

import React, { useState, useRef } from "react";
import { Button, Text, Image , NativeBaseProvider} from "native-base";
import axios from "axios";
import {
  View,
  TextInput,
  TouchableOpacity,StatusBar,
  StyleSheet,
  Alert,
} from "react-native";
import { Btn } from "../../components/TextInput";

const OTP = ({ route, navigation }) => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = useRef([]);

  const { data } = route.params;

  const handleOTPChange = (text, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = text;
    setOTP(updatedOTP);

    if (index < otp.length - 1 && text !== "") {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = async () => {
    const enteredOTP = otp.join("");

    const API_URL = "https://devstigar.pythonanywhere.com/";
    try {
      const response = await axios.post(`${API_URL}api/auth/verify_otp/`, {
        phone_number: data,
        otp: enteredOTP,
      });
      console.log(response.data);
      alert("OTP verification successful");
      navigation.navigate("Shopsetup1");
    } catch (error) {
      console.error(error);
      if (error.response) {
        const errorMessage = error.response.data.message;
        alert(`OTP verification failed: ${errorMessage}`);
      } else if (error.request) {
        alert("No response received from the server");
      } else {
        alert("An error occurred during OTP verification");
      }
    }
  };

  const resendOTP = async () => {
    // const API_URL = "https://devstigar.pythonanywhere.com/";
    try {
      const response = await axios.post(`${API_URL}api/auth/resend_otp/`, {
        phone_number: data,
      });
      console.log(response.data);
      alert("OTP resent successfully");
    } catch (error) {
      console.error(error);
      if (error.response) {
        const errorMessage = error.response.data.message;
        alert(`OTP resend failed: ${errorMessage}`);
      } else if (error.request) {
        alert("No response received from the server");
      } else {
        alert("An error occurred during OTP resend");
      }
    }
  };

  return (
    <NativeBaseProvider>
                        <StatusBar backgroundColor="white" barStyle="dark-content" /> 
    <View style={styles.container}>
      {/* <Input variant="filled" bgColor="#e7e6f7" fontSize={15}  w="xs" value={email} placeholder={"enter email"} type="email" onChangeText={setEmail} name="email" my={10.5}  /> */}

      {/* <Image
        alt="otp"
        w={150}
        mb={7}
        h={130}
        source={require("../../images/pics/OTP-IMAGE.png")}
      /> */}

      <Text pb={6}>Please enter the 6 digit pin sent to {data} </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            placeholder="-"
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOTPChange(text, index)}
            ref={(ref) => (otpInputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <Btn

      text={'Verify'}
        
        onPress={handleVerifyOTP}
      />
        
      
      <TouchableOpacity style={styles.resendButton} onPress={resendOTP}>
        <Text style={styles.resendButtonText}>Resend OTP</Text>
      </TouchableOpacity>
    </View></NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  otpContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    width: 40,
    marginHorizontal: 5,
    textAlign: "center",
  },

  resendButton: {
    marginTop: 10,
  },
  resendButtonText: {
    color: "#2196F3",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default OTP;
