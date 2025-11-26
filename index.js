const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const BACKGROUND_IMAGE_URL =
  'https://i.natgeofe.com/n/bbd81591-a957-4ca2-8a41-6433a2f03177/IMG_2733.jpg';
const PROFILE_PIC =
  'https://avatars.githubusercontent.com/u/182410978?v=4'; 

// Home Page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Welcome</title>
      <style>
        body {
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
          margin-top: 100px;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          max-width: 400px;
          margin: 100px auto 0;
        }

        button {
          background-color: #ff8c00 !important;
        }
      </style>
    </head>

    <body>
      <div class="content">
        <h1>Hi! Welcome to My Page</h1>
        <p>Hope you're doing fine! ♥</p>

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

// Info Page
app.get('/info', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Info</title>
      <style>
        body {
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

        .profile-pic {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #ffd700;
          margin-bottom: 20px;
        }

        h2 {
          color: #ffdb58;
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

        <img src="${PROFILE_PIC}" alt="Profile" class="profile-pic">

        <h1>John Mark V. Marigondon</h1>
        <h2>BSIT SM - 4101</h2>

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
