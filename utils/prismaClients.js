const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/NoteController');

router.post('/tags', addTags);

module.exports = router;
