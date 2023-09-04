const express = require('express');
const { blogController } = require('../controllers');

const router = express.Router();

router.get('/',blogController.getAllBlogs);
router.post('/',blogController.createBlogs);

module.exports = router;