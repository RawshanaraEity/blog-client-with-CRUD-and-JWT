import { useQuery } from "@tanstack/react-query";

const useBlogs = () => {

    const {data, isLoading} = useQuery({
        queryKey: ["allBlogs"],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/blogs')
            const blogs = await data.json()
            return blogs;
        }
    })

    return (
       {
        data, isLoading
       }
    );
};

export default useBlogs;