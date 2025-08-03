const express = require("express");
const userRouter = require("./routers/user");
const localRouter = require("./routers/local");
const reviewRouter = require("./routers/review");
const categoryRouter = require("./routers/category");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/test", (req, res) => res.send("hello"));

app.use("/users", userRouter);
app.use("/local", localRouter);
app.use("/reviews", reviewRouter);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`listen${port}`);
});
