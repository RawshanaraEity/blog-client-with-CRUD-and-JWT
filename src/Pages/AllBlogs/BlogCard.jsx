const BlogCard = ({ blogs }) => {
  const {
    _id,
    title,
    image,
    category,
    short_description,
    long_description,
    date,
    current_time,
    author_name,
    author_img,
  } = blogs;

  // console.log(Object.keys(blogs).join(','))
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-60 w-full" alt="image" />
        </figure>
        <div className="card-body h-96">
          <h2 className="card-title">
            {title}
          </h2>
          <div className="badge p-4 text-white badge-secondary">{category}</div>
          <p>{short_description.slice(0,200)}</p>
          <div className="card-actions justify-end">
            <div className="btn bg-slate-800 text-white rounded-full">Details</div>
            <div className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full">Wishlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
