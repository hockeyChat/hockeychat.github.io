// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

const express = require("express");
const request = require("request");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
const port = 5000;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/stats", async (req, res) => {
  const statsApi = `https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=falsesort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D&cayenneExp=gameTypeId=3%20and%20seasonId=20232024&limit=-1`;
  const stats = await fetch(statsApi);
  const statsJson = await stats.json();
  request(statsApi).pipe(res);
});

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const router = Router();
// router.post("/", async (req, res) => {
//   try {
//     const statsApi = `https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=falsesort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D&cayenneExp=gameTypeId=3%20and%20seasonId=20232024&limit=-1`;
//     const stats = await fetch(statsApi);
//     const statsJson = await stats.json();
//     res.json({ stats: statsJson });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('There was an error with your request');
//   }
// });

// api.use("/api/", router);

// export const handler = serverless(api);
