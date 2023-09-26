import pool from "../database/pool";

const initializeDatabaseConnection = async () => {
  try {
    // Test the database connection
    return await pool.query("SELECT NOW()");
  } catch (error) {
    throw new Error(error as unknown as string);
  }
};

export default initializeDatabaseConnection;
