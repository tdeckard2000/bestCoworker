import { ObjectId } from "mongodb";
import * as mongoDB from "mongodb";

const express = require('express');
const cors = require('cors')
const app = express();
const {MongoClient} = require('mongodb')
const bodyParser = require('body-parser');
const port = 3000;
require('dotenv').config();

// async function main() {
  // const uri = process.env['MONGO_URI'];
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Connected to mongodb')

//     const test = await client.db('test').collection("").insert()
//   } catch(e) {
//     console.error(e)
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

async function connectToDatabase() {
  const uri = process.env['MONGO_URI'];
  const dbName = process.env['DB_NAME'];

  if (typeof uri === 'string' && typeof dbName === 'string') {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(uri)
    await client.connect();
    const db: mongoDB.Db = client.db(process.env['DB_NAME'])
  } else {
    console.warn('Unable to connect to DB. Check Mongo URI or database name.')
  }
};

app.use(cors());
app.use(express.json())

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
  console.log(req.body)
});

app.post('/newVoteStat', (req: any, res: any) => {
  console.log('newVoteStat')
  console.log(req.body)
});

app.post('/addVote', (req: any, res: any) => {
  console.log('addVote');
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});
