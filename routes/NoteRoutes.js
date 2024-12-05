const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/notescontrollers');

router.post('/tags', addTags);

module.exports = router;