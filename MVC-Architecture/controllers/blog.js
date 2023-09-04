const Blog = require('../models/blog');

const getAllBlogs = async (req,res)=>{
    const blogs = await Blog.find({});
    res.render('index', {blogs});
};

const createBlogs = async(req,res)=> {
    const { title , description} = req.body;
    await Blog.create({title , description});
    res.json({message: "success"});
}

module.exports = {
    getAllBlogs,
    createBlogs
};
