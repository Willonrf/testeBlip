const express = require("express");
const dotenv = require("dotenv");
const config = require("./config");
const githubRoutes = require("./routes/githubRoutes");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(logger);

// Rotas
app.use("/api", githubRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;