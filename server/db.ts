import { Sequelize } from "sequelize";
import { log } from "./vite";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: (msg) => log(msg, "sequelize"),
});

export async function testConnection() {
  try {
    await sequelize.authenticate();
    log("Database connection has been established successfully.", "sequelize");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    // process.exit(1);
  }
}

export default sequelize;
