import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
const router = Router();

router.get("/stats", async (req, res) => {
  try {
    const statsApi =
      "https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=falsesort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D&cayenneExp=gameTypeId=3%20and%20seasonId=20232024&limit=-1";
    const stats = await fetch(statsApi);
    const statsJson = await stats.json();
    res.json(statsJson);
  } catch (err) {
    console.log(err);
    res.status(500).send("There was an error with your request");
  }
});

router.get("/statBracket", async (req, res) => {
  try {
    const statsApi =
      "https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&isGame=falsesort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D&cayenneExp=gameTypeId=3%20and%20seasonId=20232024&limit=-1";
    const bracketApi = "https://api-web.nhle.com/v1/playoff-bracket/2024";
    const stats = await fetch(statsApi);
    const bracket = await fetch(bracketApi);
    const statsJson = await stats.json();
    const bracketJson = await bracket.json();
    res.json({stats: statsJson, bracket: bracketJson});
  } catch (err) {
    console.log(err);
    res.status(500).send("There was an error with your request");
  }
});

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

api.use("/api/", router);

export const handler = serverless(api);
