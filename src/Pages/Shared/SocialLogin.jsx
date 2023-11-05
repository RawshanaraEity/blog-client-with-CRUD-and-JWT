import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineGoogle } from 'react-icons/ai';
import swal from "sweetalert";



const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            navigate(location?.state? location.state : '/')
            swal("Wow","Successfully login", "success");
        }
            )
        .catch(error => console.log(error))
    }

    return (
        <div className="p-5">
            <button onClick={handleGoogleLogin} className="btn btn-sm btn-neutral">Login With<AiOutlineGoogle className="text-xl"></AiOutlineGoogle> </button>
        </div>
    );
};

export default SocialLogin;