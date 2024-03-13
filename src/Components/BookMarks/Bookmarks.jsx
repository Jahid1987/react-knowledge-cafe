import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readTime, removeBookmarks }) => {
  return (
    <div className=" w-2/5 ">
      <div className=" bg-purple-100 text-purple-700 p-5 rounded-md ">
        <p className="font-semibold">Spent time on read: {readTime}</p>
      </div>
      <div className="bg-slate-200 mt-3 pt-1 pb-1 rounded-md">
        <h2 className=" font-bold ml-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, index) => (
          <Bookmark
            removeBookmarks={removeBookmarks}
            key={index}
            bookmark={bookmark}
          ></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
  removeBookmarks: PropTypes.func.isRequired,
};
export default Bookmarks;
