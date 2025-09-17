import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { db } from "./firebase/config";
import { addTask, deleteTask } from "./services/taskService";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, snapshot => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(list);
    });
    return unsubscribe;
  }, []);

  const handleAdd = async () => {
    if (text.trim()) {
      await addTask({ title: text, createdAt: serverTimestamp() });
      setText("");
    }
  };

  const handleDelete = async id => {
    await deleteTask(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="New task"
        />
        <TouchableOpacity onPress={handleAdd} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskItem item={item} onDelete={handleDelete} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f2f2f2" },
  header: { fontSize: 24, textAlign: "center", marginVertical: 16 },
  row: { flexDirection: "row", marginBottom: 16 },
  input: { flex: 1, backgroundColor: "#fff", padding: 10, borderRadius: 6 },
  button: { backgroundColor: "#007AFF", padding: 12, marginLeft: 8, borderRadius: 6 },
  buttonText: { color: "#fff" }
});
