import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
//Code below let's us specify what we want to do no each platform
//We take this code here and put it into our stylesSheet and spread it
// Platform.select({
//     ios: {
//         fontSize: 20,
//         fontFamily: "Avenir",
//     },
//     android: {
//         fontSize: 18,
//         fontFamily: "Roboto",
//     },
// })

//Below styles can actually be put into files specifying the platform which is easier again, as long as they are named the same, then don't have to list everything
const styles = StyleSheet.create({
  text: {
    // color: "black",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
