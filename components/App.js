import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Articles from "./Articles";
import LoginForm from "./LoginForm";
import { StatusBar } from "expo-status-bar";
import firebase from "@react-native-firebase/app";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const renderContent = () => {
    switch (isLoggedIn) {
      case true:
        return <LoginForm />;
        break;
      case false:
        return <Articles />;
        break;

      default:
        break;
    }
  };
  return <View style={styles.container}>{renderContent}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
