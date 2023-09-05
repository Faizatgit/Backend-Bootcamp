const express = require('express');
const blogController = require('../controllers/blogController');
const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.get('/', catchAsync(blogController.findBlogs));
router.post('/', catchAsync(blogController.createBlog));
router.get('/:id',catchAsync(blogController.findBlogById));

module.exports = router;