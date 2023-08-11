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

export default function App() {
  // console.log("orientation is:", useDeviceOrientation());
  const orientation = useDeviceOrientation();
  console.log(orientation);

  const containerStyle = {
    backgroundColor: "orange",
    height: "50%",
    width: orientation === "portrait" ? "80%" : "50%",
  };

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello there.</Text>
      <TouchableHighlight
        onPress={() => {
          console.log("image tapped");
        }}
      >
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      <Button
        title="click me"
        // onPress={() =>
        //   Alert.alert("Title of Alert", "Here is the message for the user", [
        //     { text: "Yes", onPress: () => console.log("Yes") },
        //     { text: "No" },
        //   ])
        // }
        onPress={() => {
          Alert.prompt("Title of Prompt", "Prompt Message", (text) =>
            console.log(text)
          );
        }}
        color="black"
      />
    </SafeAreaView>
  );
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
