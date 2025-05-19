const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/time-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose model
const UserData = require('./models/UserData');

// Save tracked data
app.post('/api/data', async (req, res) => {
  const { url, timeSpent, productive } = req.body;

  try {
    await UserData.create({ url, timeSpent, productive });
    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Summary endpoint
app.get('/api/summary', async (req, res) => {
  try {
    const allData = await UserData.find();
    let productive = 0, unproductive = 0;

    allData.forEach(entry => {
      if (entry.productive) productive += entry.timeSpent;
      else unproductive += entry.timeSpent;
    });

    res.json({ productive, unproductive });
  } catch (error) {
    console.error("Error fetching summary:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
app.listen(3000,'0.0.0.0' ,() => { console.log("Server running on http://localhost:3000");
});
