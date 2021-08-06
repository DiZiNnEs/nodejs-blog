import express, { Express } from "express";

import { Request, Response } from 'express';

import { Queries } from "../database/queries";

import { PORT } from "../config";

import path from "path";

export class BlogsRoutes {
  app: Express;
  queries: Queries;

  constructor(queries: Queries) {
    this.app = express()
    this.queries = queries;

    this.app.listen(PORT, () => console.log(`Application has been started on port: ${PORT} | http://localhost:${PORT}/`))
  }

  index(): express.Express {
    return this.app.get('/', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../templates/index.html'));
    })
  }

  blogs(): express.Express {
    return this.app.get('/blogs', async (req: Request, res: Response) => {
      res.send(await this.queries.getPosts())
    })
  }
}
