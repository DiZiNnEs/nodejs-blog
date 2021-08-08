import express from "express";

import { Request, Response } from 'express';

import { Routes } from "./routes";

export class BlogsRoutes extends Routes {
  index(): express.Express {
    return this.app.get('/', async (req: Request, res: Response) => {
      const context = { blogs: await this.queries.getPosts() }
      res.render('index', context);
    })
  }

  blog(): express.Express {
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
