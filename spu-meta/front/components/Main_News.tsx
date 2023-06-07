import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { getNewsData } from "@/api/api_news";

interface Dataset {
  id: number;
  attributes: {
    header: string;
    description: string;
    date: string;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}

const Main_News = () => {
  const [dataList, setDataList] = useState<Dataset[]>([]);
  const API_KEY = process.env.STRAPI_API_KEY;
  const API_BASE = process.env.STRAPI_API_BASE_URL;

  const { data, isLoading } = useQuery({
    queryKey: ["getApiNews"],
    queryFn: async () => getNewsData(),
  });
  useEffect(() => {}, [data]);

  useEffect(() => {
    fetch(`${API_BASE}/api/news/?populate=*`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setDataList(result.data));
  }, [[]]);

  return (
    <div id="Main_News" className="bg_News">
      <div className=" container mx-auto px-6 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[9.3rem] 3xl:px-[22.7rem] pt-20 pb-20 md:pt-28 xl:pt-48 3xl:pt-40 md:pb-20 3xl:pb-40 ">
        <div className="mt-6 pb-6 3xl:mt-20 3xl:pb-28">
          <h1 className="mb-2 3xl:mb-8 font-size-sm-[40] md:font-size-[72]   font-bold leading-none tracking-wider text-pink-600  text-center">
            {data?.result.data.attributes.title}
          </h1>
          <p className="mb-4 md:pb-4 lg:pb-8 xl:pb-12 3xl:pb-0 font-size-sm-[32] md:font-size-[24] 3xl:font-size-[32]  text-white lg:text-xl sm:px-16 xl:px-48 justify-center text-center">
            {data?.result.data.attributes.sub_title}
          </p>
        </div>
        <div className="grid grid-cols-1 md:px-[0px] md:grid-cols-3 gap-6 md:gap-4 3xl:gap-6 xl:pb-8 3xl:pb-4">
          {/* <!-- Card image --> */}
          {dataList.slice(0, 3).map((data: Dataset) => (
            <>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1  rounded-3xl bg-gradient-to-br from-sky-400 to-pink-600 blur-2xl opacity-100 transition duration-200 "></div>
                  <div className="relative rounded-3xl w-auto justify-center bg-gradient-to-br from-sky-600 to-pink-600  ">
                    <div className="absolute text-xl top-2 left-2 3xl:top-4 3xl:left-4">
                      <span className=" absolute w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8  3xl:w-12 3xl:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-700 to-pink-600 ring-1 ring-slate-900/5 shadow-lg cursor-pointer">
                        <Image
                          className=" md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] "
                          src="/image/ping_highlight.png"
                          alt="me"
                          width="20"
                          height="20"
                        />
                      </span>
                      <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                    </div>
                    <picture>
                      <img
                        className=" w-full rounded-3xl h-[200px] md:h-[120px] lg:h-[160px] xl:h-[220px] 3xl:h-[250px]"
                        src={`${API_BASE}${data.attributes.image.data.attributes.url}`}
                        alt="me"
                        width="100"
                        height="100"
                        sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </picture>
                  </div>
                </div>
                <div className=" py-6 md:py-8 3xl:py-10 max-sm:text-center ">
                  <div className="font-bold text-white -tracking-tighter font-size-sm-[32] md:font-size-[40] 3xl:mb-4">
                    {data.attributes.header}
                  </div>
                  <div className=" font-medium text-pink-500 md:text-gray-400 font-size-sm-[24] md:font-size-[32] pb-2 ">
                    {data.attributes.date}
                  </div>
                  <p className="text-gray-400 font-normal font-size-sm-[24] md:font-size-[32]">
                    {data.attributes.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="relative w-44 mx-auto 3xl:mt-16 md:w-36 xl:w-56 3xl:w-80 -bottom-3">
          <div className="absolute inset-[-4px] bg-gradient-to-r from-pink-700  to-pink-700 rounded-full blur-xl opacity-100 transition duration-200 "></div>
          <Link
            href="/"
            className="relative py-2 md:py-3 lg:py-4 3xl:py-5 font-size-sm-[20] md:font-size-[32] 3xl:font-size-[32] text-white text-center justify-center bg-gradient-to-t from-pink-700 via-pink-700 to-pink-600 hover:opacity-80 rounded-full leading-none flex tracking-wider "
          >
            {data?.result.data.attributes.button}
            <Image
              className=" text-center ml-4 h-4 w-3 3xl:mt-[3.5px] md:ml-4 3xl:ml-4 md:w-3 md:h-4 xl:w-4 xl:h-5 md:-mt-[2%] lg:mt-[0%] xl:mt-[1%] 3xl:w-5 3xl:h-6 pt-1"
              src="/image/arrow.png"
              alt="me"
              width="10"
              height="10"
              sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main_News;
