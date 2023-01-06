import env from "react-dotenv";
import admin from "firebase-admin";

const serviceAccount = JSON.parse(env.FIREBASE_ADMIN_API);

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: env.FIREBASE_BUCKET,
  });
}

// Firestore
export const adminFireStore = admin.firestore();
export const serverTime = admin.firestore.FieldValue.serverTimestamp();
export const increment = (value) => admin.firestore.FieldValue.increment(value);

// Storage
export const adminStorage = admin.storage().bucket();
