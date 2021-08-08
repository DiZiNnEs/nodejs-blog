import express from "express";
import { Request, Response } from "express/ts4.0";
import { APP } from "../config";
import { Queries } from "../database/queries";

export class Admin{
  queries: Queries;

  constructor(queries: Queries) {
    this.queries = queries;
  }

  adminPanel(): express.Express {
    return APP.get('/admin/', async (req: Request, res: Response) => {
      const context = {};
      res.render('admin/main', context)
    })
  }

  addPosts(): express.Express {
    return APP.get('/admin/add-posts/', async (req: Request, res: Response) => {
      const context = {};
      res.render('admin/main', context)
    })
  }
}
