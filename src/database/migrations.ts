const { Pool } = require("pg");

const credentials = {
  user: "postgres",
  host: "db",
  database: "blog",
  password: "postgres",
  port: 5432,
};


async function createTables(): Promise<void> {
  const pool = new Pool(credentials);
  await pool.query("CREATE TABLE IF NOT EXISTS blog_posts (title VARCHAR(64), full_text TEXT)");
  console.log('successfully create tables');
  await pool.end();
}


export async function main() {
  await createTables();
  console.log('successfully the end');
}
