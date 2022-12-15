const express = require("express");
// const port = 8000;
const cors=require("cors")
const dbConnect = require("../src/config/db");
const ShopRoute=require("./Routes/Shop.route")
const BookmarkedItem=require("./Routes/bookmark.route")



require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/shop",ShopRoute)
app.use("/bookmarked",BookmarkedItem)





app.get("/", (req, res) => {
  res.send("Shopping List");
});

app.listen(PORT, async () => {
  await dbConnect()
  console.log(`server started at http://localhost:${PORT}`);
});
