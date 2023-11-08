import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/featuredBlogs/FeaturedBlogs";
import Wishlist from "../Pages/wishlist/Wishlist";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import All from "../Pages/AllBlogs/All";
import BlogDetails from "../Pages/AllBlogs/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addBlog',
            element: <AddBlog></AddBlog>
        },
        {
            path: '/allBlogs',
            element: <All></All>
        },
        {
            path: '/allBlogs/:id',
            element: <BlogDetails></BlogDetails>
        },
        {
            path: '/update/:id',
            element: <UpdateBlog></UpdateBlog>
        },
        {
            
            path: '/allBlogs/:category',
            element: <AllBlogs></AllBlogs>
            
        },
        {
            path: '/featuredBlogs',
            element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
            path: '/wishlist',
            element: <Wishlist></Wishlist>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);
  export default router