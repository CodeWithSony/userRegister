

import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/user_dashboard';

let cachedClient = null;
let cachedDb = null;

const dbConnect = async () => {
  // Check if we are already connected
  if (cachedDb) {
    return cachedDb;
  }

  if (cachedClient) {
    cachedDb = cachedClient;
    return cachedDb;
  }

  // Set up new connection
  try {
    const client = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    cachedClient = client;
    cachedDb = client;

    console.log('MongoDB connected');
    return client;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default dbConnect;
