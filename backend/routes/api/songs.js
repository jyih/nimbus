const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Song } = require('../../db/models');

const router = express.Router();

// const validateSongs = [
//   check('albumId')
//     .exists({ checkFalsy: true })
//     .withMessage('Please select an Album.'),
//   check('url')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a url.'),
//   check('title')
//     .not()
//     .isEmail()
//     .withMessage('Please provide a song title.'),
//   handleValidationErrors,
// ];

// Create Song
router.post(
  '/',
  // validateSongs,
  asyncHandler(async (req, res) => {
    const { albumId, url, title } = req.body;
    const song = await Song.upload({ albumId, url, title });

    return res.json({
      song,
    });
  }),
);

router.get('/', asyncHandler(async (req, res) => {
  return res.json(await Song.findAll())
}))

// Get Song
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const song = await Song.findByPk(id);
  return res.json(song)
})

)

// Edit a Song
router.put('/:id', asyncHandler(async (req, res) => {
  const songId = req.params.id;
  const { albumId, url, title } = req.body;
  await Song.update(albumId, url, title,
    {
      where: { id: songId },
      returning: true,
      plain: true
    }
  )
  return await Song.findByPk(songId);
}))

//Delete Song
router.delete('/:id', asyncHandler(async (req, res) => {
  const songId = req.params.id;
  const song = await Song.findByPk(songId);
  if (!song) throw new Error('Cannot find song');

  await Song.destroy({ where: { id: song.id } });
  const deletedId = song.id;
  return res.json({ deletedId })
})
)

module.exports = router;