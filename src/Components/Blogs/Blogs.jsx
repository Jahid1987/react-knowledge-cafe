import { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="">
      {blogs.map((blog) => (
        <Blog {...props} key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};
export default Blogs;
