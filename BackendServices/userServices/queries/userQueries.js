const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.NODE_PSQL_USERNAME,
  host: "localhost",
  database: "Node",
  password: process.env.NODE_PSQL_PASSWORD,
  port: 5432,
});

const handleErrors = (error, response) => {
  if (error) {
    // Check for unique constraint violation
    if (error.code === "23505") {
      // Duplicate key value error
      return response.status(409).json({
        message:
          "User already exists with this username or email. Please choose a different one.",
      });
    }
    console.error("Error executing query:", error);
    return response.status(500).json({
      message:
        "An error occurred while adding the user. Please try again later.",
    });
  }
};

const getUsers = (request, response) => {
  pool.query(`SELECT * FROM users.users_table`, (error, results) => {
    if (error) {
      handleErrors(error, response);
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { first_name, last_name, user_name, email_id, user_password } =
    request.body;
  pool.query(
    `INSERT INTO users.users_table (first_name,last_name,email_id,user_name,user_password) VALUES ($1, $2 , $3, $4, $5) RETURNING *`,
    [first_name, last_name, email_id, user_name, user_password],
    (error, results) => {
      if (error) {
        handleErrors(error, response);
        throw error;
      }
      response
        .status(201)
        .json({ message: "User has been created", token: "WpwxtLr12" });
    }
  );
};

const loginUser = (request, response) => {
  const { user_name, user_password } = request.body;
  pool.query(
    `
    SELECT * FROM users.users_table WHERE user_name = $1 AND user_password = $2;
  `,
    [user_name, user_password],
    (error, results) => {
      if (error) {
        console.error("Error executing query", error);
        return response.status(500).json({ error: "Database error" });
      }

      if (results.rows.length > 0) {
        // User found
        response
          .status(200)
          .json({ message: "Login successful", token: "WpwxtLr12" });
      } else {
        // User not found
        response.status(401).json({ message: "Invalid username or password" });
      }
    }
  );
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
};
