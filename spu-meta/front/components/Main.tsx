import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { getHome } from "@/api/api_home";

const Main = () => {
  const API_BASE = process.env.STRAPI_API_BASE_URL;

  const { data, isLoading } = useQuery({
    queryKey: ["getApiHome"],
    queryFn: async () => getHome(),
  });
  useEffect(() => {}, [data]);
  return (
    <>
      <>
        <div className=" lg:h-screen bg-[#050A30]">
          <div className=" bg_main relative overflow-hidden rounded-lg shadow-lg ">
            <div className=" container mx-auto px-6 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[9.3rem] 3xl:px-[22.7rem] pt-36 md:pt-36 text-center md:text-start lg:pt-48 3xl:pt-80">
              <h1 className="font-size-sm-[80] md:font-size-[173] iPad:text-[100vw] 3xl:font-size-[173] font-semibold text-sky-700 brightness-200 leading-3">
                {data?.result.data.attributes.header}
              </h1>
              <p className="font-size-sm-[60] md:font-size-[105] 3xl:font-size-[118] font-semibold text-white brightness-200 tracking-[2px] mt-[2%]">
                SP
                <strong className="underline underline-offset-3 3xl:underline-offset-8 decoration-pink-800 pr-2 3xl:pr-3">
                  U
                </strong>
                Metaverse
              </p>
              <p className="leading-normal md:mr-[65%] xl:mr-[60%] 3xl:mr-[55%]  tracking-wide font-size-sm-[24] md:font-size-[40] 3xl:font-size-[40] text-gray-100">
                {data?.result.data.attributes.sub_header}
              </p>
              <div className="absolute md:relative md:mt-4 lg:mt-6 xl:mt-12 3xl:mt-14 3xl:bottom-[0.25rem] inset-x-0 bottom-0 pb-24 justify-center text-center md:text-start cursor-pointer">
                <div className="mx-auto px-6 sm:px-0 md:px-0 w-60 justify-center text-center md:mx-0 md:w-40 lg:w-56 xl:w-72 3xl:w-96 3xl:pt-0">
                  <div className="relative">
                    <div className="absolute inset-[0px] bg-gradient-to-r from-pink-700  to-pink-700 rounded-full blur opacity-100 transition duration-200 "></div>
                    <Link
                      href="/"
                      className="relative py-3 md:py-3 lg:py-4 3xl:py-5 font-size-sm-[20] md:font-size-[32] 3xl:font-size-[32] text-white text-center justify-center bg-gradient-to-t from-pink-700 via-pink-700 to-pink-500 hover:opacity-80 rounded-full leading-none flex "
                    >
                      {data?.result.data.attributes.bottom_name}
                    </Link>
                  </div>
                </div>
                <p className="font-size-sm-[24] leading-normal pt-2 md:mx-10 lg:mx-14 xl:mx-16 3xl:mx-[5rem] md:font-size-[32] 3xl:font-size-[32]  text-gray-100">
                  {data?.result.data.attributes.description}
                </p>
                <div className="absolute inset-x-24 md:-left-2 lg:-left-3 3xl:-left-4 inline-flex">
                  <picture>
                    <img
                      className="bg-transparent pl-2 md:pl-0 cursor-pointer w-56 h-auto md:w-24 lg:w-36 xl:w-44 3xl:w-56"
                      src={`${API_BASE}${data?.result.data.attributes.app_store.data.attributes.url}`}
                      alt="me"
                      width="100"
                      height="100"
                      sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </picture>
                  <picture>
                    <img
                      className="bg-transparent pl-2 md:pl-0 cursor-pointer w-56 h-auto md:w-24 lg:w-36 xl:w-44 3xl:w-56"
                      src={`${API_BASE}${data?.result.data.attributes.google_play.data.attributes.url}`}
                      alt="me"
                      width="100"
                      height="100"
                      sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </picture>
                </div>
              </div>
              <div className=" absolute -bottom-5 md:-bottom-4  3xl:-bottom-6 pb-4 inset-x-0 text-center text-white">
                <Link href="/#about" className="">
                  <Image
                    className="bg-transparent animate-bounce cursor-pointer inline w-2 h-4 lg:w-3 lg:h-6 xl:w-5 xl:h-10  3xl:w-6 3xl:h-10 z-10"
                    src="/image/scolldown.png"
                    alt="me"
                    width="10"
                    height="10"
                    sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <p className=" font-size-sm-[15] md:font-size-[20] cursor-pointer">
                    Scroll Down
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Main;
