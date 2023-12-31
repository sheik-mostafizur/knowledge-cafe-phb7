import React from "react";

const Bookmarked = ({bookMark}) => {
  return (
    <div className="bg-gray-200 p-6 rounded space-y-4 md:sticky md:top-32">
      <h2 className="font-bold text-2xl">
        Bookmarked Blogs : {bookMark.length}
      </h2>

      {bookMark &&
        bookMark.map((element, index) => (
          <h3 key={index} className="rounded bg-white p-4 font-bold">
            {element.blogTitle}
          </h3>
        ))}
    </div>
  );
};

export default Bookmarked;
