import express from 'express';

import  { Request, Response } from 'express';

const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req:Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
})

app.listen(port, () => {
  console.log(`Application has been started on ${port}`);
});
