
import MUIDataTable from 'mui-datatables';
import useBlogs from '../../Hooks/useBlogs';

function calculateWordCount(text) {
  const words = text.split(/\s+/);
  return words.length;
}

const FeaturedBlogs = () => {
  const { data } = useBlogs();

  // Sort blogs based on word count of long_description in descending order
  const sortedBlogs = data?.sort((a, b) => {
    const wordCountA = calculateWordCount(a.long_description);
    const wordCountB = calculateWordCount(b.long_description);
    return wordCountB - wordCountA;
  });

  // Get the top 10 blogs
  const topTenBlogs = sortedBlogs?.slice(0, 10);

  const topBlogs = topTenBlogs?.map((blog, index) => ({
    SerialNumber: index + 1,
    BlogTitle: blog.title,
    BlogOwnerName: blog.author_name,
    BlogOwner: <img src={blog.author_img} alt={blog.author_name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
    id: blog._id,
  }));

  const columns = [
    { name: 'SerialNumber', label: 'Serial Number' },
    { name: 'BlogTitle', label: 'Blog Title' },
    { name: 'BlogOwnerName', label: 'Blog Owner Name' },
    { name: 'BlogOwner', label: 'Blog Owner' },
  ];

  const options = {
    filterType: 'checkbox',
    selectableRowsHideCheckboxes: true,
    selectableRowsHeader: false,
  };

  return (
    <div className="bg-gradient-to-r from-[#74d3d0bb] to-[rgba(65,117,138,0.83)]">
      <div className="w-full md:w-2/3 lg:mx-auto py-10 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold text-center my-10">
          Top 10 Featured Blogs
        </h1>
        <hr className="mb-10" />

        {/* MUIDataTable */}
        <MUIDataTable
          title="Top 10 Featured Blogs"
          data={topBlogs}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default FeaturedBlogs;
