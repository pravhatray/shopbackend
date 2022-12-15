const express = require("express");
const BookmarkModel = require("../Models/bookmark.model");

const app = express.Router();


app.post("/", async (req, res) => {
    try {
      let bookmarked = new BookmarkModel({ ...req.body });
      await bookmarked.save();
      res.status(200).send(bookmarked);
    } catch (er) {
      return res.status(500).send({ msg: er.message });
    }
  });
  
  app.get("/", async (req, res) => {
    try {
      let bookmarked = await BookmarkModel.find();
      res.status(200).send(bookmarked);
    } catch (er) {
      return res.status(404).send({ msg: er.message });
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
