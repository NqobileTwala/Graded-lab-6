import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { addTask, deleteTask, listenTasks } from "../services/taskService";
import TaskItem from "../components/TaskItem";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsub = listenTasks(setTasks);
    return () => unsub();
  }, []);

  return (
    <View style={{ flex: 1, padding: 40 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>My To-Do</Text>

      <TextInput
        placeholder="Write a task"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(text);
          setText("");
        }}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} onDelete={deleteTask} />}
      />
    </View>
  );
}
