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
