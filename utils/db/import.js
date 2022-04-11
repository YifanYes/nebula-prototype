// Import json files to firebase
// Execute with command node ./utils/db/import.js

const admin = require('../../node_modules/firebase-admin');
const data = require("../mock-data/users.json"); // File to be uploaded
const collectionKey = "users"; // Name of the collection

// Initializing firebase-admin SDK
admin.initializeApp({
    credential: admin.credential.cert(
        JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG_BASE_64, 'base64').toString('ascii'))),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
});

// Setting up Firestore property
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Check if the json file exists and its formatted correctly
if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        // .doc() property is empty for random document object generation
        firestore.collection(collectionKey).doc().set(data[docKey]).then((res) => {
            console.log("Document " + docKey + " successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    });
}