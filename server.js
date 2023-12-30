const express = require("express");
const app = express();

const PORT = 3500 || process.env.PORT;

app.use("/user", require("./routes/api/user"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
