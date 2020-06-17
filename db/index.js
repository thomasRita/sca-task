import { Pool } from 'pg';
import dotenv from 'dotenv'
import logger from '../services/logger'


dotenv.config()


const db = new Pool({
    connectionString: process.env.DATABASE_DEV_URL
  });

  db.on('connect', () => {
    logger.info('CONNECTED TO DATABASE')

});


export default {
    query(text, values) {
      return new Promise((resolve, reject) => {
        db.query(text, values)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    },
  };
