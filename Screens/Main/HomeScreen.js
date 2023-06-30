import * as React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Octicons, Entypo,MaterialIcons } from "@expo/vector-icons";
import { Heading, Center, Box } from "native-base";
import Home from "./Home";
import FileMgt from "./FileMgt";
import Profile from "./Profile";


export default function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Box flex={1}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle:{fontSize:14},
          tabBarActiveTintColor: "#4D47C3",
          // tabBarItemStyle: { height: 60, borderTopWidth: 0.8, },
          tabBarStyle: {
            height: 70,
            borderTopWidth: 0.8,
            paddingBottom: 3, // Add space between icons and bottom navigation tab
          },
        }}
      >


<Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarBadge:4,
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: focused ? "#4D47C3" : "transparent",
                    borderRadius: 30,
                    padding:  6,
                    marginTop: focused ? 6 : 0,
                  }}
                >
                  <Entypo
                    name="home"
                    color={focused ? "white" : color}
                    size={26}
                  />
                </View>
                {/* <Text style={{ color: focused ? "#4D47C3" : "black", marginBottom: 5 }}>Reports</Text> */}
              </View>
            ),
          }}
        />



        <Tab.Screen
          name="FileMgt"
          component={FileMgt}
          options={{
            tabBarIcon: ({ focused, color, size=40 }) => (
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: focused ? "#4D47C3" : "transparent",
                    borderRadius: 30,
                    padding: 6,
                    marginTop: focused ? 6 : 0,
                  }}
                >
                  {/* <MaterialIcons
                    name="add-shopping-cart"
                    color={focused ? "white" : color}
                    size={size}
                  /> */}


                  <MaterialCommunityIcons
                    name="file"
                    color={focused ? "white" : color}
                    size={ 27}
                  />
                </View>
                {/* <Text style={{ color: focused ? "#4D47C3" : "black", marginBottom: 5 }}>Orders</Text> */}
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: focused ? "#4D47C3" : "transparent",
                    borderRadius: 30,
                    padding: 6,
                    marginTop: focused ? 6 : 0,
                  }}
                >
                  <MaterialIcons
                    name="person"
                    color={focused ? "white" : color}
                    size={ 27}
                  />
                </View>
                {/* <Text style={{ color: focused ? "#4D47C3" : "black", marginBottom: 5 }}>Add job</Text> */}
              </View>
            ),
          }}
        />

       
       
      </Tab.Navigator>
    </Box>
  );
}
