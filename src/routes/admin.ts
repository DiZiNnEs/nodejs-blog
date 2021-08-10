import express from "express";
import { Request, Response } from "express/ts4.0";
import { APP } from "../config";
import { Queries } from "../database/queries";
import { Blog } from "../database/types";

export class Admin{
  queries: Queries;

  constructor(queries: Queries) {
    this.queries = queries;
  }

  adminPanel(): express.Express {
    return APP.get('/admin/', async (req: Request, res: Response) => {
      const context = { blogs: await this.queries.getPosts() }
      res.render('admin/main', context)
    })
  }

  addPostsGET(): express.Express {
    return APP.get('/admin/add-posts/', async (req: Request, res: Response) => {
      console.log('GET');
      const context = {};
      res.render('admin/add-post', context)
    })
  }

  addPostsPOST(): express.Express {
    return APP.post('/admin/add-posts/', async (req: Request, res: Response) => {

      const data: Blog = {
        title: req.body.title,
        author: req.body.author,
        full_text: req.body.full_text,
        date_time: Date.now()
      };
      console.log(data);
      await this.queries.addPost(data);
      res.render('admin/add-posts')
    })
  }
}
