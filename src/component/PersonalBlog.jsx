import React from "react";

const PersonalBlog = () => {
  const personalBlogData = [
    {
      id: 1,
      name: "Sheik Mostafizur",
      authorImage: "https://i.postimg.cc/BQHBR5KW/sheik-mostafiozur-3d.png",
      title: "Props vs state",
      description:
        "In React, 'props' and state are two concepts used for managing and updating data in a component. Props (short for properties) are read-only data that are passed data from children (send as attribute and value) to parent (receive as a parameter) component, props represent an object. On the other hand, 'state' is mutable data that is managed within a component. A component's state can change over time; whenever it changes, the component re-renders. State can be updated using the 'setState' method.",
      publishDate: "2023-03-31",
    },
    {
      id: 2,
      name: "Sheik Mostafizur",
      authorImage: "https://i.postimg.cc/BQHBR5KW/sheik-mostafiozur-3d.png",
      title: "How does useState work?",
      description:
        "In React, 'useState' is a hook that allows you to add state to a functional component. It works by returning an array with two values: the current state value and a function to update that value. The first element of the array is the current state value, and the second element is a function that can be called to update the state value.",
      publishDate: "2023-03-31",
    },
    {
      id: 3,
      name: "Sheik Mostafizur",
      authorImage: "https://i.postimg.cc/BQHBR5KW/sheik-mostafiozur-3d.png",
      title: "Purpose of useEffect other than fetching data.",
      description:
        "While 'useEffect' is commonly used for fetching data in React, it has other purposes as well. 'useEffect' is a hook that allows you to perform side effects in functional components, such as modifying the DOM, subscribing to events, or setting up timers. 'useEffect'takes two arguments. The first argument passed to useEffect is a function called effect and the second argument (optional) is an array of dependencies.",
      publishDate: "2023-03-31",
    },
    {
      id: 4,
      name: "Sheik Mostafizur",
      authorImage: "https://i.postimg.cc/BQHBR5KW/sheik-mostafiozur-3d.png",
      title: "How Does React work?",
      description:
        "React is a JavaScript library for building user interfaces. Here are some steps. For example: JSX, Virtual DOM, Components, Data Flow, Lifecycle Methods etc. React gives us a single-page website that does not need to be refreshed repeatedly.",
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
