import React, {useEffect, useState} from "react";

import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Card from "./Card";
import Bookmarked from "./Bookmarked";
import PersonalBlog from "./PersonalBlog";
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Have Already Bookmarked This Blog!",
      });
    }
    setBookMark([...bookMark, bookmarked]);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 grid gap-4 md:grid-cols-3">
      <div className="px-2 md:col-span-2 space-y-8">
        {blogData &&
          blogData.map((singleData) => (
            <Card
              key={singleData.id}
              singleData={singleData}
              handleSpentTime={handleSpentTime}
              handleBookMark={handleBookMark}></Card>
          ))}
        <PersonalBlog></PersonalBlog>
      </div>
      <div className="space-y-4">
        <SpentTime spendingTime={spendingTime}></SpentTime>
        <Bookmarked bookMark={bookMark}></Bookmarked>
      </div>
    </div>
  );
};

export default BlogSite;
