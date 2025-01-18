import pg from "pg";
import dotnev from "dotenv";

dotnev.config();

// Connect to the database
const databaseString = process.env.DD_CONNECTION_STRING;

if (!databaseString) {
  throw new Error("No database connection string provided");
}

//set up pool query for database
export const pool = new pg.Pool({
  connectionString: databaseString,
});

pool.on("connect", () => {
  console.log("connected to the database");
});

pool.on("error", (err) => {
  console.log("Unexpectefd error on idle client", err);
  process.exit(-1);
});
