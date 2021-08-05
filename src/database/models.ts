const { Pool } = require("pg");

import { DATABASE } from "../config";


async function createTables(): Promise<void> {
  const pool = new Pool(DATABASE);
  await pool.query(`
      CREATE TABLE IF NOT EXISTS blog_posts(
        id integer PRIMARY KEY NOT NULL,
        title VARCHAR(64), 
        author VARCHAR(64), 
        date_time DATE,
        full_text TEXT)
  `);
  console.log('successfully create tables');
  await pool.end();
}


export async function main() {
  await createTables();
  console.log('successfully the end');
}
