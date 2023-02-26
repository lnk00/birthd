import React, { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Colors } from "./constants/Colors";
import { Calendar, DateData } from "react-native-calendars";

export default function App() {
  const [selectedDay, setSelectedDay] = useState("2023-02-15");

  const dayPressed = (date: DateData) => {
    setSelectedDay(date.dateString);
  };

  const marked = useMemo(() => {
    return {
      "2023-02-05": { marked: true, dotColor: Colors.yellow, activeOpacity: 0 },
      "2023-02-10": { marked: true, dotColor: Colors.yellow, activeOpacity: 0 },
      "2023-02-21": { marked: true, dotColor: Colors.yellow, activeOpacity: 0 },
      "2023-02-25": { marked: true, dotColor: Colors.yellow, activeOpacity: 0 },
      [selectedDay]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: Colors.grey,
        selectedTextColor: Colors.white,
      },
    };
  }, [selectedDay]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.monthLabel}>February</Text>
        <Calendar
          theme={{
            backgroundColor: Colors.darkBlue,
            calendarBackground: Colors.darkBlue,
            dayTextColor: Colors.white,
            textDisabledColor: Colors.darkGrey,
            selectedDayBackgroundColor: Colors.grey,
            todayBackgroundColor: Colors.darkBlue,
            todayTextColor: Colors.white,
            // @ts-ignore
            "stylesheet.calendar.header": {
              monthText: {
                display: "none",
              },
              dayHeader: {
                color: Colors.darkGrey,
                fontWeight: 800,
                marginBottom: 24,
              },
            },
            // @ts-ignore
            "stylesheet.day.basic": {
              text: {
                fontWeight: 800,
                color: Colors.white,
                marginTop: 10,
                alignSelf: "center",
              },
              base: {
                height: 38,
                width: 38,
              },
              selected: {
                borderRadius: 38,
              },
            },
            // @ts-ignore
            "stylesheet.dot": {
              dot: {
                width: 6,
                height: 6,
                borderRadius: 6,
                marginLeft: 15,
                marginTop: 4,
                opacity: 0,
              },
            },
          }}
          hideArrows={true}
          enableSwipeMonths={true}
          onDayPress={dayPressed}
          markedDates={marked}
          firstDay={1}
        />
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    height: "100%",
  },
  monthLabel: {
    marginLeft: 18,
    color: Colors.white,
    fontWeight: 800,
    fontSize: 24,
    marginBottom: 18,
    marginTop: 12,
  },
});
