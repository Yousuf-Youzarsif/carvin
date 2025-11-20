import { Pool } from "pg";
const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORTDB,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

export default pool;
