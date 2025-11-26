const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// The URL for a generic, publicly hosted sunset beach image.
// You can replace this with any other image URL you prefer.
const BACKGROUND_IMAGE_URL = 'https://i.natgeofe.com/n/bbd81591-a957-4ca2-8a41-6433a2f03177/IMG_2733.jpg';

// --- PAGE 1: The Home Page ---
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Welcome</title>
      <style>
        body {
          /* Background image settings */
          background-image: url('${BACKGROUND_IMAGE_URL}');
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed; /* Keeps the image still when scrolling (good practice) */
          color: white; /* Ensures text is visible against the dark background */
          text-shadow: 1px 1px 2px black; /* Improves readability */
        }
        .content {
          font-family: sans-serif; 
          text-align: center; 
          margin-top: 100px;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black box for better text contrast */
          border-radius: 10px;
          max-width: 400px;
          margin: 100px auto 0;
        }
        button {
          /* Ensuring the button stands out */
          background-color: #ff8c00 !important; /* Brighter color for visibility */
        }
      </style>
    </head>
    <body>
      <div class="content">
        <h1>Hi! Welcome to My Page</h1>
        <p>Hope you're doing fine ♥.</p>
        
        <a href="/info" style="text-decoration: none;">
          <button style="
              padding: 15px 30px; 
              font-size: 20px; 
              color: white; 
              border: none; 
              border-radius: 5px; 
              cursor: pointer;">
            See My Info
          </button>
        </a>
      </div>
    </body>
    </html>
  `);
});

// --- PAGE 2: The Info Page ---
app.get('/info', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Info</title>
      <style>
        body {
          /* Apply the same background styles */
          background-image: url('${BACKGROUND_IMAGE_URL}');
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          color: white;
          text-shadow: 1px 1px 2px black;
        }
        .content {
          font-family: sans-serif; 
          text-align: center; 
          margin-top: 50px;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          max-width: 600px;
          margin: 50px auto 0;
        }
        h2 {
            color: #ffdb58; /* Goldish yellow for emphasis */
        }
        .quote {
            font-style: italic; 
            font-size: 1.5em; 
            color: #f0f0f0;
        }
      </style>
    </head>
    <body>
      <div class="content">
        <h1>Name: John Mark V. Marigondon</h1>
        <h2>Section: BSIT SM - 4101</h2>
        <br>
        <p class="quote">
          "When God gives you a New Beginning, Don't repeat the same Mistakes."
        </p>
        <br><br>
        
        <a href="/">
          <button style="padding: 10px 20px; cursor: pointer;">Go Back</button>
        </a>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});