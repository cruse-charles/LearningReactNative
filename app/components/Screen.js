import React from "react";
import constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
    backgroundColor: "yellow",
    // height: 200,
    flex: 1,
  },
});

export default Screen;
