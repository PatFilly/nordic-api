require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_URL = "https://www.digital-gamedays.de/Gameday-SpV-Nord/rest";
const TOKEN = process.env.API_TOKEN;

// TEST
app.get("/", (req, res) => {
  res.send("API läuft 🚀");
});

// Ligen
app.get("/api/leagues", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/leagues`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).send("Fehler bei leagues");
  }
});

// Liga Details
app.get("/api/leagues/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `${API_URL}/leagues/${req.params.id}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).send("Fehler bei league details");
  }
});

// Spiele
app.get("/api/games/open", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/games/open`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).send("Fehler bei open games");
  }
});

app.listen(3000, () => console.log("Server läuft auf Port 3000 🚀"));