import React, { useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      image:
        "https://img.freepik.com/free-vector/online-document-concept-illustration_114360-5453.jpg?size=626&ext=jpg&ga=GA1.1.414115989.1693261834&semt=sph",
      description:
        "Description for Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Blog 2",
      image:
        "https://img.freepik.com/free-vector/copywriter-huge-laptop-writting-creative-advertising-text-copywriting-job-home-based-copywriter-freelance-copywriting-concept_335657-837.jpg?size=626&ext=jpg&ga=GA1.1.414115989.1693261834&semt=sph",
      description:
        "Description for Blog 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Blog 3",
      image:
        "https://img.freepik.com/free-vector/blogging-concept-illustration_114360-4480.jpg?w=1380&t=st=1701789178~exp=1701789778~hmac=cecce623e4db122fd70468bfd3286181c1be00ea22ed07dfc46b3fa552d7c32b",
      description:
        "Description for Blog 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Blog 4",
      image:
        "https://img.freepik.com/free-vector/flat-design-content-management-system-illustrated_23-2148816268.jpg?size=626&ext=jpg&ga=GA1.1.414115989.1693261834&semt=sph",
      description:
        "Description for Blog 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "Blog 5",
      image:
        "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?size=626&ext=jpg&ga=GA1.1.414115989.1693261834&semt=sph",
      description:
        "Description for Blog 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Blog 6",
      image:
        "https://img.freepik.com/free-vector/blogger-concept-sharing-media-content-internet-idea-social-media-network-online-communication-giveaway-advert-isolated-flat-vector-illustration_613284-2022.jpg?w=1380&t=st=1701791880~exp=1701792480~hmac=23f59782f9ed46b66e992267e33503b45cc1a4275aead551c7e8c826dade720b",
      description:
        "Description for Blog 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more blogs as needed
  ]);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blueColor">
        Job Finder Blogs
      </h1>
      <div className="grid grid-cols-2">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="mb-8 flex items-center shadow-lg rounded-lg m-5 "
          >
            <img
              src={blog.image}
              alt={`Blog ${blog.id}`}
              className="mb-4 w-[30%] h-[200px] rounded-lg"
            />
            <div className=" m-4 ">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      {blogs.length > indexOfLastBlog && (
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default BlogPage;
