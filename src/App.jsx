import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/BookMarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  function handleSetBookmarks(blog) {
    setBookmarks([...bookmarks, blog]);
  }
  function handleSetReadTime(time, id) {
    setReadTime(readTime + time);
    handleRemoveBookmarks(id);
  }

  function handleRemoveBookmarks(id) {
    setBookmarks([...bookmarks.filter((item) => item.id !== id)]);
  }
  return (
    <>
      <Header></Header>
      <div className="p-3 md:flex max-w-7xl gap-5 mx-auto">
        <Blogs
          setReadTime={handleSetReadTime}
          setBookmarks={handleSetBookmarks}
        ></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
