

const WishlistCard = ({blogs}) => {
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


    return (
        <div>
             <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-64 w-full" alt="image" />
        </figure>
        <div className="card-body h-96">
          <div className="flex flex-col justify-between">
          <h2 className="card-title">
            {title}
          </h2>
          <div className="badge p-4  badge-outline outline-slate-400 flex justify-end">{category}</div>
          </div>
          <p>{short_description.slice(0,250)}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-800 text-white rounded-full">Details</button>
            <button  className="btn btn-error text-white rounded-full">Remove</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default WishlistCard;