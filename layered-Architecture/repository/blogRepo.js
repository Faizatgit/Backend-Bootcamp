const Blog = require('../models/blog');

const findBlogs = () => {
    console.log("Finding all the blogs");
    return Blog.find({});
}

const createBlog = (title , description) => {
    console.log("Creating a blog");
    return Blog.create({title , description});
}

const findBlogById = (id) => {
    console.log("Finding one blog whose id is " +id);
    return Blog.findById(id);
}

module.exports = {
    findBlogs,
    createBlog,
    findBlogById
}