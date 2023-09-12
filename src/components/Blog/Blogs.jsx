import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({bookmarkBtnHandleClick, readBtnHandleClick}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    }, []);


    return (
        <div className="md:w-2/3">
            <h1 className="font-bold">Blog: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} bookmarkBtnHandleClick={bookmarkBtnHandleClick} readBtnHandleClick={readBtnHandleClick}></Blog>)
            }
        </div>
    );
};

export default Blogs;