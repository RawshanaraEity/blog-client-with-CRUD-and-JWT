
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
import swal from "sweetalert";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(email,name,password,photo)

        // validation
        if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/.test(password)){
            swal("Oops!", "Plz type Minimum six characters, at least one capital letter and one special charecter at lest one numeric character ", "error");
        }

        else{
            // create user
        createUser(email,password)
        .then(result => {
            navigate('/')
            console.log(result.user)
        })
        .catch(error => console.log(error))
        swal("Wow","Successfully Registered", "success");
        }

        
    }


  return (
    <div className="grid grid-cols-2">
       <div>
       <img src="/public/assets/login2.jpg" alt="image" />
       </div>
        <div className="login">
          <h2 className="text-3xl my-5 text-center font-bold">Sign Up</h2>

          <form onSubmit={handleRegister} className=" lg:w-2/3 rounded-lg p-10 mx-auto bg-base-100 shadow-2xl">
          <div className="form-control ">
              <label className="label">
                <span className="label-text text-xl font-medium">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">Photo Url</span>
              </label>
              <input
                type="url"
                placeholder="Photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white" type="submit">Sign Up</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account ? Please
            <Link
              to="/login"
              className="text-blue-600 font-semibold" 
            >
            Login
            </Link>
          </p>
          <div className="flex justify-center"> <SocialLogin></SocialLogin></div>
        </div>
    </div>
  );
};

export default Register;
