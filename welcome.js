// import React from "react";
// import { Text, View } from "react-native";
// import { StyleSheet, Button, SafeAreaView, Alert } from "react-native";
// import WelcomeCarousel  from "./WelcomeCarousel";

// export default WelcomeScreen = () => (
//   <SafeAreaView style={styles.container}>
//       <Text>Welcome!</Text>
//       <WelcomeCarousel/>
//       <Button
//         title="Get Started"
//         onPress={() => Alert.alert("Simple Button pressed")}
//       />
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from "react-native";
import WelcomeCarousel from "./WelcomeCarousel";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    text: "Welcome!",
    type: "text",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    text: "Second Item",
    type: "carousel",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    text: "Get Started!",
    type: "button",
  },
];

const WelcomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) =>
    item.type === "text" ? (
      <View>
        <Text style={styles.title}>{item.text}</Text>
      </View>
    ) : item.type === "button" ? (
      <Button
        title={item.text}
        onPress={() => navigation.navigate("welcome", { name: "Jane" })}
      />
    ) : (
      <WelcomeCarousel />
    );

  return (
    <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",

    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    paddingTop: 50,
  },
});

export default WelcomeScreen;
