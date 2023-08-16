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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton.js";
import Card from "./app/components/Card.js";
import ListingDetailScreen from "./app/screens/ListingDetailsScreen.js";

export default function App() {
  return <ViewImageScreen />;
}

//Testing Card
// export default function App() {
//   return (
//     <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
//       <Card
//         title="Red jacket for sale"
//         subTitle="$100"
//         image={require("./app/assets/jacket.jpg")}
//       />
//     </View>
//   );
// }

//Testing ListingDetailsScreen
// export default function App() {
//   return (
//     <ListingDetailScreen />
//   );
// }

// export default function App() {
//   return <WelcomeScreen />;
// }

// export default function App() {
//   return (
//     <SafeAreaView>
//       <AppText>I love React Native</AppText>
//       <AppButton
//         title="Login"
//         onPress={() => console.log("login tapped")}
//       ></AppButton>
//     </SafeAreaView>
//   );
// }

//How to import icons that you can manipulate without worrying about size/pixelation

// export default function App() {
//   return (
//     <View>
//       <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });

//---------------------------------------------------------------------------------
// export default function App() {
//   // console.log("orientation is:", useDeviceOrientation());
//   // const orientation = useDeviceOrientation();
//   // console.log(orientation);

//   // const containerStyle = {
//   //   backgroundColor: "orange",
//   //   height: "50%",
//   //   width: orientation === "portrait" ? "100%" : "50%",
//   // };

// Safeview gives us an area to work with in our devices that is 'safe' to render our page on, without going into the top bar or outside of the phone screen
// MaterialCommunityIcons can be imported from @expo/vector-icons to get really clean icons for app

//   // return (
//   //   <SafeAreaView style={styles.container}>
//   //     {/* <SafeAreaView style={[styles.container, containerStyle]}> */}
//   //     {/* <TouchableHighlight
//   //       onPress={() => {
//   //         console.log("image tapped");
//   //       }}
//   //     >
//   //       <Image
//   //         source={{
//   //           width: 200,
//   //           height: 300,
//   //           uri: "https://picsum.photos/200/300",
//   //         }}
//   //       />
//   //     </TouchableHighlight> */}

//   //     {/* <Button
//   //       title="click me"
//   //       // onPress={() =>
//   //       //   Alert.alert("Title of Alert", "Here is the message for the user", [
//   //       //     { text: "Yes", onPress: () => console.log("Yes") },
//   //       //     { text: "No" },
//   //       //   ])
//   //       // }
//   //       onPress={() => {
//   //         Alert.prompt("Title of Prompt", "Prompt Message", (text) =>
//   //           console.log(text)
//   //         );
//   //       }}
//   //       color="black"
//   //     /> */}

//   //     <Text>Hello there.</Text>
//   //     {/* <Image source={{ uri: backgroundPhoto, width: 200, height: 300 }} /> */}
//   //     <WelcomeScreen />
//   //   </SafeAreaView>
//   // );

//   // return <WelcomeScreen />;
//   // return <ViewImageScreen />;
//   // return <AppText>I love React Native!</AppText>;
//   <View>
//     <MaterialCommunityIcons name="email" size={60} />
//   </View>;
// }
