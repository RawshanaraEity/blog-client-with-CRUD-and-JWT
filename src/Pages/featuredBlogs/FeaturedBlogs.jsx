
// import blogsData from "./blogsData"; // Sample data, replace this with your actual blog data

import useBlogs from "../../Hooks/useBlogs";

import {  DataType, EditingMode, SortingMode, Table } from 'ka-table';


function calculateWordCount(text) {
  const words = text.split(/\s+/);
  return words.length;
}

const FeaturedBlogs = () => {
    const {data} = useBlogs()
    console.log(data);
  // Sort blogs based on word count of long_description in descending order
  const sortedBlogs = data?.sort((a, b) => {
    const wordCountA = calculateWordCount(a.long_description);
    const wordCountB = calculateWordCount(b.long_description);
    return wordCountB - wordCountA;
  });

  // Get the top 10 blogs
  const topTenBlogs = sortedBlogs?.slice(0, 10);
  console.log(topTenBlogs);

  const topBlogs = topTenBlogs?.map((blog, index) => ({
    column1: `${index + 1}`, 
    column2: blog.title, 
    column3: blog.author_name, 
    column4: <img src={blog.author_img} alt={blog.author_name} className="w-10 h-10 rounded-full"/> , 
    id: blog._id
  }));


  return (
    <div className=" w-2/3 mx-auto my-10">
      <h1 className="text-5xl font-semibold text-center my-10">Top 10 Featured Blogs</h1>

{/* ka-table */}

<Table
      columns={[
        { key: 'column1', title: 'Serial Number', dataType: DataType.Number },
        { key: 'column2', title: 'Blog Title', dataType: DataType.String },
        { key: 'column3', title: 'Blog Owner Name', dataType: DataType.String },
        { key: 'column4', title: 'Blog Owner', dataType: DataType.String },
      ]}
      data={topBlogs}
      editingMode={EditingMode.Cell}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />

{/* ka */}

    </div>
  );
};

export default FeaturedBlogs;
