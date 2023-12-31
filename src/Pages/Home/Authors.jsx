import useBlogs from "../../Hooks/useBlogs";
import Loading from "../../components/Loading";


const Authors = () => {
    const { data, isLoading } = useBlogs();
    console.log(data);

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className="my-10">
            <h2 className="text-4xl md:text-5xl font-semibold my-10 text-center">Our Authors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-10 md:gap-0 ">
          {
                data?.slice(0,4).map(blog => (
                    <div key={blog._id}>
                        <img src={blog.author_img} alt="" className="h-60 w-60 rounded-lg" />
                        <p className="text-black text-lg font-bold mt-4">{blog.author_name}</p>
                    </div>
                )
                )
            }
          </div>
           
        </div>
    );
};

export default Authors;