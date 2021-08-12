const { Pool } = require("pg");

import { DATABASE } from "../config";


export class Models {
  pool: any;

  constructor() {
    this.pool = new Pool(DATABASE);
  }

  async createUserModel(): Promise<void> {
    const query = `
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(128),
            password VARCHAR(256),
            email VARCHAR(32)
        )
    `;
    await this.pool.query(query)
      .then(() => console.log('successfully create USER table'))
      .catch((err: Error) => console.log(`ERROR in models (USERS table): ${err}`));

  }

  async createBlogTable(): Promise<void> {
    const query = `
        CREATE TABLE IF NOT EXISTS blog_posts(
          id SERIAL PRIMARY KEY NOT NULL,
          title VARCHAR(64), 
          author VARCHAR(64), 
          date_time DATE,
          full_text TEXT)
    `;
    await this.pool.query(query)
      .then(() => console.log('successfully create BLOG table'))
      .catch((err: Error) => console.log(`ERROR in models (BLOG table): ${err}`))

    await this.pool.end()
  }
}
