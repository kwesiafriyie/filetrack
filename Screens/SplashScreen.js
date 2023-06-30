import React,{useEffect} from 'react';
import { View, Image, StyleSheet ,ActivityIndicator, Text} from 'react-native';

export const SplashScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash1.png')} style={styles.logo}  />

      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05A2D3',
  },
  logo: {
    width:300,
    height:300,
   
    resizeMode: 'contain',
  },
});


