import { Blog } from "./types";

const {Pool} = require('pg');

import { DATABASE } from "../config";

export class Queries {
  pool: any;
  constructor() {
    this.pool = new Pool(DATABASE)
  }

  async getPosts(): Promise<string> {
    const query = 'SELECT t.* FROM public.blog_posts t';
    return this.pool.query(query)
  }

  async getPost(id: number): Promise<string> {
    const query = `SELECT id, title, author, date_time, full_text FROM blog.public.blog_posts WHERE id=${id}`;
    return await this.pool.query(query)
  }

  async addPost(data: Blog): Promise<void> {
    const query = `INSERT INTO blog.public.blog_posts (title, author, date_time, full_text)
                   VALUES ('${data.title}', '${data.author}, '${data.date_time}', '${data.full_text}' ')`;
    await this.pool.query(query)
      .then(() => console.log('all the good'))
      .catch((err: Error) => console.log('ERROR', err))
  }
}
