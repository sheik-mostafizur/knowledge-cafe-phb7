import React, {useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Blog from "./Blog";
import Bookmarked from "./Bookmarked";
import SpentTime from "./SpentTime";

const BlogSite = () => {
  const [blogData, setBlogData] = useState([]);
  const [spendingTime, setSpendingTime] = useState(0);
  const [bookMark, setBookMark] = useState([]);
  const notify = () => toast("You Have Already Bookmarked This Blog!");

  useEffect(() => {
    const URL = "blog_posts.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  const handleSpentTime = (minutes) => {
    let time = spendingTime + minutes;
    setSpendingTime(time);
  };

  const handleBookMark = (bookmarked) => {
    const isExit = bookMark.find((element) => element.id === bookmarked.id);
    if (isExit) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Have Already Bookmarked This Blog!",
      });
    } else {
      setBookMark([...bookMark, bookmarked]);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 grid gap-4 md:grid-cols-3">
      <div className="px-2 md:col-span-2 space-y-8">
        {blogData &&
          blogData.map((singleData) => (
            <Blog
              key={singleData.id}
              singleData={singleData}
              handleSpentTime={handleSpentTime}
              handleBookMark={handleBookMark}></Blog>
          ))}
      </div>
      <div className="space-y-4">
        <SpentTime spendingTime={spendingTime}></SpentTime>
        <Bookmarked bookMark={bookMark}></Bookmarked>
      </div>
    </div>
  );
};

export default BlogSite;
