import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Center, Heading, Text, NativeBaseProvider, Box } from "native-base";

const RenderListItem = ({ item }) => {
  return (
    <TouchableOpacity style={{ margin: 6 }}>
      <Box
        alignSelf="center"
        mt={3}
        w={300}
        p={5}
        backgroundColor={item.bgColor}
        borderRadius={10}
        flexDirection="column"
      >
        <Box w={70} bgColor={"white"} borderRadius={7}>
          <Heading p={2} size={"sm"}>
            <Text textAlign={"center"}>{item.name}</Text>
          </Heading>
        </Box>
        <Text color={"white"}>{item.sub}</Text>
        <Box flexDirection="row" justifyContent="space-between">
          <Text color={"white"}>Folio: {item.Folio}</Text>
          <Text color={"white"}>Date: {item.date}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const DATA = [
    {
      Folio: 1,
      name: "ADMIN",
      sub: "Finance and Administration \nSub-Committee Meeting",
      date: "30th May, 2023",
      bgColor: "#05A2D3",
    },
    {
      Folio: 2,
      name: "ADMIN",
      sub: "Finance and Administration \nSub-Committee Meeting",
      date: "30th May, 2023",
      bgColor: "#364954",
    },
    {
      Folio: 3,
      name: "ADMIN",
      sub: "Finance and Administration \nSub-Committee Meeting",
      date: "30th May, 2023",
      bgColor: "#05A2D3",
    },

    // Rest of the data objects...
  ];

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
            <Box>
              <Image source={require("../../assets/img/User-Icon.png")} />
            </Box>
            <Text>
              Hello LaNMMA{"\n"}
              Easily track and manage your files
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="bell-badge-outline" size={30} />
            </TouchableOpacity>
          </Center>

          <Box pt={10} flex={1}>
            <Heading>Weekly Overview</Heading>

            <Text>6 files borrowed this week</Text>

            <FlatList
              data={DATA}
              keyExtractor={(item) => item.Folio.toString()}
              renderItem={({ item }) => <RenderListItem item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Box>

          <Center
            flex={1}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            
              <Box flexDirection={'row'} justifyContent={'space-between'}>
              <Heading size={"sm"}>
                <Text>Recent Activity</Text>
              </Heading>
              
              </Box>

              <Box flexDirection={"row"} justifyContent={"space-between"}>
              <Text>View All</Text>
                

                
              </Box>


              
             
           
          </Center>

          <Box flexDirection={'column'}>
              <Text>Today</Text>
              </Box>
 
          <Center >
            {" "}
            <Box flexDirection={"row"} justifyContent={"space-between"} >
              <Image source={require("../../assets/img/returned.png")} />
              <Text>Postings and Transfer</Text>
            </Box>
          </Center>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;
