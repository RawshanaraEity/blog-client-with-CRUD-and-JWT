import { useParams } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import Loading from "../../components/Loading";

const UpdateBlog = () => {
  const { data, isLoading } = useBlogs();
  console.log(data);
  const { id } = useParams();
  console.log(id);

  const singleBlog = data?.find((blogs) => blogs._id === id);
  console.log(singleBlog);

  if (isLoading) {
    return <Loading></Loading>;
  }
  const {
    _id,
    title,
    image,
    category,
    short_description,
    long_description,
    date,
    current_time,
    author_name,
    author_img,
  } = singleBlog;

  console.log(singleBlog);

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const title = form.title.value;
    const author_img = form.author_img.value;
    const author_name = form.author_name.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const date = form.date.value;
    const current_time = form.current_time.value;

    // console.log(
    //   title,
    //   category,
    //   image,
    //   author_img,
    //   author_name,
    //   short_description,
    //   long_description,
    //   date,
    //   current_time,
    //   author_name,
    //   author_img
    // );

    const myData = {
      image,
      title,
      author_img,
      author_name,
      category,
      short_description,
      long_description,
      date,
      current_time,
    };
    console.log(myData);

    fetch(`http://localhost:5000/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  };


  return (
    <div>
      <div className=" bg-gradient-to-r from-[#37aca8bb] to-[rgba(82,164,197,0.83)]">
        <div className=" py-10">
          <h2 className="text-center text-5xl text-white font-semibold">
            Update Your Blog
          </h2>
        </div>
        <div className="">
          <form
            onSubmit={handleUpdateBlog}
            className="md:space-y-5 px-5 md:px-0 md:w-3/4 lg:w-2/3 mx-auto py-10"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <input
                className="input w-full input-bordered"
                type="url"
                name="image"
                defaultValue={image}
                placeholder="Blog Image"
              />
              <input
                className="input w-full input-bordered"
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Title"
              />
            </div>
            <br />
            <div className="flex flex-col md:flex-row gap-5">
              <input
                className="input w-full input-bordered"
                type="url"
                name="author_img"
                defaultValue={author_img}
                placeholder="Author_img"
              />
              <input
                className="input w-full input-bordered"
                type="text"
                name="author_name"
                defaultValue={author_name}
                placeholder="Author_name"
              />
            </div>
            <br />
            <div className="flex flex-col md:flex-row gap-5">
              <input
                className="input w-full input-bordered"
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
              />
              <input
                className="input w-full input-bordered"
                type="text"
                name="short_description"
                defaultValue={short_description}
                placeholder="Short_description"
              />
            </div>
            <br />
            <div className="flex flex-col md:flex-row gap-5">
              <input
                className="input w-full input-bordered"
                type="text"
                name="long_description"
                defaultValue={long_description}
                placeholder="Long_description"
              />
              <input
                className="input w-full input-bordered"
                type="date"
                name="date"
                defaultValue={date}
                placeholder="Date"
              />
              <input
                className="input w-full input-bordered"
                type="time"
                name="current_time"
                defaultValue={current_time}
                placeholder="Current_Time"
              />
            </div>
            <br />
            <div className="text-center">
              <input
                className="btn btn-neutral text-white"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
