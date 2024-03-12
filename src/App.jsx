import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/BookMarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  function handleSetBookmarks(blog) {
    setBookmarks([...bookmarks, blog]);
  }
  return (
    <>
      <Header></Header>
      <div className="p-3 md:flex max-w-7xl gap-5 mx-auto">
        <Blogs setBookmarks={handleSetBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
