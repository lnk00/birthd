import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "./constants/Colors";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

export default function App() {
  dayjs.extend(utc);

  return (
    <View style={styles.container}>
      <SafeAreaView>
      </SafeAreaView>
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
});
