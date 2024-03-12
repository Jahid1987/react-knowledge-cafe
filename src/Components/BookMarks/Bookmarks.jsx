import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className=" w-2/5 ">
      <div className=" bg-purple-100 text-purple-700 p-5 rounded-md ">
        <p className="font-semibold">Spent time on read: {}</p>
      </div>
      <div className="bg-slate-200 mt-3 pt-1 pb-1 rounded-md">
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default Bookmarks;
