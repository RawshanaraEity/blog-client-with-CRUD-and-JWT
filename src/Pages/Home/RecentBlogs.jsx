
import  { useState, useEffect } from "react";
import useBlogs from "../../Hooks/useBlogs";
import Loading from "../../components/Loading";
import BlogCard from "../AllBlogs/BlogCard";

const RecentBlogs = () => {
  const { data: blogs, isLoading } = useBlogs();

  // sorted blogs
  const [sortedBlogs, setSortedBlogs] = useState([]);

  useEffect(() => {
    if (blogs) {
      // Sort blogs by date in descending order (recent first)
      const sortedData = [...blogs].sort((a, b) => {
        const dateA = new Date(a.date + "T" + a.current_time);
        const dateB = new Date(b.date + "T" + b.current_time);
        return dateB - dateA;
      });
      setSortedBlogs(sortedData);
    }
  }, [blogs]);

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-semibold my-10 text-center">Our Recent Blogs</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
        {sortedBlogs?.slice(0,6).map((blogs) => (
          <BlogCard key={blogs._id} blogs={blogs}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
