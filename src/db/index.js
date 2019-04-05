import mongoose from 'mongoose';

const config = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useNewUrlParser: true
}

export function InitDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.URL_DB, config);
    const db = mongoose.connection;
    db.on('error', (err) => {
      reject(error);
    })
    db.once('open', () => {
      resolve('DB is connected...');
    })
  })
}