import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import Loading from "../../components/Loading";

import BlogCard from "./BlogCard";
import { useState } from "react";

const AllBlogs = () => {
  const [filterBlogs, setFilterBlogs] = useState();
  const { data, isLoading } = useBlogs();
  

  const handleBlogs = (category) => {
    // const result = e.target.value;
    const filterBlog = data.filter((blog) => blog.category === category);
    setFilterBlogs(filterBlog);
    console.log(filterBlogs);
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="my-10 text-5xl text-center">All Blogs are here</h1>
      <div className="">
        <div className="my-10 flex justify-center ">
          {data.slice(0, 4).map((blog) => (
            <Link key={blog._id} to={`/allBlogs/${blog.category}`}>
              <button
                onClick={() =>handleBlogs(blog.category)}
                key={blog._id}
                className="btn mr-2 bg-slate-800 text-white text-xl font-bold capitalize"
              >
                {blog.category}
              </button>
            </Link>
          ))}
        </div>
        <div>
          {filterBlogs? (
            <div>
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
                {filterBlogs.map((blogs) => (
                  <BlogCard key={blogs._id} blogs={blogs}></BlogCard>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
                {data.map((blogs) => (
                  <BlogCard key={blogs._id} blogs={blogs}></BlogCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
