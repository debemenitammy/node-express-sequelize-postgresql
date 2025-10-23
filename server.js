const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:8081", // update this later if your frontend runs elsewhere
};
app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Import database models
const db = require("./app/models");

async function startServer() {
  try {
    // Test database connection
    await db.sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    // Sync models (create tables if not existing)
    await db.sequelize.sync();
    console.log("✅ Database synced successfully.");

    // Simple route
    app.get("/", (req, res) => {
      res.json({ message: "Welcome to sample auto preview demo." });
    });

    // Routes
    require("./app/routes/turorial.routes")(app);

    // Start the server
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}.`);
    });

  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
    process.exit(1); // Exit if DB connection fails
  }
}

startServer();
