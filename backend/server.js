const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const incidents = [
  {
    id: 1,
    location: "Block 38",
    status: "Fire Alert",
  },
  {
    id: 2,
    location: "Library",
    status: "Camera Offline",
  },
  {
    id: 3,
    location: "Parking Area",
    status: "Crowd Detected",
  },
];

app.get("/", (req, res) => {
  res.send("LPU Smart Campus Backend Running");
});

app.get("/incidents", (req, res) => {
  res.json(incidents);
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});