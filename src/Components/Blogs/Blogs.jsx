import { useEffect, useState } from "react";
import "./Blogs.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return <div>{blogs.length}</div>;
};

export default Blogs;