const express = require("express");
const Characters = require("../models/char");
const router = new express.Router();

// We'll handle POST method here
router.post("/char", async (req, res) => {
  try {
    const addChars = new Characters(req.body);
    console.log(req.body);
    const insertChar = await addChars.save();
    res.status(201).send(insertChar);
  } catch (error) {
    res.status(400).send(error);
  }
});

// We'll handle GET method here
router.get("/char", async (req, res) => {
  try {
    const getChars = await Characters.find({});
    res.send(getChars);
  } catch (error) {
    res.status(400).send(error);
  }
});

// individual character details
router.get("/char/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getChar = await Characters.findById(_id);
    res.send(getChar);
  } catch (error) {
    res.status(400).send(error);
  }
});

// individual character details update by patch
router.patch("/char/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getChar = await Characters.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getChar);
  } catch (error) {
    res.status(500).send(error);
  }
});

// individual character delete handle
router.delete("/char/:id", async (req, res) => {
  try {
    const getChar = await Characters.findByIdAndDelete(req.params.id);
    res.send(getChar);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
