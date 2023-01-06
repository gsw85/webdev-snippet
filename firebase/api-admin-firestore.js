import { adminFireStore, increment, serverTime } from "./initialize-admin";

const sampleData = { name: "testing name", number: 1 };

// SetDoc using specified ID
async function fireSetDoc() {
  const setDoc = await adminFireStore
    .collection("testing")
    .doc("test2")
    .set(sampleData);

  return "Added Setdoc";
}

// AddDoc using randomID
async function fireAddDoc() {
  try {
    const addDoc = await adminFireStore.collection("testing").add(sampleData);

    return addDoc.id;
  } catch (err) {
    console.log(err);
  }
}

// Update using randomID
async function fireUpdateDoc() {
  try {
    await adminFireStore
      .collection("testing")
      .doc("test")
      .update({ name: "updated name" });

    return "Doc updated";
  } catch (err) {
    console.log(err);
  }
}

// Merge the field
async function fireMergeDoc() {
  try {
    await adminFireStore
      .collection("testing")
      .doc("test")
      .set({ thingMerge: "toMerge" }, { merge: true });

    return "Doc Merged";
  } catch (err) {
    console.log(err);
  }
}

// Incremental the value
async function fireIncreaseNumber() {
  try {
    await adminFireStore
      .collection("testing")
      .doc("test")
      .update({ number: increment(1) });

    return "value increase";
  } catch (err) {
    console.log(err);
  }
}

// Add servertime
async function fireServerTimeDoc() {
  try {
    await adminFireStore
      .collection("testing")
      .doc("test")
      .set({ updateAt: serverTime }, { merge: true });

    return "Doc add server time";
  } catch (err) {
    console.log(err);
  }
}

// readDoc
async function fireReadDoc() {
  try {
    return (
      await adminFireStore.collection("testing").doc("test").get()
    ).data();
  } catch (err) {
    console.log(err);
  }
}

// Query // Get all documents from a collection
async function fireQuery() {
  try {
    let result = []; // not sure why only works with push into array instead of map it
    await adminFireStore
      .collection("testing")
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => result.push(doc.data()))
      );

    return result;
  } catch (err) {
    console.log(err);
  }
}

// Query // Get multiple documents from a collection with conditions
async function fireSelectedQuery() {
  try {
    let result = []; // not sure why only works with push into array instead of map it
    await adminFireStore
      .collection("testing")
      .where("name", "==", "testing name 2")
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => result.push(doc.data()))
      );

    return result;
  } catch (err) {
    console.log(err);
  }
}

export default function AdminFirebaseHandler(req, res) {
  fireServerTimeDoc()
    .then((response) => {
      res.json(response);
      // res.send(response) or res.json(response) // as a JSON response
    })
    .catch((err) => console.log(err));
}
