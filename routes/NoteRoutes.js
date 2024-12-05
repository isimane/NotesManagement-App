const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/notescontrollers');
const { validations, handleValidationErrors } = require('../utils/validator');

router.post('/tags', validations.tagValidation, handleValidationErrors, addTags);
router.get('/tags', getTags);
router.get('/tags/:id', getTagById);
router.put('/tags/:id', validations.tagValidation, handleValidationErrors, updateTag);
router.delete('/tags/:tagId', deleteTag);

router.post('/category', validations.tagValidation, handleValidationErrors, addCategories);
router.get('/category', getCategories);
router.get('/category/:id', getCategoryById);
router.put('/category/:id', validations.tagValidation, handleValidationErrors, updateCategory);
router.delete('/category/:categoryId', deleteCategory);
module.exports = router;