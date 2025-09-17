import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

export const addTask = async (title) => {
  if (title.trim() === "") return;
  await addDoc(collection(db, "tasks"), { title });
};

export const deleteTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
};

export const listenTasks = (callback) => {
  return onSnapshot(collection(db, "tasks"), (snap) => {
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(list);
  });
};
