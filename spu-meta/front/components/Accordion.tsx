import React, { useState } from "react";
import Image from "next/image";

const Accordion = () => {
  const [blogs, setBlogs] = useState(false);
  const handleBlogs = () => {
    setBlogs(!blogs);
  };
  return (
    <div>
      <div
        onClick={handleBlogs}
        className=" flex max-w-screen-md h-full items-center justify-center"
      >
        <div className="relative h-full w-full bg-white rounded-r-2xl">
          <div
            onClick={handleBlogs}
            className=" cursor-pointer text-center mx-6 lg:mx-2 3xl:mx-6 h-full flex flex-col items-start justify-center my-auto p-4"
          >
            <Image
              className={
                blogs
                  ? "w-6 h-3 md:w-6 md:h-2 3xl:w-8 3xl:h-4 text-center justify-center ease-in duration-500 "
                  : " w-6 h-3  md:w-6 md:h-2 3xl:w-8 3xl:h-4 text-center justify-center  ease-in duration-500 "
              }
              src={blogs ? "/image/arrow_up.png" : "/image/arrow_down.png"}
              alt="me"
              width="400"
              height="100"
              sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
