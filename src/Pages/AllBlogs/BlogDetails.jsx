import { Link, useParams } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import Loading from "../../components/Loading";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BlogDetails = () => {
  const { data, isLoading } = useBlogs();
  const {  user } = useContext(AuthContext);
 
  console.log(data);
  const { id } = useParams();
  console.log(id);

  const singleBlog = data?.find((blogs) => blogs._id === id);
  console.log(singleBlog);

  if (isLoading) {
    return <Loading></Loading>;
  }


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
    author_img
  } = singleBlog;
  

  return (
    <div className="py-10 bg-gradient-to-b from-[rgba(135,219,216,0.74)] ">
      <div className="w-2/3 mx-auto ">
        <div className="badge p-4  badge-secondary outline-slate-400 flex justify-end">
          {category}
        </div>
        <h2 className="text-3xl md:text-4xl text-black font-semibold ">{title}</h2>
      </div>

      <div className="w-2/3 mx-auto mt-10 flex items-center gap-5">
        <div className="avatar text-center">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={author_img} />
          </div>
        </div>
        <p className="text-xl text-black font-semibold">{author_name}</p>
        <p className="text-base text-gray-600 font-semibold">Date: {date}</p>
      </div>
      <div className="py-10 px-5 lg:px-0">
        <div className="w-full md:w-2/3 mx-auto shadow-xl">
          <figure>
            <img src={image} className="h-[300px] md:h-[500px] w-full" alt="image" />
          </figure>
          <div className="card-body ">
            <div className="flex flex-col justify-between">
              <h2 className="card-title">{title}</h2>
            </div>
            <p>{short_description}</p>
            <p>{long_description}</p>
            {
              user?.email? <textarea className="textarea textarea-bordered textarea-sm my-10 text-slate-400" name="comment" placeholder="Add your comment here" id="" cols="30" rows="3"></textarea>
              : ""
            }
            
            <div className="card-actions justify-end">
              {
                user?.email? 
                <Link to={`/update/${_id}`}>
                <button className="btn btn-outline rounded-full">
                Update
              </button>
                </Link> 
              : ""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
