import React, { useEffect, useState } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import Nav from "./Nav";
import { loadFonts } from "./Screens/font";



export default function App() {
  
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  const setupApp = async () => {
    try {
      await loadFonts();
      setIsFontsLoaded(true);
    } catch (error) {
      console.log("Error loading fonts:", error);
    }
  };

  useEffect(() => {
    setupApp();
  }, []);

  if (!isFontsLoaded) {
    return null; // Render a loading screen or placeholder while fonts are loading
  }

  // Define your custom theme with the loaded fonts
  const theme = extendTheme({
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
  });


  return (
    <NativeBaseProvider>
      {/* Render the rest of your app */}

      <Nav />
    </NativeBaseProvider>
  );
}
