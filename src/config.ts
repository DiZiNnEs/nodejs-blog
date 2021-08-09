import express from "express";

const bodyParser = require('body-parser');

export interface IDatabase {
  user: string,
  host: string,
  database: string,
  password: string | number
  port: string | number
}

export const DATABASE: IDatabase = {
  user: "postgres",
  host: "db",
  database: "blog",
  password: "postgres",
  port: 5432,
};

export const PORT = 3000;



export const APP = express()

APP.use(bodyParser.urlencoded({ extended: false }))
APP.use(bodyParser.json())

APP.set('views', './src/views');
APP.set('view engine', 'pug');
