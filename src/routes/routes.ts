import express, { Express } from "express";
import { Queries } from "../database/queries";
import { PORT } from "../config";

export class Routes {
  app: Express;
  queries: Queries;

  constructor(queries: Queries) {
    this.app = express()
    this.queries = queries;

    this.app.set('views', './src/views');
    this.app.set('view engine', 'pug');
    this.app.listen(PORT, () => console.log(`Application has been started on port: ${PORT} | http://localhost:${PORT}/`));
  }
}
