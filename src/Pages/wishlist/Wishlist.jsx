import { useQuery } from "@tanstack/react-query";
import WishlistCard from "./WishlistCard";
import Newslettter from "../Home/Newslettter";
import Loading from "../../components/Loading";



const Wishlist = () => {

    const result = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/wishlist')
            return await res.json()
            
        }
    })
    console.log(result);

    const data = result.data
    if (result.isLoading) {
        return <Loading></Loading>;
      }

    return (
        <div>
             <h1 className="my-10 text-5xl text-center">My Wishlist</h1>
             <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
                {data.map((blogs) => (
                  <WishlistCard key={blogs._id} blogs={blogs}></WishlistCard>
                ))}
              </div>
            
            <Newslettter></Newslettter>
        </div>
    );
};

export default Wishlist;