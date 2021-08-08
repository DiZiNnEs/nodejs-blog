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
}
