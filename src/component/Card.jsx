import React from "react";

const Card = ({singleData, handleSpentTime, handleBookMark}) => {
  const {id, authorName, blogTitle, images, readTime, publishDate} = singleData;
  return (
    <div className="border pb-4 rounded overflow-hidden">
      <div>
        <img src={images.blogCoverImage} alt="" />
      </div>
      <div className="mt-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={images.authorImage}
              alt={authorName}
              className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl md:text-2xl">{authorName}</h3>
            <p>{publishDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {readTime}
          <div className="w-4">
            <svg
              onClick={() => handleBookMark({id, blogTitle})}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512">
              <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
            </svg>
          </div>
        </div>
      </div>
      <h1 className="ms-4 my-4 font-bold text-2xl md:text-3xl">{blogTitle}</h1>
      <a
        href="#!"
        className="block ms-4 text-blue-800"
        onClick={() => handleSpentTime(parseInt(readTime.slice(0, 2).trim()))}>
        Mark as read
      </a>
    </div>
  );
};

export default Card;
