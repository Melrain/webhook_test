'use server';

import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.NEXT_MONGODB_URI) return console.log('MISSING MONGODB_URL');

  if (isConnected) return console.log('=> using existing database connection');

  // connect to DB
  try {
    await mongoose.connect(process.env.NEXT_MONGODB_URI, { dbName: 'webhook_test' });
    isConnected = true;
    console.log('connected to database');
  } catch (error) {
    console.error(error);
  }
};
