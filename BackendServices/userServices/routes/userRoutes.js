const dbQueries = require("../queries/userQueries");

const userRoutes = (app) => {
  app.get("/users", dbQueries.getUsers);
  app.post("/user/create", dbQueries.createUser);
  app.post("/user/login", dbQueries.loginUser)
};

module.exports ={ 
  userRoutes,
};
