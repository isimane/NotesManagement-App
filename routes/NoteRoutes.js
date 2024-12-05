const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/notescontrollers');
const { validations, handleValidationErrors } = require('../utils/validator');

router.post('/tags',validations.tagValidation, handleValidationErrors ,addTags);

module.exports = router;