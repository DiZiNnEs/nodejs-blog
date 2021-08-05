import express from 'express';

import  { Request, Response } from 'express';
import { main } from "./database/models";

const path = require('path');
const app = express();
const port = 3000;


main()

app.get('/', (req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
})

app.listen(port, () => {
  console.log(`Application has been started on ${port}`);
});
