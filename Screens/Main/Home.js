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

const Home = ({ navigation }) => {
  const DATA1 = [
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
  const DATA = [
    {
      id: 1,
      title: "Recent Activity",
      subTitle: "Today",
      image: require("../../assets/img/returned.png"),
      content: "Postings and Transfer",
      folio: 568,
      category: "Borrowed",
    },
    {
      id: 2,
      image: require("../../assets/img/Borrowed.png"),
      content: "Postings and Transfer",
      folio: 568,
      category: "Returned",
    },
    {
      id: 3,
      title: "Older",
      image: require("../../assets/img/returned.png"),
      content: "Postings and Transfer",
      folio: 568,
      category: "Returned",
    },
    {
      id: 4,
      image: require("../../assets/img/returned.png"),
      content: "Postings and Transfer",
      folio: 568,
      category: "Returned",
    },
  ];

  const RenderListItem1 = ({ item }) => {
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

  const renderListItem = ({ item }) => {
    return (
      <Box mb={5}>
        <Center flexDirection="row" justifyContent="space-between">
          <Box>
            <Heading size="sm">
              <Text>{item.title}</Text>
            </Heading>

            {item.subTitle && <Text mb={3}>{item.subTitle}</Text>}

            <Box flexDirection="row">
              <Image source={item.image} style={{ marginRight: 10 }} />

              <Box flexDirection="row" justifyContent="space-between">
                <Box flexDirection="column" justifyContent="space-between">
                  <Text>{item.content}</Text>
                  <Text>Folio: {item.folio}</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          {item.category && (
            <Box>
              {/* <Text mb={5} fontFamily="Poppins-Light">
                View All
              </Text> */}

              <Box>
                <Text>{item.category}</Text>
              </Box>
            </Box>
          )}
        </Center>
      </Box>
    );
  };

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

          <Box pt={7}>
            <Heading>Weekly Overview</Heading>

            <Text>6 files borrowed this week</Text>

            <FlatList
              data={DATA1}
              keyExtractor={(item) => item.Folio.toString()}
              renderItem={({ item }) => <RenderListItem1 item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Box>

          <Box pt={5} flex={1}>
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderListItem}
              showsVerticalScrollIndicator={false}
            />
          </Box>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;
