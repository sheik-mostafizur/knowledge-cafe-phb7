import React from "react";

const Bookmarked = ({bookMark}) => {
  return (
    <div className="bg-gray-200 p-6 rounded space-y-4">
      <h2 className="font-bold text-2xl">
        Bookmarked Blogs : {bookMark.length}
      </h2>

      {bookMark &&
        bookMark.map((element) => (
          <h3 key={element.id} className="rounded bg-white p-4 font-bold">
            {element.blogTitle}
          </h3>
        ))}
    </div>
  );
};

export default Bookmarked;
