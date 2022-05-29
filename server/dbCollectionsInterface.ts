import { ObjectId } from "mongodb";

export interface Persons {
  name: string,
  votes: {
    [key: string]: number
  }
};

export interface VoteOptions {
  name: string,
  date: Date
};
