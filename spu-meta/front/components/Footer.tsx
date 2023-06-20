import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <footer className=" bg-black text-center  text-white hidden md:block">
        <div className="container mx-auto md:pt-6 xl:pt-8 3xl:pt-[4.3rem] md:px-20 lg:px-36 xl:px-[9.3rem] 3xl:px-[22.7rem] md:flex items-center md:justify-between">
          <Image
            className=" w-[3rem] lg:w-16 xl:w-20 3xl:w-28 3xl:-ml-1"
            src="/image/w_w.png"
            alt="me"
            width="120"
            height="120"
          />
          <ul className="flex flex-wrap items-center font-size-[26] lg:font-size-[24] font-medium -mt-4 md:space-x-[30px] lg:space-x-[35px] xl:space-x-[44px] 3xl:space-x-[46px] tracking-wider z-40">
            <li>
              <Link href="/" className="text-gray-300 hover:text-pink-500">
                Metaverse
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-gray-300 hover:text-pink-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#Main_News"
                className="text-gray-300 hover:text-pink-500"
              >
                News
              </Link>
            </li>
            <li>
              <Link href="/#FAQs" className="text-gray-300 hover:text-pink-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/#Contact"
                className="text-gray-300 hover:text-pink-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-300 hover:text-pink-500">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="container mx-auto md:px-20 lg:px-36 xl:px-[9.3rem] 3xl:px-[22.7rem]   pt-8 lg:pt-8 xl:pt-12">
          <div className="lg:mr-28 pb-10 text-left">
            <div className="grid-1 grid gap-0 md:grid-cols-2 lg:gap-20 xl:gap-12 lg:grid-cols-span-2">
              <div className=" relative z-10">
                <h6 className="mb-1 lg:pt-4 xl:pt-4 lg:pb-2 xl:mb-6 flex font-size-[40] tracking-[0.08em] items-center  font-semibold uppercase justify-start">
                  เกี่ยวกับเรา
                </h6>
                <p className="mb-10 lg:mb-16 text-neutral-300 lg:mr-0 font-size-[32] tracking-wider lg:leading-8">
                  Et has minnim elitr intellegat. Mea aeterno eleifend antiopam
                  ad,nam no suscipit
                </p>
              </div>
              <div className="lg:ml-5 xl:ml-[3.3rem] tracking-widest">
                <h6 className=" -mt-6 lg:mt-0 mb-3 lg:mb-4 flex font-size-[40]  lg:font-size-[36] font-semibold uppercase justify-start tracking-[0.08em]">
                  ติดต่อเรา
                </h6>
                <Link href="mailto:abc@example.com?subject = Feedback&body = Message">
                  <div className="flex items-center md:justify-start text-neutral-300 font-size-[24] hover:text-pink-500 ">
                    <p className="image_social w-3 h-2 lg:h-6 lg:w-6 bg-no-repeat bg-[left_calc(0%)_top_calc(-5%)] mr-5"></p>
                    admissions@spu.ac.th
                  </div>
                </Link>
                <Link
                  href="https://www.facebook.com/SPUsripatumuniversity"
                  target="_blank"
                >
                  <div className="flex md:justify-start text-neutral-300 font-size-[24] hover:text-pink-500">
                    <p className="image_social w-3 h-3 lg:h-6 lg:w-6 3xl:h-8 bottom-4 bg-no-repeat bg-[left_calc(0%)_top_calc(28%)] mr-5"></p>
                    Sripatum University
                  </div>
                </Link>
                <Link href="" target="_blank">
                  <div className="flex items-center justify-center md:justify-start text-neutral-300 font-size-[24]  hover:text-pink-500">
                    <p className="image_social w-3 h-2 lg:h-6 lg:w-6 bottom-4 bg-no-repeat bg-[left_calc(0%)_top_calc(68%)] mr-5"></p>
                    @sripatum
                  </div>
                </Link>
                <Link href="tel:02-558-6888">
                  <div className="flex items-center justify-center md:justify-start text-neutral-300 font-size-[24]  hover:text-pink-500">
                    <p className="image_social w-3 h-2 lg:h-6 lg:w-6 bg-no-repeat bg-[left_calc(0%)_bottom_calc(-5%)] mr-5"></p>
                    02-558-6888
                  </div>
                </Link>
              </div>
            </div>
            <div className="3xl:pt-12 justify-center items-center">
              <p className="flex font-size-[24] items-center justify-center  text-neutral-300 ">
                © สงวนลิขสิทธิ์ 2566 Sripatum University Metaverse 2023
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* mobile */}
      <footer className=" bg-black text-white px-6 pt-6 md:hidden">
        <div className="grid grid-cols-3 gap-8">
          <div className=" container mx-auto pl-4 pr-10 col-span-2">
            <h6 className=" flex font-size-sm-[40] mb:font-size-sm-[35] font-semibold uppercase  mb-5">
              เกี่ยวกับเรา
            </h6>
            <p className="text-neutral-400 leading-6 font-size-sm-[24]  tracking-widest">
              Et has minnim elitr intellegat. Mea aeterno eleifend antiopam
              ad,nam no suscipit
            </p>
          </div>
          <div>
            <div className="container mx-auto">
              <div className=" relative z-10">
                <Image
                  className=" w-16 pb-6"
                  src="/image/w_w.png"
                  alt="me"
                  width="50"
                  height="50"
                />
                <p className="mb-2">
                  <Link
                    href="/"
                    className="text-neutral-300 hover:text-pink-500  font-size-sm-[20] "
                  >
                    Metaverse
                  </Link>
                </p>
                <p className="mb-2">
                  <Link
                    href="/#about"
                    className="text-neutral-300 hover:text-pink-500   font-size-sm-[20] "
                  >
                    About
                  </Link>
                </p>
                <p className="mb-2">
                  <Link
                    href="/#Main_News"
                    className="text-neutral-300 hover:text-pink-500     font-size-sm-[20]  "
                  >
                    News
                  </Link>
                </p>
                <p className="mb-2">
                  <Link
                    href="/#FAQs"
                    className="text-neutral-300 hover:text-pink-500    font-size-sm-[20]  "
                  >
                    FAQs
                  </Link>
                </p>
                <p className="/#Contact">
                  <a
                    href="#!"
                    className="text-neutral-300 hover:text-pink-500    font-size-sm-[20]  "
                  >
                    Contact
                  </a>
                </p>
                <p className=" z-50">
                  <Link
                    href="/blogs"
                    className="text-neutral-300 hover:text-pink-500  font-size-sm-[20] "
                  >
                    Blogs
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div className=" relative z-10 px-4 pt-10 pb-3">
              <h6 className="mb-2 flex font-size-sm-[40] mb:font-size-sm-[35] font-semibold uppercase tracking-wider ">
                ติดต่อเรา
              </h6>
              <Link href="mailto:abc@example.com?subject = Feedback&body = Message">
                <div className="flex items-center font-size-sm-[24]  text-neutral-400  hover:text-pink-500  pb-1">
                  <p className="image_social h-6 w-6 pr-8 bg-no-repeat bg-[left_calc(0%)_top_calc(-13%)] "></p>
                  admissions@spu.ac.th
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/SPUsripatumuniversity"
                target="_blank"
              >
                <div className="flex text-neutral-400 font-size-sm-[24]  hover:text-pink-500  pb-1  ">
                  <p className="image_social mt-2  h-6 w-6 pr-8 sm:mt-3  bg-no-repeat bg-[left_calc(0%)_top_calc(32%)] "></p>
                  SPU University
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/SPUsripatumuniversity"
                target="_blank"
              >
                <div className="flex md:justify-start text-neutral-400  font-size-sm-[24]  hover:text-pink-500 pb-1  ">
                  <p className="image_social mt-1  h-6 w-6 pr-8 sm:mt-3  bg-no-repeat bg-[left_calc(0%)_top_calc(70%)] "></p>
                  @sripatum
                </div>
              </Link>
              <Link href="tel:02-558-6888">
                <div className="flex md:justify-start text-neutral-400 font-size-sm-[24]  hover:text-pink-500 pb-1  ">
                  <p className="image_social mt-2  h-6 w-6 pr-8 sm:mt-3  bg-no-repeat bg-[left_calc(0%)_top_calc(112%)] "></p>
                  02-558-6888
                </div>
              </Link>
              <div className=" -mr-8">
                <p className="flex pt-14 font-size-sm-[16] text-neutral-400">
                  © สงวนลิขสิทธิ์ 2566
                </p>
                <p className="flex font-size-sm-[16] text-neutral-400">
                  Sripatum University Metaverse 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
