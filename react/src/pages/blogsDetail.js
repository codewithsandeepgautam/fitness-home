import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetRequest } from '../utils/requests';
import InnerPageBanner from '../components/shared/imagePageBanner';
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { AccountContext } from '../utils/accountContext';
import blogBanner from "../assets/images/blog-banner.png"
import { validateEmail } from '../utils/formValidation';
import { PostRequest } from '../utils/requests';
import user from '../assets/images/user.png';
function BlogsDetail() {
  const [blogsDetails, setBlogsDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const { blogsData } = useContext(AccountContext);
  const { handle } = useParams();
  const [form, setForm] = useState({
    username: "",
    useremail: "",
    comment: "",
    blogId: "",
  })
  const [error, setError] = useState({
    email: false,
    msg: false,
    phone: false,
    message: "",
    success: false,
  });
  const getBlogsDetails = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/blogs/data?handle=${handle}`);
      setBlogsDetails(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const blogid = blogsDetails?._id;
  console.log("blogid<<", blogid);

  useEffect(() => {
    getBlogsDetails();
    // eslint-disable-next-line
  }, [handle]);
  const fullNameHandler = (e) => {
    const inputValue = e.target.value;
    const alphaValue = inputValue.replace(/[^A-Za-z\s]/g, '');
    if (alphaValue.length <= 50) {
      setForm(prevState => ({ ...prevState, username: alphaValue }));
      setError(prevState => ({ ...prevState, message: "" }));
    }
  };
  const handleEmailInputChange = (e) => {
    const inputValue = e.target.value;
    const val = inputValue.replace(" ", "");
    setForm((prevState) => ({ ...prevState, useremail: val }));
    setError((prevState) => ({ ...prevState, useremail: false, message: "" }));
  };
  const handleCommentInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 250) {
      setForm((prevState) => ({ ...prevState, comment: inputValue }));
      setError((prevState) => ({ ...prevState, message: "" }));
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    setError((prevState) => ({ ...prevState, message: "" }));
    if (!form.username || !form.useremail || !form.comment) {
      setError((prevState) => ({
        ...prevState,
        success: false,
        message: "Fields must not be empty!",
      }));
    } else if (!validateEmail(form.useremail)) {
      setError((prevState) => ({
        ...prevState,
        email: true,
        message: "Email is invalid!",
      }));
    } else {
      PostRequest(`${process.env.REACT_APP_URL}/comment`, {
        username: form.username,
        useremail: form.useremail,
        comment: form.comment,
        blogId: blogsDetails?._id,
      })
        .then((response) => {
          setError((prevState) => ({ ...prevState, success: true }));
          getComments();
          setForm((prevState) => ({
            ...prevState,
            username: "",
            useremail: "",
            comment: "",
            blogId: "",
          }));
        })
        .catch((err) => {
          setError((prevState) => ({
            ...prevState,
            message: err?.data
              ? err.data.error
              : "Something went wrong. Try again later!",
          }));
        });
    }
  }
  const getComments = async () => {
    try {
      const response = await GetRequest(`${process.env.REACT_APP_URL}/comment/data?id=${blogid}`);
      setComments(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, [blogsDetails?._id]);
  return (
    <>
      <InnerPageBanner img={blogBanner} heading="Blogs Details" href="/blogs" path={handle} />
      <section>
        <div className='container mx-auto flex flex-col md:flex-row'>
          <div className='w-full md:w-9/12'>
            <img src={blogsDetails?.image} alt='blog' className="w-full h-auto" />
            <ul className="flex items-center py-4">
              <li className="flex items-center">
                <FaUser className="mr-2 text-[#c19b57] text-[22px]" />
                <Link to="/" className="text-[#c19b57] font-semibold">{blogsDetails?.author}</Link>
              </li>
              <li className="flex items-center ml-3">
                <FaClock className="mr-2 text-[#c19b57] text-[22px]" />
                <time dateTime="2020-01-01" className="text-[#c19b57] font-semibold">{blogsDetails?.publishedAt}</time>
              </li>
            </ul>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: blogsDetails?.description }}
            />
            <form class="px-7 w-full relative bg-[#33402317] p-6 mt-3 rounded-sm" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-4">Leave a Comment</h3>
              <p className={` mb-[10px] text-[#fd5901] font-medium ${error.message ? 'block' : 'hidden'}`}>{error.message}</p>
              <div className='flex'>
                <div className='w-1/2 mr-1'>
                  <label htmlFor="username" className="mb-1 text-[#000] font-semibold inline-block">
                    Name
                  </label>
                  <input
                    type="text" name="username" className="w-full h-12 text-[#000] placeholder-gray-400 bg-white text-base font-normal rounded-[4px] border border-[#ddd] focus:outline-none pl-4 mb-4"
                    placeholder="Enter Name" onChange={fullNameHandler} value={form.username} />
                </div>
                <div className='w-1/2 ml-1'>
                  <label htmlFor="useremail" className="mb-1 text-[#000] font-semibold inline-block">
                    Email
                  </label>
                  <input type="email" name="useremail" className="w-full h-12 text-[#000] placeholder-gray-400 bg-white text-base font-normal rounded-[4px] border border-[#ddd] focus:outline-none pl-4 mb-4"
                    placeholder="Enter Email" onChange={handleEmailInputChange} value={form.useremail} />
                </div>
              </div>
              <textarea name="comment" class="h-40 px-3 py-3 text-base outline-none border border-[#ddd]  w-full resize-none rounded-[4px] placeholder:text-base" onChange={handleCommentInputChange} placeholder="Leave your comments here" value={form.comment}></textarea>
              <div class="flex justify-end mt-2">
                <button class="inline-block p-3 bg-[#c19b57] text-[18px] text-white transition-all hover:bg-[#334023] rounded-[4px] hover:text-white py-3 font-semibold">
                  Submit comment
                </button>
              </div>
            </form>
            <h3 className="text-2xl font-bold my-5">Customer Comments</h3>
            <div class="space-y-4 mb-4">
              {Array.isArray(comments) && comments.slice().reverse().map((item, index) => ``(
                <div class="bg-white p-4 rounded-[4px] border" key={index}>
                  <div class="flex items-center mb-2">
                    <img src={user} alt="User Avatar" class="w-16 h-16 rounded-full mr-3" />
                    <div>
                      <h3 class="font-semibold text-[#334023]">{item?.username}</h3>
                      <p class="text-sm">Posted on {new Date(item?.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p class="text-[18px]">{item?.comment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full md:w-5/12 lg:px-8 md:px-4'>
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-5">Search</h3>
              <form className="relative transition-all">
                <input
                  type="text"
                  className="border p-4 rounded w-full md:w-[calc(100%-40px)] border-[#c19b57] text-[19px] focus:outline-none focus:ring-0"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  title="Search"
                  className="text-[36px] absolute top-0 right-0 bottom-0 border-0 px-4 rounded-r transition-all text-white bg-[#c19b57]"
                >
                  <HiSearch />
                </button>
              </form>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-5">Categories</h3>
              <ul className="mt-3">
                {['Gym 25', 'Lifestyle 12', 'Travel 5', 'Design 22', 'Creative 8', 'Education 14'].map((category, index) => (
                  <li className="pb-2" key={index}>
                    <Link to='/' className="text-[19px] font-semibold text-[#334023] transition-all hover:text-[#c19b57]">{category.split(' ')[0]} <span>({category.split(' ')[1]})</span></Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4 border border-[#c19b57] p-4 rounded-md">
              <h3 className="text-[20px] font-bold mb-5">Recent Posts</h3>
              <div className="flex flex-col">
                {blogsData?.map((item, index) => (
                  <div className="mb-4" key={index}>
                    <h4><Link to={`/blogs/${item?.handle}`} className="text-[19px] hover:text-[#c19b57] font-semibold text-[#334023]">{item?.title}</Link></h4>
                    <time dateTime="2020-01-01" className="text-gray-500">{item?.publishedAt}</time>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-[20px] font-bold mb-5">Tags</h3>
              <ul className="flex flex-wrap">
                {['Gym', 'IT', 'Education', 'Travel', 'Lifestyle'].map((tag, index) => (
                  <li className="inline-block mb-2" key={index}>
                    <Link to='/' className="border border-[#c19b57] hover:bg-[#c19b57] inline-block hover:text-white py-3 px-[24px] mr-2 rounded-[4px]">{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogsDetail;
