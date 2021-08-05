const { Pool } = require("pg");

import { DATABASE } from "../config";


export class Models {
  pool: any;

  constructor() {
    this.pool = new Pool;
  }

  async createBlogTable(): Promise<void> {
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
}
