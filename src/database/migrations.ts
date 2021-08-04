const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "postgres",
  port: 5432,
};


async function createTables(): Promise<void> {
  const pool = new Pool(credentials);
  await pool.query("CREATE TABLE IF NOT EXISTS blog_posts (title VARCHAR(64), full_text TEXT)");
  await pool.end();
}


async function main() {
  await createTables();
}

main();
