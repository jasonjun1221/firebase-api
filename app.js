const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

// Initialize Firebase Admin SDK with service account credentials
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Initialize Cloud Firestore Database
const db = admin.firestore();
// Initialize Express.js
const app = express();
// Parse request body as text
app.use(express.text());
// Enable CORS
app.use(cors());

// GET request
app.get("/api/:register", async (req, res) => {
  const registerId = req.params.register;
  try {
    // Get the document
    const docRef = db.collection("register").doc(registerId);
    const doc = await docRef.get();

    if (doc.exists) {
      // if the document exists, return the value
      const registerData = doc.data().value;
      res.set("Content-Type", "text/plain");
      res.send(registerData.toString());
    } else {
      // If the document does not exist, return 0
      res.send("0");
    }
  } catch (error) {
    res.send("Error retrieving register");
  }
});

// POST request
app.post("/api/:register", async (req, res) => {
  const registerId = req.params.register;
  const registerData = +req.body;
  try {
    // Get the document
    const docRef = db.collection("register").doc(registerId);
    const doc = await docRef.get();

    if (doc.exists) {
      // If the document exists, add the new value to the existing value
      const newValue = doc.data().value + registerData;
      await docRef.set({ value: newValue });
      res.set("Content-Type", "text/plain");
      res.send(newValue.toString());
    } else {
      // If the document does not exist, create a new one with the provided value
      await docRef.set({ value: registerData });
      res.set("Content-Type", "text/plain");
      res.send(registerData.toString());
    }
  } catch (error) {
    res.send("Error creating/updating register");
  }
});

// PUT request
app.put("/api/:register", async (req, res) => {
  const registerId = req.params.register;
  const updatedData = +req.body;
  try {
    // Get the document
    const docRef = db.collection("register").doc(registerId);

    // Update the document
    await docRef.set({ value: updatedData });

    // Return the updated value
    res.set("Content-Type", "text/plain");
    res.send(updatedData.toString());
  } catch (error) {
    res.send("Error updating register");
  }
});

// DELETE request
app.delete("/api/:register", async (req, res) => {
  const registerId = req.params.register;
  try {
    // Get the document
    const docRef = db.collection("register").doc(registerId);
    const doc = await docRef.get();

    if (doc.exists) {
      // If the document exists, delete it
      await docRef.delete();
      res.sendStatus(204);
    } else {
      // If the document does not exist, return a message
      res.send(`${registerId} not found`);
    }
  } catch (error) {
    res.send("Error deleting register");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
