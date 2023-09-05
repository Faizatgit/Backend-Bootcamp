const { json } = require('express');
const blogService = require('../services/blogservice');

const findBlogs = async(req,res) => {
    console.log("Request recieved for finding all the blogs");
    const blogs = await blogService.findBlogs();
    res.json(blogs);
}

const createBlog = async (req,res) => {
    console.log("Request recieved for creating a blog");
    await blogService.createBlog();
    res.json({ message: "Success"});
}

const findBlogById = async (req,res) => {
    console.log(`Request recieved for finding a blog by id:${req.params.id}`);
    const { id } = req.params;
    const blog = blogService.findBlogById(id);
    res.json(blog);
}

module.exports = {
    findBlogs,
    createBlog,
    findBlogById
}