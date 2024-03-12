import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, id, author } = blog;
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
