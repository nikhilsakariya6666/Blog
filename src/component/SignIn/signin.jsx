import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123456"
    ) {
      localStorage.setItem("role", "admin");
      navigate("/addblog");
    } else {
      const users = [
        { email: "radhe@gmail.com", password: "123456" },
        { email: "ram@gmail.com", password: "123456" },
        { email: "kiran@gmail.com", password: "123456" },
        { email: "mohan@gmail.com", password: "123456" },
        { email: "jay@gmail.com", password: "123456" },
      ];
      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (user) {
        localStorage.setItem("role", "user");
        navigate("/blogcard");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-2xl w-full max-w-xl rounded-3xl md:mt-16 mt-5 md:p-16 p-5 flex-center flex-col mb-4 ">
        <h1 className="text-regal-blue font-josefin font-bold text-4xl text-center text-[#22345C]">
          Login
        </h1>
        <div className="md:mt-24 mt-12">
          <div>
            <div className="relative mb-6 border w-full  rounded-lg ">
              <div className="flex items-center text-[#A9A9A9]">
                <span>
                  <HiOutlineMail size={25} className=" ml-2" />
                </span>
                <input
                  type="text"
                  id="input-group-1"
                  className="form-input-filed outline-none font-medium font-sans w-full py-2 px-2 rounded-lg"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="relative mb-6 border w-full rounded-lg">
              <div className="flex items-center text-[#A9A9A9]">
                <span>
                  <MdPassword size={25} className=" ml-2" />
                </span>
                <input
                  type="password"
                  id="input-group-2"
                  className="form-input-filed font-medium font-sans outline-none w-full py-2 px-2 rounded-lg"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center items-center flex mt-8">
          <button
            onClick={handleSubmit}
            className="bg-[#22345C] rounded-lg py-3 px-8 font-medium text-lg text-white leading-normal "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
