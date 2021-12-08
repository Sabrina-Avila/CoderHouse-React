import {
  query,
  orderBy,
  where,
  collection,
  getDocs,
  updateDoc,
} from "@firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export function getAll(idCategory, collectionPath = "productos") {
  const collectionRef = collection(db, collectionPath);
  const queryRef = idCategory
    ? query(collectionRef, where("categoryId", "==", parseInt(idCategory, 10)))
    : query(collectionRef, orderBy("title"));

  return getDocs(queryRef).then(({ docs }) =>
    docs.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    })
  );
}

export function getOneBy(id, collectionPath = "productos") {
  const docRef = doc(db, collectionPath, id);
  return getDoc(docRef).then((snapshot) =>
    snapshot.exists() ? { id, ...snapshot.data() } : null
  );
}

export function createOne(payload, collectionPath = "orders") {
  const docRef = doc(collection(db, collectionPath));
  return setDoc(docRef, payload).then(() => docRef);
}

export function updateOne(id, payload, collectionPath = "productos") {
  const itemRef = doc(db, collectionPath, id);
  return updateDoc(itemRef, payload);
}
