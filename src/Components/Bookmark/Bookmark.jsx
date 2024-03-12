import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  return (
    <div className=" bg-gray-50 m-3 p-2 rounded-md">
      <h3>{bookmark.title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
