require("dotenv").config();

export const DB_HOST = process.env.DB_HOST;
export const USER = process.env.DB_USER;
export const PASSWORD = process.env.DB_PASSWORD;
export const DB = process.env.DB_NAME;
export const dialect = "mysql";


