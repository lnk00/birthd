import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Colors } from "./constants/Colors";
import Cal from "./components/Cal";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useAtomValue } from "jotai";
import { selectedDateAtom } from "./State";

export default function App() {
  dayjs.extend(utc);

  const selectedDate = useAtomValue(selectedDateAtom);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Cal />
      </SafeAreaView>
      <View style={styles.drawer}>
        <Text style={styles.date}>
          {dayjs(selectedDate).utc().format("dddd, MMM DD")}
        </Text>
        <Text style={styles.label}>Birthdays</Text>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  date: {
    fontWeight: "800",
    fontSize: 24,
    color: Colors.darkBlue,
  },
  label: {
    color: Colors.clearGrey,
    fontWeight: "600",
    marginTop: 8,
    fontSize: 16,
  },
});
