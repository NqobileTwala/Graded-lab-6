// components/TaskItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TaskItem({ item, onDelete }) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{item.title}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    marginVertical: 6,
    borderRadius: 6
  },
  text: { fontSize: 16 },
  delete: { color: "red" }
});
