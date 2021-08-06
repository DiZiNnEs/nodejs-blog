const {Pool} = require('pg');

import { DATABASE } from "../config";

export class Queries {
  pool: any;
  constructor() {
    this.pool = new Pool(DATABASE)
  }

  async getPosts(): Promise<any> {
    const query = 'SELECT t.* FROM public.blog_posts t';
    return this.pool.query(query)
  }
}
