import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import { Persons, VoteOptions } from './dbCollectionsInterface';

export const collections: {
  persons?: mongoDB.Collection<Persons>,
  voteOptions?: mongoDB.Collection<VoteOptions>
} = {};

export async function connectToDatabase() {
  dotenv.config();
  const client = new mongoDB.MongoClient(process.env['MONGO_URI'] || '');
  await client.connect();
  const db = client.db(process.env['DB_NAME']);
  const personsCollection = db.collection<Persons>('persons');
  const voteOptionsCollection = db.collection<VoteOptions>('voteOptions');
  collections.persons = personsCollection;
  collections.voteOptions = voteOptionsCollection;
  console.log('Connected to MongoDB')
};

export function getAllPersons() {
  try {
    return collections.persons?.find({}).toArray();
  } catch(e) {
    console.warn(e);
    return;
  };
};

export function getAllVoteStats() {
  try {
    return collections.voteOptions?.find({}).toArray();
  } catch(e) {
    console.warn(e);
    return;
  }
};

export function getOnePerson(personName: string) {
  try {
    return collections.persons?.find({name: {$regex: personName, $options: "i"}}).toArray()
  } catch(e) {
    console.warn(e);
    return
  }
};

export function getOneVoteStat(voteStatName: string) {
  try {
    return collections.voteOptions?.find({name: {$regex: voteStatName, $options: "i"}}).toArray()
  } catch(e) {
    console.warn(e);
    return
  }
};

export function postNewPerson(newPerson: Persons) {
  try {
    collections.persons?.insertOne(newPerson);
    return;
  } catch(e) {
    console.warn(e);
    return;
  }
};

export function postNewVoteStat(newVoteStat: VoteOptions) {
  try {
    collections.voteOptions?.insertOne(newVoteStat);
    return;
  } catch(e) {
    console.warn(e);
    return;
  }
};
