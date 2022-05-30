import { connectToDatabase, getAllPersons, getAllVoteStats, getOnePerson, getOneVoteStat, postNewPerson, postNewVoteStat, postAddVote } from "./server/db.service";
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const {MongoClient} = require('mongodb')
const bodyParser = require('body-parser');
const port = 3000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname + '/dist/best-coworker')));

connectToDatabase().then(() => {

  app.get('/', async (req: any, res: any) => {
    console.log("HOME ROUTE");
    res.sendFile(path.join(__dirname, '..', '/dist/best-coworker/index.html'));
  });

  app.get('/allPersons', async (req: any, res: any) => {
    const result = await getAllPersons();
    res.send(result);
  });

  app.get('/allVoteStats', async (req: any, res: any) => {
    const result = await getAllVoteStats();
    res.send(result);
  });

  app.post('/newPerson', async (req: any, res: any) => {
    const checkForExisting = await getOnePerson(req.body.name);
    if (!checkForExisting?.length) {
      postNewPerson({name: req.body.name, votes: {}});
      res.send({successful: true});
    } else {
      res.send({successful: false});
    };
  });

  app.post('/newVoteStat', async (req: any, res: any) => {
    const checkForExisting = await getOneVoteStat(req.body.name);
    if (!checkForExisting?.length) {
      postNewVoteStat({name: req.body.name, date: new Date()});
      res.send({successful: true});
    } else {
      res.send({successful: false});
    };
  });

  app.post('/addVote', async (req: any, res: any) => {
    await postAddVote(req.body.personName, req.body.voteOptionName);
    res.send({successful: true})
  });

  app.listen(port, () => {
    console.warn('Listening on port ', port);
  });

});
