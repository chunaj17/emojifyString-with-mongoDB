const express = require("express");
const toDo = require("./routes/toDo");
const connectDB = require("./db/connect")
const url = " mongodb://127.0.0.1:27017/mondb"
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v2", toDo);
const port = 3000;
const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    })
  } catch (error) {
    console.log(error);
  }
}
start()

