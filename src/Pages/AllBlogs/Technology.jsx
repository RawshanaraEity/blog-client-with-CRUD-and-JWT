import { useParams } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import BlogCard from "./BlogCard";


const Technology = () => {
    const { data, isLoading } = useBlogs();
    const {category} = useParams()



  console.log(data, category)
    return (
        <div>
             <div className="">
         <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
         {
            data.map(blogs => <BlogCard key={blogs._id} blogs={blogs}></BlogCard>)
          }
         </div>
        </div>
        </div>
    );
};

export default Technology;