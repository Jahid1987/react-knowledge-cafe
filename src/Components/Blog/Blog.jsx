import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({ blog, setBookmarks }) => {
  //   console.log(setBookmarks);
  const {
    title,
    author,
    cover,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="p-2 w-full max-w-[845px] flex flex-col mb-5 rounded-lg border">
      <img className="rounded-lg" src={cover} alt={`cover photo of ${title}`} />
      <div className="flex justify-between items-center mt-8">
        <div className="flex justify-between items-center gap-5">
          <div>
            <img
              className="w-16 h-16 rounded-full "
              src={author_img}
              alt={`photo of ${author}`}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p className="text-sm text-gray-600">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-sm text-gray-600">{reading_time} min read </p>
          <FaBookmark onClick={() => setBookmarks(blog)} />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-extrabold">{title}</h2>
        <p>
          {hashtags.map((hash, index) => (
            <span className="mr-3 text-gray-600" key={index}>
              #{hash}
            </span>
          ))}
        </p>
      </div>
      <div className="mt-8 mb-8">
        <p className=" text-blue-600 text-lg font-bold underline underline-offset-2 ">
          Mark as read
        </p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  setBookmarks: PropTypes.func.isRequired,
};
export default Blog;
