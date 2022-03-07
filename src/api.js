import { getFirestore, collection, getDocs, addDoc, getDoc, doc, Timestamp } from "firebase/firestore";
import * as R from 'ramda';

const getDb = () => getFirestore();

/** ---------------------------------- */
/** COLLECTIONS */
/** ---------------------------------- */
const USER_COLLECTION = 'user';
const EVENT_COLLECTION = 'event';

/** ---------------------------------- */
/** HELPERS */
/** ---------------------------------- */
const populateSingleFirebaseDoc = references => async doc => {
  const referenceDocPromises = references.map(r => getDoc(doc[r]));
  const referenceDocs = await Promise.all(referenceDocPromises);
  const referenceDocDataPromises = referenceDocs.map(rdp => rdp.data());
  const referenceDocData = await Promise.all(referenceDocDataPromises);
  return { ...doc, ...R.zipObj(references, referenceDocData) };
}

const populateFirebaseResponse = async (snapshot, references = []) => {
  const data = snapshot.docs.map(doc => doc.data());
  const populatedDataPromises = data.map(populateSingleFirebaseDoc(references));
  return Promise.all(populatedDataPromises);
};

const getDocument = async (coll, id) => {
  const snap = await getDoc(doc(getDb(), coll, id));
  if (snap.exists())
    return snap.data();
  else
    return Promise.reject(Error(`No such document: ${coll}.${id}`));
};

/** ---------------------------------- */
/** FETCHES */
/** ---------------------------------- */
export const fetchUsers = async () => {
  try {
    const usersCol = collection(getDb(), USER_COLLECTION);
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map(doc => doc.data());
  } catch (e) {
    console.error("Error fetching users: ", e);
  }
};

// TODO: probably delete this
export const fetchAddUser = async () => {
  try {
    await addDoc(collection(getDb(), USER_COLLECTION), {
      firstName: "Ada",
      lastName: "Lovelace",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Look into for usage issues. Fetches the customer for every single event
export const fetchEvents = async () => {
  try {
    const eventCol = collection(getDb(), EVENT_COLLECTION);
    const eventSnapshot = await getDocs(eventCol);
    const data = await populateFirebaseResponse(eventSnapshot, ['customer']);
    return data;
  } catch (e) {
    console.error("Error fetching events: ", e);
  }
};

export const fetchAddEvent = async ({
  title,
  attended,
  paid,
  customerId,
  startDateTime = new Date(),
  endDateTime = new Date(),
  eventGroupId,
  notes,
}) => {
  try {
    await addDoc(collection(getDb(), EVENT_COLLECTION), {
      title,
      attended,
      paid,
      customer: doc(getDb(), 'customer', customerId),
      startDateTime: Timestamp.fromDate(startDateTime),
      endDateTime: Timestamp.fromDate(endDateTime),
      eventGroupId,
      notes,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};