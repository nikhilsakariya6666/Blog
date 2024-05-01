import React from "react";
import Addblog from "./component/AddBlog/addblog";
import Blogcard from "./component/BlogCard/blogcard";

import { Route, Routes } from "react-router-dom";
import Signin from "./component/SignIn/signin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/addblog" element={<Addblog />} />
        <Route exact path="/blogcard" element={<Blogcard />} />
      </Routes>
    </>
  );
}

export default App;
