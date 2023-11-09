import swal from "sweetalert";

const Newslettter = () => {


  const handleSubscribe = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
   
    console.log(email,name)

    if(handleSubscribe){
      swal("Wow","Subscribed Successfully", "success");
    } 
}


  return (
    <div className="my-10">
      <div className="hero px-10 h-96 bg-gradient-to-r from-teal-500  text-white">
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
          <div className="card flex-shrink-0 w-full max-w-md border bg-[rgba(135,219,219,0.2)] shadow-2xl ">
            <form onSubmit={handleSubscribe} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered rounded-full text-black"
                  
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="email"
                  name="email"
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
