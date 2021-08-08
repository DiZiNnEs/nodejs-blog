import express, { Express } from "express";

import { Request, Response } from 'express';

import { Queries } from "../database/queries";

import { PORT } from "../config";

export class BlogsRoutes {
  app: Express;
  queries: Queries;

  constructor(queries: Queries) {
    this.app = express()
    this.queries = queries;

    this.app.set('views', './src/views');
    this.app.set('view engine', 'pug');
    this.app.listen(PORT, () => console.log(`Application has been started on port: ${PORT} | http://localhost:${PORT}/`));
  }

  index(): express.Express {
    return this.app.get('/', async (req: Request, res: Response) => {
      const context = { blogs: await this.queries.getPosts() }
      res.render('index', context);
    })
  }

  blogs(): express.Express {
    return this.app.get(`/read/:id/`, async (req: Request, res: Response) => {
      const id: number = Number(req.params.id)
      const context = {
        id: id,
        blog: await this.queries.getPost(id)
      }
      res.render('detail', context)
    })
  }
}
