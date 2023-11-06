import useBlogs from "../../Hooks/useBlogs";
import Category from "../../components/Category";
import Loading from "../../components/Loading";
import BlogCard from "./BlogCard";


const AllBlogs = () => {
  const { data, isLoading } = useBlogs();

  console.log(data, isLoading);
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="bg-red-300 text-5xl text-center">
        All Blogs are here {data.length}
      </h1>
      <div className="">
        <div className="w-1/3 mx-auto">
          <Category></Category>
        </div>

        <div className="">
         <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
         {
            data.map(blogs => <BlogCard key={blogs._id} blogs={blogs}></BlogCard>)
          }
         </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
