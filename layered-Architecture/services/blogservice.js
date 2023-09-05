const blogRepo = require('../repository/blogRepo');

const findBlogs = () => {
    console.log("Finding all the blogs");
    const blogs = blogRepo.findBlogs();
    return blogs;
}

const createBlog = (title , description) => {
    console.log("Creating a blog");
    return blogRepo.createBlog();
}

const findBlogById = async(id) =>{
    console.log("Finding blog with id =" + id)
    const blog = blogRepo.findBlogById(id);
    if(!blog)
    {
        throw new Error(`Blog with ${id} not found!`);
    }
    return blog;
}

module.exports = {
    findBlogs,
    createBlog,
    findBlogById
};