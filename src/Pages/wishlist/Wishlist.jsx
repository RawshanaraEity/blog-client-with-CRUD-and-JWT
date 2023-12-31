import { useQuery } from "@tanstack/react-query";
import WishlistCard from "./WishlistCard";
import Newslettter from "../Home/Newslettter";
import Loading from "../../components/Loading";


const Wishlist = () => {
  const result = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch("https://blog-server-site-beta.vercel.app/wishlist");
      return await res.json();
    },
  });
  console.log(result);
  const blogs = result.data;

  if (result.isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className="my-10 text-4xl md:text-5xl text-center font-bold">
        My Wishlist
      </h1>
      
        <WishlistCard blogs={blogs}></WishlistCard>
      
      <Newslettter></Newslettter>
    </div>
  );
};

export default Wishlist;
