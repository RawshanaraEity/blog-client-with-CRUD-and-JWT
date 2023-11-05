const Newslettter = () => {
  return (
    <div className="my-10">
      <div className="hero px-10 h-96 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Subscribe to InKly newsletter and stay updated.
            </h1>
            <p className="py-6 text-2xl">
              Do not miss anything. Get all the latest posts delivered straight
              to your inbox. It is free!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md border bg-[rgba(104,204,204,0.2)] shadow-2xl ">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered rounded-full text-black"
                  
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered rounded-full text-black"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-slate-800 text-white rounded-full text-xl font-bold capitalize">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslettter;
