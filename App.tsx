import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import { Colors } from "./constants/Colors";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import * as Contacts from "expo-contacts";

interface ItemProps {
  contact: Contacts.Contact;
}

const Item = ({contact}: ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{contact.name}</Text>
    </View>
  )
}

export default function App() {
  dayjs.extend(utc);

  const [contacts, setContact] = useState<Contacts.Contact[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        console.log(data)

        setContact(data)
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Contacts</Text>
        <FlatList style={styles.list} data={contacts} renderItem={({item}) => <Item contact={item} />} />
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
  title: {
    color: Colors.white,
    fontWeight: "800",
    fontSize: 24,
    marginLeft: 18,
    marginTop: 12
  }, 
  list: {
    marginHorizontal: 18,
    marginTop: 12
  },
  itemContainer: {
    marginTop: 12,
    paddingBottom: 12,
    borderBottomColor: Colors.darkGrey,
    borderBottomWidth: 1
  },
  itemText: {
    color: Colors.white,
  }
});
