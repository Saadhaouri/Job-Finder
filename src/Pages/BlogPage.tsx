import React, { useState } from "react";
import resume from "../assets/Resume.png";
import { FaPlay } from "react-icons/fa6";
import { IoMdReturnRight } from "react-icons/io";

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
    {
      id: 7,
      title: "Blog 7",
      image: "https://example.com/blog7-image.jpg",
      description:
        "Description for Blog 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      title: "Blog 8",
      image: "https://example.com/blog8-image.jpg",
      description:
        "Description for Blog 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      title: "Blog 9",
      image: "https://example.com/blog9-image.jpg",
      description:
        "Description for Blog 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 10,
      title: "Blog 10",
      image: "https://example.com/blog10-image.jpg",
      description:
        "Description for Blog 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 11,
      title: "Blog 11",
      image: "https://example.com/blog11-image.jpg",
      description:
        "Description for Blog 11. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 12,
      title: "Blog 12",
      image: "https://example.com/blog12-image.jpg",
      description:
        "Description for Blog 12. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 13,
      title: "Blog 13",
      image: "https://example.com/blog13-image.jpg",
      description:
        "Description for Blog 13. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 14,
      title: "Blog 14",
      image: "https://example.com/blog14-image.jpg",
      description:
        "Description for Blog 14. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 15,
      title: "Blog 15",
      image: "https://example.com/blog15-image.jpg",
      description:
        "Description for Blog 15. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 16,
      title: "Blog 16",
      image: "https://example.com/blog16-image.jpg",
      description:
        "Description for Blog 16. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 17,
      title: "Blog 17",
      image: "https://example.com/blog17-image.jpg",
      description:
        "Description for Blog 17. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 18,
      title: "Blog 18",
      image: "https://example.com/blog18-image.jpg",
      description:
        "Description for Blog 18. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 19,
      title: "Blog 19",
      image: "https://example.com/blog19-image.jpg",
      description:
        "Description for Blog 19. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 20,
      title: "Blog 20",
      image: "https://example.com/blog20-image.jpg",
      description:
        "Description for Blog 20. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more blogs as needed
  ]);

  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const [userQuestion, setUserQuestion] = useState("");

  const handleQuestionSubmission = () => {
    // Handle the submission of user questions (you can implement this function based on your application's logic)
    console.log(`User submitted question: ${userQuestion}`);
    // You may want to add logic to send the question to the server or perform other actions.
    // For simplicity, we are just logging the question to the console in this example.
  };

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const skills = [
    {
      skill: "Effective Communication",
      description:
        "Master the art of effective communication in the workplace. Learn to articulate ideas clearly and confidently.",
      resources: [
        {
          title: "The Art of Communication",
          link: "https://example.com/communication-course",
        },
        {
          title: "Effective Email Writing",
          link: "https://example.com/email-writing-course",
        },
      ],
    },
    {
      skill: "Digital Marketing",
      description:
        "Explore the world of digital marketing, including social media marketing, SEO, and online advertising.",
      resources: [
        {
          title: "Digital Marketing 101",
          link: "https://example.com/digital-marketing-101",
        },
        {
          title: "Social Media Strategy",
          link: "https://example.com/social-media-strategy-course",
        },
      ],
    },
    // Add more skills and resources as needed
  ];
  const strategies = [
    {
      title: "Networking",
      description:
        "Build a strong professional network. Attend industry events, connect with professionals on LinkedIn, and participate in networking groups.",
    },
    {
      title: "Customized Resumes",
      description:
        "Tailor your resume for each job application. Highlight relevant skills and experiences that match the specific job requirements.",
    },
    {
      title: "Utilize Advanced Search Filters",
      description:
        "Make the most of our application's advanced search filters. Narrow down job opportunities based on location, industry, and specific skills.",
    },
    {
      title: "Set Job Alerts",
      description:
        "Create personalized job alerts to receive notifications about new job postings that match your criteria. Stay updated on relevant opportunities.",
    },
    // Add more strategies as needed
  ];
  const companies = [
    {
      name: "TechCo Inc.",
      culture: "Innovative and collaborative work environment.",
      values: "Embrace diversity, continuous learning, and teamwork.",
      jobOpportunities: "Check out our latest job openings.",
    },
    {
      name: "GreenSolutions Ltd.",
      culture: "Sustainability-focused and environmentally conscious.",
      values: "Passionate about creating a positive impact on the planet.",
      jobOpportunities: "Explore opportunities to join our green team.",
    },
    {
      name: "GreenSolutions Ltd.",
      culture: "Sustainability-focused and environmentally conscious.",
      values: "Passionate about creating a positive impact on the planet.",
      jobOpportunities: "Explore opportunities to join our green team.",
    },
    // Add more company profiles as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="container flex items-center mx-auto rounded-lg  justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
        <img src={resume} width={600} className=" ml-8" alt="Ressumepage" />
        <div className="text grid-cols-2 ml-8 ">
          <h1 className="text-[56px] font-extrabold   text-white mb-16">
            BLOGS PAGE FOR YOUR BUSNINESS{" "}
          </h1>
          <div className="menitext flex items-center">
            <IoMdReturnRight className="text-[52px] items-center   mr-3 text-white cursor-pointer " />{" "}
            <h3 className="text-gray-100 text-[26px] hover:text-gray-300 cursor-pointer">
              {" "}
              welcom to the blogs page !!
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8 mt-[100px]">
        <h2 className="text-3xl font-bold mb-4">Career Advice and Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resume Writing Tips */}
          <div className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Resume Writing Tips</h3>
            <p>
              Share practical tips for writing an effective resume. Discuss the
              importance of highlighting achievements and tailoring the resume
              for specific job applications.
            </p>
          </div>

          {/* Interview Preparation */}
          <div className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Interview Preparation
            </h3>
            <p>
              Provide guidance on preparing for job interviews. Include tips on
              common interview questions, body language, and follow-up
              etiquette.
            </p>
          </div>

          {/* Online Presence Advice */}
          <div className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Online Presence Advice
            </h3>
            <p className="text-gray-700">
              Offer advice on building a professional online presence. Discuss
              the importance of LinkedIn profiles, personal websites, and social
              media in the job search process.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Industry Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trends in Different Industries */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Trends in Different Industries
            </h3>
            <p className="text-gray-700">
              Share news and updates about trends in different industries.
              Discuss the latest advancements, emerging technologies, and key
              developments affecting various sectors.
            </p>
          </div>

          {/* Current Job Market and In-Demand Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Current Job Market and In-Demand Skills
            </h3>
            <p className="text-gray-700">
              Discuss the current job market scenario and highlight the skills
              that are in demand. Provide insights into the industries that are
              hiring and the skills that employers are looking for.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Success Story 1 */}
          <div className=" bg-green-500 text-white p-6 rounded-lg shadow-md  ">
            <h3 className="text-xl font-semibold mb-4">
              John's Job Search Journey dd
            </h3>
            <p className="">
              Highlight the success story of John, who found a fulfilling job
              through your platform. Share details about his experience,
              challenges, and how your platform made a difference in his job
              search.
            </p>
          </div>

          {/* Success Story 2 */}
          <div className="  bg-green-500 text-white p-6 rounded-lg shadow-md  ">
            <h3 className="text-xl font-semibold mb-4">
              Emma's Career Transformation
            </h3>
            <p className="">
              Showcase Emma's journey of career transformation with the help of
              your platform. Include information about the job she landed, the
              skills she developed, and her overall satisfaction.
            </p>
          </div>

          {/* Testimonials */}
          <div className=" bg-green-500 text-white p-6 rounded-lg shadow-md   ">
            <h3 className="text-xl font-semibold mb-4">What Our Users Say</h3>
            <blockquote className=" italic">
              "I couldn't be happier with the results. Your platform made the
              job search process so much easier, and I found my dream job within
              weeks."
            </blockquote>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Company Profiles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
              <p className="text-gray-700 mb-4">{company.culture}</p>
              <p className="text-gray-700 mb-4">{company.values}</p>
              <p className="text-blue-500 hover:underline">
                {company.jobOpportunities}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Skill Development</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.skill}</h3>
              <p className="text-gray-700 mb-4">{skill.description}</p>

              <h4 className="text-lg font-semibold mb-2">
                Recommended Courses
              </h4>
              <ul className="list-disc ml-6">
                {skill.resources.map((resource, idx) => (
                  <li key={idx} className="text-blue-500 hover:underline">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto my-8 mt-16 ">
        <h2 className="text-3xl font-bold mb-4">Job Search Strategies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
              <p className="text-gray-700 mb-4">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Q&A Sessions</h2>

        {/* Career Expert Q&A Session */}
        <div className="relative bg-blue-500 text-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-2">Upcoming Q&A Session</h3>
          <p className="mb-4">
            Join our next Q&A session with career experts. Stay tuned for
            valuable insights!
          </p>
          {/* Add a button or link to access the Q&A session details */}
          <div className=" text-right ">
            <a href="" className="text-white text-center hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* User Question Submission Form */}
        <div className="relative bg-blue-700 text-white p-6 rounded-lg shadow-md backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-4">Submit Your Question</h3>
          <textarea
            className="w-full p-3 mb-4 bg-blue-800 rounded-md placeholder-white text-white focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
            placeholder="Type your question here..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <button
            className="bg-white text-blue-700 py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleQuestionSubmission}
          >
            Submit Question
          </button>
        </div>
      </div>
      {/* <div className="">
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
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`mx-2 px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } rounded-full`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BlogPage;
