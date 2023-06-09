const userRoutes = require("./routes/user-routes");
const imageRoutes = require("./routes/image-upload"); // add this file import to the top of the file
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware, used to be bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", userRoutes);
app.use("/api/", imageRoutes);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
