import { connect } from 'mongoose';
import { URL_DATABASE } from './config.js'; 

( async () => {
  try {
    const db = await connect(URL_DATABASE);
    console.log('DB connected to', db.connection.name);
  } catch (err) {
    console.log(err);
  }
})()


