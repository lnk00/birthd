import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "./constants/Colors";
import Cal from "./components/Cal";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Cal />
      </SafeAreaView>
      <View style={styles.drawer}></View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  drawer: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 18,
  },
});
