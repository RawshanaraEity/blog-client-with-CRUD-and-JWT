
import { Link, useLocation, useNavigate } from "react-router-dom";


import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
import swal from "sweetalert";


const Login = () => {

  const [error, setError] = useState('')

    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogIn = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)
        
            // create user
        signIn(email,password)
        .then(result => {

            navigate(location?.state? location.state : '/')
            console.log(result)
            swal("Wow","Successfully login", "success");
        })
        .catch(error =>  setError(swal("Oops!", "Wrong Email / Password", "error"))
            )  

    }

  return (
    <div className="text-center my-10">
       

       <div className="mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    <div>
        <h2 className="text-3xl my-10 font-bold text-center ">Login</h2>

        <form onSubmit={handleLogIn} className=" mx-auto px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white" type="submit">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have any account ? Please
          <Link to="/register"  className="text-blue-600 font-semibold" >
            Register
          </Link>
        </p>
      </div>
     <div className="flex justify-center"> <SocialLogin></SocialLogin></div>
    </div>
  </div>
</div>



    </div>
  );
};



export default Login;


{/* <div className="mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div> */}