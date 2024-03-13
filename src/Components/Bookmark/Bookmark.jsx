import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";
const Bookmark = ({ bookmark, removeBookmarks }) => {
  // console.log(removeBookmarks);
  return (
    <div className=" relative bg-gray-50 m-3 p-2 rounded-md">
      <ImCross
        onClick={() => removeBookmarks(bookmark)}
        className=" text-xs text-red-500 absolute -top-1 -right-1"
      />
      <h3>{bookmark.title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  removeBookmarks: PropTypes.func.isRequired,
};
export default Bookmark;
