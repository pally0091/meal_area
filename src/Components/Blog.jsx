import React from "react";

const Blog = ({ fact }) => {
  const { title, content } = fact;
  return (
    <div>
      <div className="sm:hidden min-[320px]:hidden md:block lg:block relative bg-white bg-opacity-50 h-96 w-96 transform rotate-45 mx-auto flex items-center justify-center rounded-lg border border-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg  -rotate-45 h-60 w-60 text-center flex flex-col items-center justify-center shadow-md shadow-black hover:scale-105 transition-all duration-500">
          <h1 className="font-bold">{title}</h1>
          <p className="text-justify">{content}</p>
        </div>
      </div>
      <div className="min-[320px]:visible sm:visible md:hidden lg:hidden p-5 bg-white bg-opacity-60 rounded-lg shadow-md shadow-black">
        <h1 className="font-bold">{title}</h1>
        <p className="text-justify">{content}</p>
      </div>
    </div>
  );
};

export default Blog;
