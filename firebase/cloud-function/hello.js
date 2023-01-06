const adminFirebase = require("firebase-admin");

////////// FirebaseAdmin //////////
// Service Account

if (adminFirebase.apps.length === 0) {
  adminFirebase.initializeApp();
}

// Firestore
const adminFireStore = adminFirebase.firestore();

// Storage
const adminStorage = adminFirebase.storage().bucket();

// For Firestore
const increment = (value) =>
  adminFirebase.firestore.FieldValue.increment(value);

const serverTime = adminFirebase.firestore.FieldValue.serverTimestamp();

////////// FirebaseAdmin END //////////

exports.handler = async (req, res) => {
  const reqBody = req.body;

  // Example of getting image parameter from body
  const image = reqBody.image;

  // Firebase Admins Cloud Function all goes here
  ////////////////////////////////////////////////

  return res.status(200).send("send anything here with json.stringify(data)");
};
