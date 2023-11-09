
import useBlogs from "../../Hooks/useBlogs";

import {  DataType, EditingMode, SortingMode, Table } from 'ka-table';
import Newslettter from "../Home/Newslettter";


function calculateWordCount(text) {
  const words = text.split(/\s+/);
  return words.length;
}

const FeaturedBlogs = () => {
    const {data} = useBlogs()
    // console.log(data);
  // Sort blogs based on word count of long_description in descending order
  const sortedBlogs = data?.sort((a, b) => {
    const wordCountA = calculateWordCount(a.long_description);
    const wordCountB = calculateWordCount(b.long_description);
    return wordCountB - wordCountA;
  });

  // Get the top 10 blogs
  const topTenBlogs = sortedBlogs?.slice(0, 10);
//   console.log(topTenBlogs);

  const topBlogs = topTenBlogs?.map((blog, index) => ( {
    column1: `${index + 1}`, 
    column2: blog.title, 
    column3: blog.author_name, 
    column4: blog.author_img,
    id: blog._id
  }
  ));


  return (
    <div className=" bg-gradient-to-r from-[#74d3d0bb] to-[rgba(65,117,138,0.83)]">
        <div className=" w-full md:w-2/3 lg:mx-auto py-10 text-white">
      <h1 className="text-3xl md:text-5xl font-semibold text-center my-10">Top 10 Featured Blogs</h1>
      <hr className="mb-10"/>

{/* ka-table */}

<Table 
      columns={[
        { key: 'column1', title: 'Serial Number', dataType: DataType.Number},
        { key: 'column2', title: 'Blog Title', dataType: DataType.String },
        { key: 'column3', title: 'Blog Owner Name', dataType: DataType.String },
        { key: 'column4', title: 'Blog Owner', dataType: DataType.String },
      ]}
      data={topBlogs}
      editingMode={EditingMode.Cell}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />

    </div>
    </div>
  );
};

export default FeaturedBlogs;
