import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </React.StrictMode>
);




// import React, { useState } from "react";

// import Boy from "../../assets/boy.jpg";
// import Film from "../../assets/sample.mp4";
// import CatGIF from "../../assets/giphy.gif";

// import { CiEdit } from "react-icons/ci";
// import { MdDelete } from "react-icons/md";
// import { AiFillDelete } from "react-icons/ai";

// const Addblog = () => {
//   const [createtask, setCreatetask] = useState(false);

//   const [showModal, setShowModal] = useState(false); // Delete Popup

//   const opencreatetask = () => {
//     setCreatetask(!createtask);
//   };

//   const modelShows = () => {
//     setShowModal(true);
//   };
//   return (
//     <div className="p-10 bg-red-500">
//       <div className="flex justify-end">
//         <button
//           onClick={() => opencreatetask()}
//           type="button"
//           className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
//         >
//           Add
//         </button>
//       </div>

//       {createtask ? (
//         <>
//           <div className="fixed top-0 left-[0%] z-[9999999999999] w-full h-full  backdrop-brightness-50 grid place-items-center place-content-center ">
//             <div className="h-auto  filter-screen-model outline-none bg-white rounded-2xl shadow-2xl mx-5 ">
//               <div>
//                 <div>
//                   <div className=" border-[1.5px] border-[#000000] m-10 rounded-[20px] p-">
//                     <div className="flex justify-center items-center">
//                       <div className="absolute">
//                         <button className="bg-[#22345C] text-lg text-white font-sans underline font-bold py-2 px-4 rounded-[10px]">
//                           Create New Blog
//                         </button>
//                       </div>
//                     </div>
//                     <div className="p-5">
//                       <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-">
//                         <div>
//                           <label
//                             className="text-[#22345C] underline font-sans font-bold text-lg"
//                             for="username"
//                           >
//                             Blog Title
//                           </label>
//                           <input
//                             type="text"
//                             className="block w-full px-2 py-2 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
//                             name="blogtitle"
//                           />
//                         </div>

//                         <div>
//                           <label
//                             className="text-[#22345C] underline font-sans font-bold text-lg"
//                             for="username"
//                           >
//                             Blog Description
//                           </label>
//                           <textarea
//                             rows="4"
//                             type="text"
//                             className="resize-none block w-full px-2 py-2 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
//                             name="blogdescription"
//                           />
//                         </div>

//                         <div className="flex gap-2">
//                           <div>
//                             <label
//                               className="text-[#22345C] underline font-sans font-bold text-lg"
//                               for="username"
//                             >
//                               URL
//                             </label>
//                             <input
//                               type="url"
//                               className="resize-none block w-96 px-2 py-2 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
//                               name="blogdescription"
//                             />
//                           </div>

//                           <div>
//                             <label
//                               className="text-[#22345C] underline font-sans font-bold text-lg"
//                               for="username"
//                             >
//                               Blog Image
//                             </label>
//                             <input
//                               type="file"
//                               className="block w-96 px-2 py-1.5 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
//                               name="blogtitle"
//                             />
//                           </div>
//                         </div>

//                         <div className="flex gap-2">
//                           <div>
//                             <label
//                               className="text-[#22345C] underline font-sans font-bold text-lg"
//                               for="username"
//                             >
//                               Blog Video
//                             </label>
//                             <input
//                               type="file"
//                               className="block w-96 px-2 py-1.5 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
//                               name="blogtitle"
//                             />
//                           </div>

//                           <div>
//                             <label
//                               className="text-[#22345C] underline font-sans font-bold text-lg"
//                               for="username"
//                             >
//                               Blog Gif
//                             </label>
//                             <input
//                               type="file"
//                               className="block w-96 px-2 py-1.5 mt-2 text-[#000000] bg-white border border-[#233966] rounded-md outline-none"
//                               name="blogtitle"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="flex justify-center mt-7 gap-4 mb-5">
//                       <div className="">
//                         <button
//                           onClick={() => opencreatetask()}
//                           className="bg-[#5DC90A]  px-6 py-2 leading-5  text-white font-bold  rounded-[6px]"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                       <div>
//                         <button
//                           onClick={() => opencreatetask()}
//                           className="bg-[#FF270E] px-6 py-2 leading-5 text-white font-bold rounded-[6px]"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         ""
//       )}

