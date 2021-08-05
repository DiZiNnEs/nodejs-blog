import express from 'express';

import  { Request, Response } from 'express';
import { main } from "./database/models";
import { Queries } from "./database/queries";

const path = require('path');
const app = express();
const port = 3000;


main()

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
