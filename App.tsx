import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "./constants/Colors";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import * as Contacts from "expo-contacts";

export default function App() {
  dayjs.extend(utc);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        console.log(data);
      }
    })();
  }, []);

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
