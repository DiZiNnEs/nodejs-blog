const { Pool } = require("pg");

import { DATABASE } from "../config";


export class Models {
  pool: any;

  constructor() {
    this.pool = new Pool(DATABASE);
  }

  async createUserModel(): Promise<void> {
    const query = `
        CREATE TABLE IF NOT EXISTS admins(
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(128),
            password VARCHAR(256),
            email VARCHAR(32)
        );

        
      
    `;
    await this.pool.query(query)
      .then(() => console.log('successfully create ADMINS table'))
      .catch((err: Error) => console.log(`ERROR in models (ADMINS table): ${err}`));


      const sqlCount: any = Object.values(await this.pool.query(`SELECT COUNT(*) AS RowCount FROM public.admins`))[3];
      const countElementInTable = sqlCount[0].rowcount;

      if (countElementInTable < 1) {
        const query = `INSERT INTO public.admins (username, password, email)
                       VALUES ('dizi', '12345', 'dizi@gmail.com')`
        await this.pool.query(query)
          .then(() => console.log('successfully create SUPERUSER IN ADMIN table'))
          .catch((err: Error) => console.log(`ERROR in models (SUPERUSER IN ADMIN table): ${err}`));
      }
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
