import express from 'express';

import  { Request, Response } from 'express';
import { Models } from "./database/models";
import { Queries } from "./database/queries";

const path = require('path');
const app = express();
const port = 3000;


class Index {
  models: Models;

  constructor() {
    this.models = new Models;
  }

  async runDB(): Promise<void> {
    await this.models.createBlogTable()
  }
}
const index = new Index()

index.runDB()

const queries = new Queries()


app.get('/', (req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
})

app.get('/blogs', async (req: Request, res: Response) => {
  res.send(await queries.getPosts())
})

app.listen(port, () => {
  console.log(`Application has been started on ${port}`);
});
