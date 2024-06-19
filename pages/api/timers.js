import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('timers');

  if (req.method === 'GET') {
    const timers = await db.collection('timers').find({}).toArray();
    res.json(timers);
  } else if (req.method === 'POST') {
    const newTimer = req.body;
    await db.collection('timers').insertOne(newTimer);
    res.status(201).json(newTimer);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await db.collection('timers').deleteOne({ id });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
