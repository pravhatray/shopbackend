const express = require("express");
const BookmarkModel = require("../Models/bookmark.model");

const app = express.Router();

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let bookmarkedItem = await BookmarkModel.find({ shopItemId: id }).populate(
      "shopItemId"
    );
    res.status(200).send(bookmarkedItem);
  } catch (er) {
    return res.status(404).send({ msg: er });
  }
});


app.post("/:id", async (req, res) => {
  try {
    let bookmarkeditem = await BookmarkModel.findOne({
      shopItemId: req.body.shopItemId,
    });

    let item = await BookmarkModel.create({
      ...req.body,
      shopItemId: req.params.id,
    });
    return res.send(item);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/:id",async(req,res)=>{
    try {
      const id = req.params.id;
      let afterDelete = await BookmarkModel.findByIdAndDelete(id);
      return res.status(200).send(afterDelete);
  } catch (e) {
      res.status(401).send(e.message);
  }
  })

module.exports = app;