//       <div>
//         <div className="overflow-auto lg:overflow-visible mt-10">
//           <table className="table w-full text-gray-400 border-separate space-y-6">
//             <thead className="bg-[#22345C] text-white lg:text-xl">
//               <tr>
//                 <th className="p-3 text-left ">Blog Title</th>
//                 <th className="p-3 text-center ">Blog Description</th>
//                 <th className="p-3 text-center">URL</th>
//                 <th className="p-3 text-center ">Image</th>

//                 <th className="p-3 text-center ">Video</th>

//                 <th className="p-3 text-center ">GIF</th>
//                 <th className="p-3 text-center ">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-[#F5F7FD] lg:text-black font-bold font-sans text-lg">
//                 <td className="p-3 space-y-">
//                   <div>Welcome To Our Travel Blog</div>
//                 </td>

//                 <td className="p-3 space-y-">
//                   <div>
//                     It’s been a while since I started a new travel blog. Some
//                     long-time followers may know, I started travel blogging in
//                     India in 2005 – which makes me one of the very first travel
//                     bloggers. This was at the very beginning of travel blogging,
//                     and very early days of social media.
//                   </div>
//                 </td>

//                 <td className="p-3 text-center">
//                   https://indiaforbeginners.com/hello-world/
//                 </td>

//                 <td className="p-3 text-center">
//                   <img
//                     src={Boy}
//                     alt="Blog Image"
//                     style={{ maxWidth: "100px", maxHeight: "100px" }}
//                   />
//                 </td>

//                 <td className="p-3 text-center">
//                   <video
//                     controls
//                     style={{ maxWidth: "400px", maxHeight: "800px" }}
//                   >
//                     <source src={Film} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </td>

//                 <td className="p-3 text-center">
//                   <img
//                     src={CatGIF}
//                     alt="Blog Image"
//                     style={{ maxWidth: "100px", maxHeight: "100px" }}
//                   />
//                 </td>

//                 <td className="p-3 ">
//                   <div className="relative gap-2 flex items-center justify-center  ">
//                     <button>
//                       <CiEdit
//                         size={25}
//                         className="cursor-pointer  text-[#FFFFFF] bg-[#22345C] rounded-[3px] p-1"
//                       />
//                     </button>

//                     <div>
//                       <MdDelete
//                         onClick={() => modelShows()}
//                         size={25}
//                         className="cursor-pointer text-[#FFFFFF]  bg-[#FF270E] rounded-[3px] p-1"
//                       />

//                       {showModal ? (
//                         <>
//                           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//                             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//                               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                                 <div className="relative p-6 flex-auto">
//                                   <span className="justify-center items-center flex">
//                                     <AiFillDelete className="w-16 h-16 fill-red-500" />
//                                   </span>
//                                   <p className="my-4 text-center leading-relaxed text-2xl text-red-500">
//                                     Are You Sure ?
//                                   </p>
//                                   <p className="my-4 text-slate-500 text-lg leading-relaxed">
//                                     You want to Delete this Blog
//                                   </p>
//                                 </div>

//                                 <div className="flex gap-2 items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
//                                   <button
//                                     onClick={() => setShowModal(false)}
//                                     className="text-red-500   font-bold py-2 px-6 rounded"
//                                   >
//                                     No
//                                   </button>
//                                   <button
//                                     onClick={() => setShowModal(false)}
//                                     className="bg-emerald-500 active:bg-emerald-600 px-6 py-2  text-white font-bold  rounded"
//                                   >
//                                     Yes
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//                         </>
//                       ) : null}
//                     </div>

//                     {/* <div>
//                       <HiOutlineEye
//                         onClick={() => {
//                           viewUserTodoList(d?._id);
//                         }}
//                         size={25}
//                         className="cursor-pointer  text-[#FFFFFF] bg-[#22345C] rounded-[3px] p-1"
//                       />
//                     </div> */}
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addblog;
