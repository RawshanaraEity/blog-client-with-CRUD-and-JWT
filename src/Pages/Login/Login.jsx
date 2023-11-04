
import { Link, useLocation, useNavigate } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";


const Login = () => {

//   const [error, setError] = useState('')

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
            // swal("Wow","Successfully login", "success");
        })
        .catch(error =>  console.log(error)
            // setError(swal("Oops!", "Wrong Email / Password", "error"))
            )  

    }

  return (
    <div>
       
      <div>
        <h2 className="text-3xl my-10 text-center">Please login</h2>

        <form onSubmit={handleLogIn} className="md:w-3/4 lg:w-1/3 mx-auto px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
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
            <button className="btn bg-amber-500 text-white" type="submit">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have any account ? Please{" "}
          <Link to="/register"  className="text-blue-600 font-semibold" >
            Register
          </Link>
        </p>
      </div>
     <div className="flex justify-center"> <SocialLogin></SocialLogin></div>
    </div>
  );
};

export default Login;
