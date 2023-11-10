import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../components/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;