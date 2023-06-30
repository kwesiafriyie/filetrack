
import * as Font from 'expo-font';

export const loadFonts = () => {
  return Font.loadAsync({
    Poppins: require('../assets/Poppins-Regular.ttf'),
  'Poppins-Bold': require('../assets/Poppins-Bold.ttf'),
  'Poppins-Regular': require('../assets/Poppins-Regular.ttf'),
  'Poppins-Medium': require('../assets/Poppins-Medium.ttf'),

  'Poppins-Light': require('../assets/Poppins-Light.ttf')
    // Add more font variants if needed
  });
};

