import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";
import swal from "sweetalert";

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

  console.log(blogs)
  const myblog = {title,
    image,
    category,
    short_description,
    long_description,
    date,
    current_time,
    author_name,
    author_img,}


  const handleAddToWishlist = () =>{
       

    fetch('http://localhost:5000/wishlist', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(myblog)
        
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.acknowledged){
            swal("Congrats","Add Your Wishlist Successfully", "success");
          
        }
    })
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
      <PhotoProvider>
      <figure>
        <PhotoView src={image}>
        <img src={image} className="h-64 w-full" alt="image" />
        </PhotoView>
         
        </figure>
            </PhotoProvider>
      
        <div className="card-body h-96">
          <div className="flex flex-col justify-between">
          <h2 className="card-title">
            {title}
          </h2>
          <div className="badge p-4  badge-outline  flex justify-end">{category}</div>
          </div>
          <p>{short_description.slice(0,250)}</p>
          <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-slate-800 text-white rounded-full">Details</button>
            </Link>
            <button onClick={handleAddToWishlist} className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
