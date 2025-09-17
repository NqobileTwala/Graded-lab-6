// services/taskService.js
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const tasksCollection = collection(db, "tasks");

export async function addTask(task) {
  await addDoc(tasksCollection, task);
}

export async function getTasks() {
  const snapshot = await getDocs(tasksCollection);
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
}

export async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", id));
}
