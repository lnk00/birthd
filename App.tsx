import React, { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "./constants/Colors";
import { Calendar, DateData } from "react-native-calendars";

export default function App() {
  const [selectedDay, setSelectedDay] = useState("2023-02-15");

  const dayPressed = (date: DateData) => {
    setSelectedDay(date.dateString);
  };

  const marked = useMemo(() => {
    return {
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
        <Calendar
          style={styles.calendar}
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
  calendar: {},
});
