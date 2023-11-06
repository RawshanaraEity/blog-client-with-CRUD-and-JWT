import { useQuery } from "@tanstack/react-query";


const AllBlogs = () => {

    const {data, isLoading} = useQuery({
        queryKey: ["allBlogs"],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/blogs')
            const blogs = await data.json()
            return blogs;
        }
    })
    console.log(data, isLoading)
    if(isLoading){
        return "loading"
    }
    return (
        <div>
          <h1>{data.length}</h1>
        </div>
    );
};

export default AllBlogs;