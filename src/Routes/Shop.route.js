const express = require("express");
const ShopModel = require("../Models/Shop.model");

const app = express.Router();

// const Authmiddleware = async (req, res, next) => {
//   let token = req.headers.token;
//   if (token) {
//     let [id, email, password] = token.split(":");
//     let user = await User.findById(id);

//     if (user.email === email && user.password === password) {
//       next();
//     } else {
//       res.status(401).send("User is not authenticated check Credintials");
//     }
//   } else {
//     res.status(401).send("User is not authenticated check Credintials");
//   }
// };

// app.get("/:id", Authmiddleware, async (req, res) => {
//   try {
//     let id = req.params.id;
//     let profile = await User.findById(id);
//     res.status(200).send(profile);
//   } catch (e) {
//     res.status(401).send(e.message);
//   }
// });

app.get("/", async (req, res) => {
  let shopList = await ShopModel.find();
  res.send(shopList);
});

app.post("/addItem", async (req, res) => {
  let { Title, Quantity, Priority, Description, timestamps } = req.body;
  try {
    let shopList = await ShopModel.create(req.body);
    res.send({
      token: `${shopList.id}:${shopList.Title}:${shopList.timestamps}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});


app.delete("/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    let afterDelete = await ShopModel.findByIdAndDelete(id);
    return res.status(200).send(afterDelete);
} catch (e) {
    res.status(401).send(e.message);
}
})

module.exports = app;
