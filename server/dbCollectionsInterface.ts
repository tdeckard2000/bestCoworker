import { ObjectId } from "mongodb";

export interface Persons {
  name: string,
  votes: object
};

export interface VoteOptions {
  name: string,
  date: Date
};
