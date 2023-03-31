import React from "react";

const PersonalBlog = () => {
  const personalBlogData = [
    {
      id: 1,
      name: "Sheik Mostafizur",
      authorImage: "https://i.postimg.cc/BQHBR5KW/sheik-mostafiozur-3d.png",
      title: "Props vs state",
      description: "Description",
      publishDate: "2023-03-31",
    },
  ];
  return (
    <>
      {personalBlogData &&
        personalBlogData.map(
          ({id, name, authorImage, title, description, publishDate}) => (
            <div key={id} className="border pb-4 rounded bg-blue-100">
              <div className="mt-4 px-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={authorImage}
                      alt={name}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl">{name}</h3>
                    <p>{publishDate}</p>
                  </div>
                </div>
              </div>
              <h1 className="ms-4 my-4 font-bold text-2xl md:text-3xl">
                {title}
              </h1>
              <p className="ms-4 my-4">{description}</p>
            </div>
          )
        )}
    </>
  );
};

export default PersonalBlog;
