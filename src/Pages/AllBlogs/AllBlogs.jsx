import useBlogs from "../../Hooks/useBlogs";
import Category from "../../components/Category";
import Loading from "../../components/Loading";

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
      <div className="grid grid-cols-5">
        <div className="bg-blue-300 col-span-1">
          <h2>left</h2>
          <Category></Category>
        </div>

        <div className="bg-green-300 col-span-4">
          <h2>right</h2>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
