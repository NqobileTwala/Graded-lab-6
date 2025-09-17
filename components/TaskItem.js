import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.item}>
      <Text>{task.title}</Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={{ color: "red" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
