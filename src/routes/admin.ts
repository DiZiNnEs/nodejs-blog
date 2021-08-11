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
        id: undefined,
        title: req.body.title,
        author: req.body.author,
        full_text: req.body.full_text,
        date_time: Date.now()
      };
      console.log(data);
      await this.queries.addPost(data);

      const context = { blogs: await this.queries.getPosts() }
      res.render('admin/main', context)
    })
  }

  editPostGET(): express.Express {
    return APP.get('/admin/edit-post/:id/', async (req: Request, res: Response) => {
      const id: number = Number(req.params.id)
      const context = {
        post: await this.queries.getPost(id)
      }
      res.render('admin/edit-post', context)
    })
  }

  editPostPOST(): express.Express {
    return APP.post('/admin/edit-post/:id/', async (req: Request, res: Response) => {
      const id: number = Number(req.params.id)
      const data: Blog = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        full_text: req.body.full_text,
        date_time: Date.now()
      };
      await this.queries.updatePost(data);

      const context = { blogs: await this.queries.getPosts() }
      res.render('admin/main', context)
    })
  }

  deletePost(): express.Express {
    return APP.get('/admin/delete-post/:id/', async (req: Request, res: Response) => {
      const id: number = Number(req.params.id)
      await this.queries.deletePost(id)

      const context = { blogs: await this.queries.getPosts() }
      res.render('admin/main', context)
    })
  }
}
