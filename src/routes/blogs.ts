import express, { Express } from "express";

import { Request, Response } from 'express';

import path from "path";
import { Queries } from "../database/queries";

import { PORT } from "../config"

export class BlogsRoutes {
  app: Express;
  queries: Queries;

  constructor(queries: Queries) {
    this.app = express()
    this.queries = queries;

    this.app.listen(PORT, () => console.log(`Application has been started on port: ${PORT}`))
  }

  index() {
    return this.app.get('/', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../templates/index.html'));
    })
  }

  blogs() {
    return this.app.get('/blogs', async (req: Request, res: Response) => {
      res.send(await this.queries.getPosts())
    })
  }


}
