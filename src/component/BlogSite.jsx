import React, {useEffect, useState} from "react";
import Blog from "./Blog";
import "./BlogSite.css";

const BlogSite = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const URL = "blog_posts.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-4 grid gap-4 md:grid-cols-3">
      <div className="px-2 md:col-span-2 space-y-8">
        {blogData &&
          blogData.map((singleData) => (
            <Blog key={singleData.id} singleData={singleData}></Blog>
          ))}
      </div>
      <div className="space-y-4"></div>
    </div>
  );
};

export default BlogSite;
