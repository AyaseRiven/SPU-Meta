import { RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { text } from "stream/consumers";
import Link from "next/link";
import { getContactData } from "@/api/api_contact";
import { useQuery } from "react-query";

interface ConBodyProps {
  offsetTop: (offsetTop: number) => void;
}

const Contact: React.FC<ConBodyProps> = ({ offsetTop }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const refCon: RefObject<HTMLDivElement> = useRef(null);

  const { data, isLoading } = useQuery({
    queryKey: ["getApiContact"],
    queryFn: async () => getContactData(),
  });
  useEffect(() => {
    const getPosition = () => {
      offsetTop(refCon.current?.offsetTop || 0);
    };
    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("scroll", getPosition); // Clear the timeout if the component is unmounted before the delay expires
    };
  }, []);

  return (
    <div ref={refCon} id="Contact">
      <div className="bg_contact h-auto">
        <div className=" container mx-auto px-6 sm:px-10 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[9.3rem] 3xl:px-[22.5rem] pt-16 md:pt-12 xl:pt-36 3xl:pt-20 md:pb-28 3xl:pb-56 ">
          <div className="flex flex-col 3xl:p-4 xl:pb-8 leading-normal">
            <h5 className="mb-2 font-size-sm-[40] md:font-size-[72] text-center font-bold tracking-wider text-pink-600">
              {data?.result.data.attributes.title}
            </h5>
            <p className=" hidden md:block font-normal font-size-sm-[24]  md:font-size-[32] text-white text-center">
              {data?.result.data.attributes.sub_title}
            </p>
            {/* <p className=" md:hidden font-normal font-size-sm-[24]  md:font-size-[32] text-white text-center">
            {data?.result.data.attributes.sub_title}
            </p> */}
          </div>
          <div className=" pt-6 md:pt-12 3xl:pt-0 grid md:grid-cols-2 gap-10">
            <div className="justify-center text-center md:text-start grow-0 shrink-0 basis-auto w-full ">
              <h2 className="font-size-sm-[40] sm:font-size-sm-[32] md:font-size-[40] text-white font-bold pb-4 md:pb-4 3xl:pb-8">
                ที่อยู่
              </h2>
              <p className="text-gray-400 tracking-wider md:tracking-normal font-size-sm-[24] md:font-size-[32] leading-3">
                Email : {data?.result.data.attributes.email}
              </p>
              <p className="text-gray-400 tracking-wider md:tracking-normal font-size-sm-[24] md:font-size-[32]">
                Facebook : {data?.result.data.attributes.facebook}
              </p>
              <p className="text-gray-400 tracking-wider md:tracking-normal font-size-sm-[24] md:font-size-[32] leading-3">
                Line : {data?.result.data.attributes.line}
              </p>
              <p className="text-gray-400 tracking-wider md:tracking-normal font-size-sm-[24] md:font-size-[32] pb-8 md:pb-5 lg:pb-4 xl:pb-8 3xl:pb-20">
                Tel : {data?.result.data.attributes.tel}
              </p>
              <p className="text-gray-400 lg:w-52 xl:w-72 3xl:w-96 md:pt-3 lg:pt-0 3xl:pt-0 tracking-wider md:tracking-normal font-size-sm-[24] md:font-size-[32]">
                {data?.result.data.attributes.address}
              </p>
              {/* <p className="text-gray-400 tracking-wider md:tracking-normal font-size-sm-[24] md:font-size-[32] leading-5">
                เขต จตุจักร กรุงเทพฯ 10900
              </p> */}
            </div>

            {/* form */}
            <div>
              <form className="max-w-xl mx-auto">
                <div>
                  <div className="grid md:grid-cols-2 md:gap-10 3xl:gap-24">
                    <div className="">
                      <div
                        className="relative font-size-[24]"
                        data-te-input-wrapper-init
                      >
                        <div className="relative z-0 pt-12 pb-8 md:pt-0 md:pb-0">
                          <input
                            type="text"
                            id="floating_standard"
                            className="block md:pb-1 3xl:py-2.5 px-0 w-full font-size-sm-[24] md:font-size-[24] 3xl:font-size-[20] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-pink-400 peer"
                            placeholder=" "
                          />
                          <label
                            // for="floating_standard"
                            className="absolute font-size-sm-[24] md:font-size-[24] leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 md:-translate-y-3 xl:-translate-y-5 3xl:-translate-y-8 scale-75 md:top-0 xl:top-2 3xl:top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 
                            md:peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                            peer-focus:-translate-y-14 
                            md:peer-focus:-translate-y-3 xl:peer-focus:-translate-y-5 3xl:peer-focus:-translate-y-8"
                          >
                            First Name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div
                        className="relative font-size-[24]"
                        data-te-input-wrapper-init
                      >
                        <div className="relative z-0 pb-8 md:pb-0">
                          <input
                            type="text"
                            id="floating_standard"
                            className="block md:pb-1 3xl:py-2.5 px-0 w-full font-size-sm-[24] md:font-size-[24] 3xl:font-size-[20] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-pink-400 peer"
                            placeholder=" "
                          />
                          <label
                            // for="floating_standard"
                            className="absolute font-size-sm-[24] md:font-size-[24] leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 md:-translate-y-3 xl:-translate-y-5 3xl:-translate-y-8 scale-75 md:top-0 xl:top-2 3xl:top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 
                            md:peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                            peer-focus:-translate-y-14 
                            md:peer-focus:-translate-y-3 xl:peer-focus:-translate-y-5 3xl:peer-focus:-translate-y-8"
                          >
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" md:pb-4">
                  <div>
                    <div
                      className="relative 3xl:mb-3 md:mt-4 xl:mt-6 font-size-[24]"
                      data-te-input-wrapper-init
                    >
                      <div className="relative z-0 pb-8 md:pb-0">
                        <input
                          type="text"
                          id="floating_standard"
                          className="block md:pb-1 3xl:py-2.5 px-0 w-full font-size-sm-[24] md:font-size-[24] 3xl:font-size-[20] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-pink-400 peer"
                          placeholder=" "
                        />
                        <label
                          // for="floating_standard"
                          className="absolute font-size-sm-[24] md:font-size-[24] leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 md:-translate-y-3 xl:-translate-y-5 3xl:-translate-y-8 scale-75 md:top-0 xl:top-2 3xl:top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 
                            md:peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                            peer-focus:-translate-y-14 
                            md:peer-focus:-translate-y-3 xl:peer-focus:-translate-y-5 3xl:peer-focus:-translate-y-8"
                        >
                          Your Email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="3xl:pb-12">
                  <div>
                    <div className="">
                      <div
                        className="relative font-size-[24]"
                        data-te-input-wrapper-init
                      >
                        <div className="relative z-0">
                          <input
                            type="text"
                            id="floating_standard"
                            className="block md:pb-1 3xl:py-2.5 px-0 w-full font-size-sm-[24] md:font-size-[24] 3xl:font-size-[20] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-pink-400 peer"
                            placeholder=" "
                          />
                          <label
                            // for="floating_standard"
                            className="absolute font-size-sm-[24] md:font-size-[24] leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 md:-translate-y-3 xl:-translate-y-5 3xl:-translate-y-8 scale-75 md:top-0 xl:top-2 3xl:top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 
                            md:peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                            peer-focus:-translate-y-14 
                            md:peer-focus:-translate-y-3 xl:peer-focus:-translate-y-5 3xl:peer-focus:-translate-y-8"
                          >
                            Message
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mx-auto pt-16 pb-16 md:pt-0 w-40 mb:w-36 md:w-28 xl:w-44 3xl:w-64">
                  <div className="relative md:-bottom-8 lg:-bottom-10 xl:-bottom-16 3xl:-bottom-14">
                    <div className="absolute -inset-0 bg-gradient-to-r from-pink-700  to-pink-600 rounded-full blur opacity-100 transition duration-200"></div>
                    <Link
                      href="/"
                      className="relative font-size-sm-[20] py-3 md:py-2 xl:py-3 3xl:py-4 w-auto md:font-size-[32] text-white justify-center bg-gradient-to-t from-pink-700 via-pink-700 to-pink-600 hover:opacity-80  cursor-pointer ring-1 ring-gray-900/5 rounded-full leading-none flex "
                    >
                      ส่งข้อมูล
                      <Image
                        className=" text-center ml-3 pt-[6px] w-[10px] h-[14px]  md:w-2 md:h-3  xl:w-4 xl:h-5 3xl:w-4 3xl:h-5 md:pt-1 3xl:mt-[0.4rem]"
                        src="/image/arrow.png"
                        alt="me"
                        width="10"
                        height="10"
                        sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
