import React, { useState, useEffect } from "react";

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Addblog = () => {
  const [createtask, setCreatetask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setcommentCount] = useState(0);

  const [formData, setFormData] = useState({
    blogTitle: "",
    blogDescription: "",
    url: "",
    blogImage: null,
    blogVideo: null,
    blogGif: null,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("blogData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect((index) => {
    const storeLike = localStorage.getItem(`likeCount-${index}`);
    if (storeLike) {
      setLikeCount(parseInt(storeLike));
    }
  }, []);

  useEffect(() => {
    const storeComment = localStorage.getItem(`commentCounts`);
    if (storeComment) {
      setcommentCount(parseInt(storeComment));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const newData = [...data];
      newData[editIndex] = {
        ...formData,
        blogImage: formData.blogImage
          ? URL.createObjectURL(formData.blogImage)
          : null,
        blogVideo: formData.blogVideo
          ? URL.createObjectURL(formData.blogVideo)
          : null,
        blogGif: formData.blogGif
          ? URL.createObjectURL(formData.blogGif)
          : null,
      };
      localStorage.setItem("blogData", JSON.stringify(newData));
      setData(newData);
      setEditIndex(null);
    } else {
      const newData = [
        ...data,
        {
          ...formData,
          blogImage: formData.blogImage
            ? URL.createObjectURL(formData.blogImage)
            : null,
          blogVideo: formData.blogVideo
            ? URL.createObjectURL(formData.blogVideo)
            : null,
          blogGif: formData.blogGif
            ? URL.createObjectURL(formData.blogGif)
            : null,
        },
      ];
      localStorage.setItem("blogData", JSON.stringify(newData));
      setData(newData);
    }
    setFormData({
      blogTitle: "",
      blogDescription: "",
      url: "",
      blogImage: null,
      blogVideo: null,
      blogGif: null,
    });
    opencreatetask();
  };

  const handleEdit = (index) => {
    const itemToEdit = data[index];
    setFormData(itemToEdit);
    setEditIndex(index);
    opencreatetask();
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    localStorage.setItem("blogData", JSON.stringify(newData));
    setData(newData);
  };

  const opencreatetask = () => {
    setCreatetask(!createtask);
  };

  return (
    <div className="p-10 bg-red-500">
      <div className="flex justify-end">
        <button
          onClick={() => opencreatetask()}
          type="button"
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Add
        </button>
      </div>

      {createtask ? (
        <>
          <div className="fixed top-0 left-[0%] z-[9999999999999] w-full h-full  backdrop-brightness-50 grid place-items-center place-content-center ">
            <div className="h-auto  filter-screen-model outline-none bg-white rounded-2xl shadow-2xl mx-5 ">
              <div>
                <div>
                  <div className=" border-[1.5px] border-[#000000] m-10 rounded-[20px] p-">
                    <div className="flex justify-center items-center">
                      <div className="absolute">
                        <button className="bg-[#22345C] text-lg text-white font-sans underline font-bold py-2 px-4 rounded-[10px]">
                          Create New Blog
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-">
                        <div>
                          <label className="text-[#22345C] underline font-sans font-bold text-lg">
                            Blog Title
                          </label>
                          <input
                            type="text"
                            name="blogTitle"
                            value={formData.blogTitle}
                            onChange={handleChange}
                            placeholder="Blog Title"
                            className="block w-full px-2 py-2 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[#22345C] underline font-sans font-bold text-lg">
                            Blog Description
                          </label>
                          <textarea
                            name="blogDescription"
                            value={formData.blogDescription}
                            onChange={handleChange}
                            placeholder="Blog Description"
                            rows="4"
                            className="resize-none block w-full px-2 py-2 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
                          />
                        </div>

                        <div className="flex gap-2">
                          <div>
                            <label className="text-[#22345C] underline font-sans font-bold text-lg">
                              URL
                            </label>
                            <input
                              type="text"
                              name="url"
                              value={formData.url}
                              onChange={handleChange}
                              placeholder="URL"
                              className="block w-96 px-2 py-2 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
                            />
                          </div>

                          <div>
                            <label className="text-[#22345C] underline font-sans font-bold text-lg">
                              Blog Image
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              name="blogImage"
                              onChange={handleChange}
                              className="block w-96 px-2 py-1.5 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
                            />
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div>
                            <label className="text-[#22345C] underline font-sans font-bold text-lg">
                              Blog Video
                            </label>
                            <input
                              type="file"
                              accept="video/*"
                              name="blogVideo"
                              onChange={handleChange}
                              className="block w-96 px-2 py-1.5 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
                            />
                          </div>

                          <div>
                            <label className="text-[#22345C] underline font-sans font-bold text-lg">
                              Blog Gif
                            </label>
                            <input
                              type="file"
                              accept="image/gif, image/jpeg, image/png"
                              name="blogGif"
                              onChange={handleChange}
                              className="block w-96 px-2 py-1.5 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex justify-center mt-7 gap-4 mb-5">
                      <div className="">
                        <button
                          onClick={handleSubmit}
                          className="bg-[#5DC90A]  px-6 py-2 leading-5  text-white font-bold  rounded-[6px]"
                        >
                          Submit
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => opencreatetask()}
                          className="bg-[#FF270E] px-6 py-2 leading-5 text-white font-bold rounded-[6px]"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <div>
        <div className="overflow-auto lg:overflow-visible mt-10">
          <table className="table w-full text-gray-400 border-separate space-y-6">
            <thead className="bg-[#22345C] text-white lg:text-xl">
              <tr>
                <th className="p-3 text-left ">Blog Title</th>
                <th className="p-3 text-center ">Blog Description</th>
                <th className="p-3 text-center">URL</th>
                <th className="p-3 text-center ">Image</th>

                <th className="p-3 text-center ">Video</th>

                <th className="p-3 text-center ">GIF</th>
                <th className="p-3 text-center ">Action</th>
                <th className="p-3 text-center ">Result</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-[#F5F7FD]">
                  <td className="p-3">{item.blogTitle}</td>
                  <td className="p-3">{item.blogDescription}</td>
                  <td className="p-3 text-center">{item.url}</td>
                  <td className="p-3 text-center">
                    {item.blogImage && (
                      <img
                        src={item.blogImage}
                        alt="Blog Image"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {item.blogVideo && (
                      <video
                        controls
                        style={{ maxWidth: "400px", maxHeight: "800px" }}
                      >
                        <source src={item.blogVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {item.blogGif && (
                      <img
                        src={item.blogGif}
                        alt="Blog GIF"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center space-x-2">
                      <CiEdit
                        size={25}
                        className="cursor-pointer text-[#FFFFFF] bg-[#22345C] rounded-full p-1"
                        onClick={() => handleEdit(index)}
                      />
                      <MdDelete
                        size={25}
                        className="cursor-pointer text-[#FFFFFF] bg-[#FF270E] rounded-full p-1"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  </td>

                  <td className="p-3 text-center">
                    <div className=" justify-center space-x-0.5 space-y-2">
                      <div className="flex gap-2">
                        <GoHeartFill
                          size={25}
                          className="cursor-pointer  text-[#FF270E] "
                        />
                        <h1 className="text-lg text-black">{likeCount}</h1>
                      </div>
                      <div className="flex gap-2">
                        <FaRegComment
                          size={23}
                          className="cursor-pointer text-black  "
                        />
                        <h1 className="text-lg text-black">{commentCount}</h1>
                      </div>
                      <div className="flex gap-2">
                        <IoPaperPlaneOutline
                          size={25}
                          className="cursor-pointer text-black  "
                        />
                        <h1 className="text-lg text-black">45</h1>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Addblog;
