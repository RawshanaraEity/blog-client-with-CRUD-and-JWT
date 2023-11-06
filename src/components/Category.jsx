

const Category = () => {
    return (
        <div className="flex space-x-5 my-10">
              <button className="btn bg-slate-800 text-white rounded-full text-xl font-bold capitalize">
         All
          </button>
            <button className="btn bg-slate-800 text-white rounded-full text-xl font-bold capitalize">
         Technology
          </button>
         <button className="btn bg-slate-800 text-white rounded-full text-xl font-bold capitalize">
         Travel
          </button>
         <button className="btn bg-slate-800 text-white rounded-full text-xl font-bold capitalize">
         Food
          </button>
         <button className="btn bg-slate-800 text-white rounded-full text-xl font-bold capitalize">
         Interior
          </button>
        </div>
    );
};

export default Category;