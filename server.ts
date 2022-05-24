const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req: any, res: any) => {
  res.json({hi: 'hello'})
});

app.get('/allPersons', (req: any, res: any) => {
  console.log('allPersons')
});

app.get('/allVoteStats', (req: any, res: any) => {
  console.log('/allVoteStats');
});

app.post('/newPerson', (req: any, res: any) => {
  console.log('/newPerson')
});

app.post('/newVoteStat', (req: any, res: any) => {
  console.log('newVoteStat')
});

app.post('/addVote', (req: any, res: any) => {
  console.log('addVote');
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});
