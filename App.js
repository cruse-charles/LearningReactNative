import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import backgroundPhoto from "./app/assets/background.jpg";
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import AppText from "./app/components/AppText.js";

export default function App() {
  // console.log("orientation is:", useDeviceOrientation());
  // const orientation = useDeviceOrientation();
  // console.log(orientation);

  // const containerStyle = {
  //   backgroundColor: "orange",
  //   height: "50%",
  //   width: orientation === "portrait" ? "100%" : "50%",
  // };

  // return (
  //   <SafeAreaView style={styles.container}>
  //     {/* <SafeAreaView style={[styles.container, containerStyle]}> */}
  //     {/* <TouchableHighlight
  //       onPress={() => {
  //         console.log("image tapped");
  //       }}
  //     >
  //       <Image
  //         source={{
  //           width: 200,
  //           height: 300,
  //           uri: "https://picsum.photos/200/300",
  //         }}
  //       />
  //     </TouchableHighlight> */}

  //     {/* <Button
  //       title="click me"
  //       // onPress={() =>
  //       //   Alert.alert("Title of Alert", "Here is the message for the user", [
  //       //     { text: "Yes", onPress: () => console.log("Yes") },
  //       //     { text: "No" },
  //       //   ])
  //       // }
  //       onPress={() => {
  //         Alert.prompt("Title of Prompt", "Prompt Message", (text) =>
  //           console.log(text)
  //         );
  //       }}
  //       color="black"
  //     /> */}

  //     <Text>Hello there.</Text>
  //     {/* <Image source={{ uri: backgroundPhoto, width: 200, height: 300 }} /> */}
  //     <WelcomeScreen />
  //   </SafeAreaView>
  // );

  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  return <AppText>I love React Native!</AppText>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
