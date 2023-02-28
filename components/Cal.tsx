import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "./../constants/Colors";
import { Calendar, DateData } from "react-native-calendars";
import { useAtom } from "jotai";
import { selectedDateAtom } from "../State";
import dayjs from "dayjs";

export default function App() {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);

  const dayPressed = (date: DateData) => {
    setSelectedDate(new Date(date.dateString));
  };

  const marked = useMemo(() => {
    return {
      "2023-02-05": { marked: true, dotColor: Colors.yellow },
      "2023-02-10": { marked: true, dotColor: Colors.yellow },
      "2023-02-21": { marked: true, dotColor: Colors.yellow },
      "2023-02-25": { marked: true, dotColor: Colors.yellow },
      [dayjs(selectedDate).utc().format("YYYY-MM-DD")]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: Colors.grey,
        selectedTextColor: Colors.white,
      },
    };
  }, [selectedDate]);

  return (
    <View>
      <Text style={styles.month}>
        {dayjs(selectedDate).utc().format("MMMM")}
      </Text>
      <Calendar
        theme={{
          backgroundColor: Colors.darkBlue,
          calendarBackground: Colors.darkBlue,
          dayTextColor: Colors.white,
          textDisabledColor: Colors.darkGrey,
          selectedDayBackgroundColor: Colors.grey,
          todayBackgroundColor: Colors.darkBlue,
          todayTextColor: Colors.darkGrey,
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
    </View>
  );
}

const styles = StyleSheet.create({
  month: {
    marginLeft: 18,
    color: Colors.white,
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 18,
    marginTop: 12,
  },
});
