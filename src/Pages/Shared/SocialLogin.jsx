import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            navigate(location?.state? location.state : '/')
        }
            )
        .catch(error => console.log(error))
    }

    return (
        <div className="p-5">
            <button onClick={handleGoogleLogin} className="btn btn-neutral btn-sm">Google Login</button>
        </div>
    );
};

export default SocialLogin;