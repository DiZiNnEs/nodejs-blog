import express from "express";

import { Request, Response } from "express/ts4.0";
import { APP } from "../config";
import { Queries } from "../database/queries";


export class BlogsRoutes {
  queries: Queries

  constructor(queries: Queries) {
    this.queries = queries;
  }

  index(): express.Express {
    return APP.get('/', async (req: Request, res: Response) => {
      const context = { blogs: await this.queries.getPosts() }
      res.render('index', context);
    })
  }

  blog(): express.Express {
    return APP.get(`/read/:id/`, async (req: Request, res: Response) => {
      const id: number = Number(req.params.id)
      const context = {
        id: id,
        blog: await this.queries.getPost(id)
      }
      res.render('detail', context)
    })
  }
}
