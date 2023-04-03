import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../constants/Colors";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { selectedDateAtom } from "../State";

export default function Darwer() {
  const selectedDate = useAtomValue(selectedDateAtom);

  return (
    <View style={styles.drawer}>
      <Text style={styles.date}>
        {dayjs(selectedDate).utc().format("dddd, MMM DD")}
      </Text>
      <Text style={styles.label}>Birthdays</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
