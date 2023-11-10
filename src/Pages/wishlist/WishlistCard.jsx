
import { useState } from "react";
import { Link } from "react-router-dom";



const WishlistCard = ({blogs}) => {
    
    console.log(blogs);

    const [updatedWishlist, setUpdatedWishlist] = useState(blogs)
console.log(updatedWishlist);
    


const handleRemove = (id) =>{
        console.log(id)
        fetch(`https://blog-server-site-beta.vercel.app/wishlist/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const filterData = updatedWishlist.filter(item => item._id !== id)
            setUpdatedWishlist(filterData)

        })
    }


    return (
         <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
              {
                updatedWishlist.map(blog => ( 
                    <div key={blog._id}>
                        <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img src={blog.image} className="h-64 w-full" alt="image" />
                    </figure>
                    <div className="card-body h-96">
                      <div className="flex flex-col justify-between">
                      <h2 className="card-title">
                        {blog.title}
                      </h2>
                      <div className="badge p-4  badge-outline outline-slate-400 flex justify-end">{blog.category}</div>
                      </div>
                      <p>{blog.short_description.slice(0,250)}</p>
                      <div className="card-actions justify-end">
                      <Link>
                        <button className="btn bg-slate-800 text-white rounded-full">Details</button>
                        </Link>
                        <button onClick={() => handleRemove(blog._id)} className="btn btn-error text-white rounded-full">Remove</button>
                      </div>
                    </div>
                  </div>
                    </div> 
                )) 
          }
           
         </div>
    )
}

export default WishlistCard;