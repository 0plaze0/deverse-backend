const express = require("express");
const app = express();

const PORT = 3500 || process.env.PORT;

app.use("/api/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
