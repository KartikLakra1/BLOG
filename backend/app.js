const express = require("express");

const app = express();

// middlewares
app.use(express.urlencoded());

app.use("/", (req, res) => {
  return res.end("Server page");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on url http://localhost:${process.env.PORT}`);
});
