import React, { useEffect, useState } from "react";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Blogcard = () => {
  const [likeCounts, setLikeCounts] = useState([]);
  const [likedEntries, setLikedEntries] = useState([]);
  const [commentCounts, setCommentCounts] = useState([]);
  const [shareCounts, setShareCounts] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("blogData"));
    if (storedData && Array.isArray(storedData) && storedData.length > 0) {
      setBlogEntries(storedData);
      setLikeCounts(storedData.map(() => 0));
      setLikedEntries(storedData.map(() => false));
      setCommentCounts(storedData.map(() => 0));
      setShareCounts(storedData.map(() => 0));
    }
  }, []);

  const handleLike = (index) => {
    const updatedLikedEntries = [...likedEntries];
    updatedLikedEntries[index] = !updatedLikedEntries[index];
    setLikedEntries(updatedLikedEntries);

    const updatedLikeCounts = [...likeCounts];
    updatedLikeCounts[index] += updatedLikedEntries[index] ? 1 : -1;
    setLikeCounts(updatedLikeCounts);

    localStorage.setItem(`likeCount-${index}`, updatedLikeCounts[index]);
    localStorage.setItem(`liked-${index}`, updatedLikedEntries[index]);
  };

  const handleComment = (index) => {
    const comment = prompt("Enter your comment:");
    if (comment !== null) {
      const newCommentCount = commentCounts[index] + 1;
      setCommentCounts((prevCounts) => {
        const updatedCounts = [...prevCounts];
        updatedCounts[index] = newCommentCount;
        return updatedCounts;
      });
    }
    localStorage.setItem(`commentCounts`, commentCounts);
  };

  const handleShare = (index) => {
    alert("Share this blog!");
    const updatedShareCounts = [...shareCounts];
    updatedShareCounts[index]++;
    setShareCounts(updatedShareCounts);
    localStorage.setItem("shareCounts", JSON.stringify(updatedShareCounts));
  };

  const [blogEntries, setBlogEntries] = useState([]);
  const [cardBlogIndex, setCardBlogIndex] = useState(null);
  //   const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("blogData"));
    if (storedData && Array.isArray(storedData) && storedData.length > 0) {
      setBlogEntries(storedData);
    }
  }, []);

  const openCards = (index) => {
    setCardBlogIndex(index);
  };

  return (
    <div className="overflow-auto ">
      <div className="grid grid-cols-4 gap-5 p-10">
        {blogEntries.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col text-gray-700 bg-white  mt-5 shadow-md bg-clip-border rounded-xl w-96"
          >
            <>
              <div onClick={() => openCards(index)} className="cursor-pointer">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                  <img src={item.blogImage} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {item.blogTitle}
                  </h4>
                </div>
              </div>
            </>

            <div className="flex justify-center p-6 pt-2 gap-7">
              <button onClick={() => handleLike(index)} className="">
                {likedEntries[index] ? (
                  <GoHeartFill className="text-red-500" size={25} />
                ) : (
                  <GoHeart className="text-red-500" size={25} />
                )}
              </button>
              <button onClick={() => handleComment(index)} className="">
                <FaRegComment className="text-black" size={23} />
              </button>

              <button onClick={() => handleShare(index)} className="">
                <IoPaperPlaneOutline className="text-black" size={25} />
              </button>
              <span>{shareCounts[index]}</span>
            </div>
          </div>
        ))}
      </div>

      <>
        {cardBlogIndex !== null && (
          <div className="fixed top-0 left-[0%] z-[9999999999999] w-full h-full   backdrop-brightness-50 grid place-items-center place-content-center ">
            <div className="h-5/6 overflow-y-auto  w-[850px] filter-screen-model outline-none bg-white rounded-2xl shadow-2xl mx-5 ">
              <div>
                <div>
                  <div
                    onClick={() => setCardBlogIndex(null)}
                    className="flex justify-end mr-2 mt-3 cursor-pointer"
                  >
                    <IoMdClose className="font-bold text-2xl " />
                  </div>
                  <div className=" sticky border-[1.5px] border-[#000000] m-10 rounded-[20px] ">
                    <div className="flex justify-center items-center">
                      <div className="absolute">
                        <button className="bg-[#22345C] text-lg text-white font-sans underline font-bold py-2 px-4 rounded-[10px]">
                          View Blog
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className=" gap-4 mt-4 ">
                        <div>
                          <div className="text-[#22345C] text-center mt-4 font-sans font-bold text-3xl">
                            {blogEntries[cardBlogIndex].blogTitle}
                          </div>
                        </div>

                        <div className=" flex mt-5 justify-center items-center">
                          <img
                            src={blogEntries[cardBlogIndex].blogImage}
                            className="w-52  rounded-lg"
                          />
                        </div>

                        <div>
                          <div className="text-[#22345C]  font-sans text-justify text-lg mt-5">
                            {blogEntries[cardBlogIndex].blogDescription}
                          </div>
                        </div>

                        <div>
                          <div className="text-[#22345C]  font-sans text-justify text-lg mt-5">
                            <span className="font-bold">URL : </span>
                            {blogEntries[cardBlogIndex].url}
                          </div>
                        </div>

                        <div className=" flex mt-5 gap-5">
                          <div>
                            <div className="text-[#22345C]  font-sans font-bold text-justify text-lg mt-5">
                              video
                            </div>
                            <video
                              controls
                              style={{
                                maxWidth: "350px",
                                maxHeight: "400px",
                              }}
                            >
                              <source
                                src={blogEntries[cardBlogIndex].blogVideo}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <div>
                            <div className="text-[#22345C]  font-sans font-bold text-justify text-lg mt-5">
                              GIF
                            </div>
                            <img
                              src={blogEntries[cardBlogIndex].blogGif}
                              alt="Blog Image"
                              style={{
                                maxWidth: "300px",
                                maxHeight: "300px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Blogcard;
