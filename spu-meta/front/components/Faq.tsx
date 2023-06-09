import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import Image from "next/image";

interface Dataset {
  id: number;
  attributes: {
    header: string;
    description: string;
  };
}
interface faqProps {
  title: string;
  body: string;
}

const Faq: React.FC<faqProps> = ({ title, body }) => {
  const [blogs, setBlogs] = useState(false);
  const handleBlogs = () => {
    setBlogs(!blogs);
  };

  return (
    <div className="flex flex-col md:w-[85%]">
      <div
        className={
          blogs
            ? "relative pb-12 md:pb-[0.35rem] lg:pb-6 xl:pb-6 3xl:pb-8  duration-[1000ms]"
            : " relative pb-12 md:pb-12 lg:pb-16 xl:pb-24 3xl:pb-32  duration-700"
        }
      >
        <Collapsible
          triggerTagName="div"
          trigger={
            <div
              onClick={handleBlogs}
              className=" flex h-28 md:h-14 lg:h-20 xl:h-24 3xl:h-[8rem] items-center justify-center"
            >
              <div className="relative rounded-r-2xl h-full 3xl:w-full rounded-md bg-gradient-to-r from-white via-pink-600 to-pink-600 md:rounded-r-lg 3xl:rounded-r-2xl p-[0.1rem] md:p-[1px] 3xl:p-[1.75px] z-10">
                <div className=" absolute h-full z-50 rounded-r-2xl bg-pink-600 w-[2px] md:w-[2px] 3xl:w-[4px] 3xl:rounded-2xl "></div>
                <div className="relative rounded-r-2xl leading-8 h-full w-full bg-white md:rounded-r-lg 3xl:rounded-r-2xl">
                  <div className=" flex justify-between items-center p-2 pl-4 md:pl-0 lg:pl-4 rounded-r-2xl text-left h-full bg-white md:leading-3 xl:leading-6 3xl:leading-8  md:rounded-r-lg 3xl:rounded-r-2xl">
                    <p className="w-[66%] md:w-[66%] lg:w-[72%] 3xl:w-[78%] 3xl:pl-4 font-size-sm-[32] md:font-size-[28] lg:font-size-[32] 3xl:font-size-[32] text-gray-700 ">
                      {title}
                    </p>
                    <div>
                      <div className=" flex max-w-screen-md h-full items-center justify-center">
                        <div className="relative h-full w-full bg-white rounded-r-2xl">
                          <div className=" cursor-pointer text-center mx-1 lg:mx-2 3xl:mx-6 h-full flex flex-col items-start justify-center my-auto p-4">
                            <Image
                              className={
                                blogs
                                  ? "w-6 h-3 md:w-6 md:h-2 3xl:w-14 3xl:h-4 text-center justify-center ease-in duration-500 "
                                  : " w-6 h-3  md:w-6 md:h-2 3xl:w-14 3xl:h-4 text-center justify-center  ease-in duration-500 "
                              }
                              src={
                                blogs
                                  ? "/image/arrow_up.png"
                                  : "/image/arrow_down.png"
                              }
                              alt="me"
                              width="400"
                              height="100"
                              sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div>
            <div
              className={
                blogs
                  ? " px-1 pt-4 md:pt-2 xl:pt-4 3xl:pt-6 font-size-sm-[24] md:font-size-[24] text-gray-500 font-medium text-left leading-5 md:leading-3 xl:leading-5 3xl:leading-6"
                  : " px-1 pt-4 md:pt-2 xl:pt-4 3xl:pt-6 font-size-sm-[24] md:font-size-[24] text-gray-500 font-medium text-left leading-5 md:leading-3 xl:leading-5 3xl:leading-6"
              }
            >
              {body}
            </div>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};
export default Faq;
