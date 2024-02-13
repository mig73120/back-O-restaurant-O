// Load environnement variables
import "./app/helpers/env.load.js";

// connexion DB
//import "./app/utils/connect_database.js";

// Third party dependencies
import express from "express";
import cors from "cors";

// Local dependencies
//import router from "./app/router/index.js";

// ===== Create server =====
const app = express();

// add body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// enable cors
app.use(cors());

// plug router
//app.use(router);

// Start application
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Start API on http://localhost:${PORT}`);
});