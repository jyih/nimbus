const express = require('express');
const asyncHandler = require('express-async-handler');

// const { Song } = require('../../db/models');
const { Album } = require('../../db/models');
// const { User } = require('../../db/models');

const router = express.Router();

//Create Album
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { userId, title, imageUrl } = req.body;
    const album = await Album.create({ userId, title, imageUrl });
    return res.json({
      album,
    });
  }),
);
