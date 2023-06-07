import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Navbar2 = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");
  const [scrollPosition, getScrollPositon] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 90) {
        setColor("#000");
        setTextColor("#fff");
      } else {
        setColor("transparent");
        setTextColor("#000");
      }
    };
    const handleScroll = () => {
      getScrollPositon(document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full ease-in duration-300 lg:pt-6 xl:pt-10 3xl:pt-14 lg:pb-3 z-50"
    >
      <div className="flex items-center p-0 max-sm:justify-between ">
        <Link
          href="/"
          className="pl-4 lg:pl-0 md:mx-[0.8%] lg:mx-[3.5%] xl:mx-[5.2%]  3xl:mx-[6.3%] relative group cursor-pointer font-medium border-none"
        >
          <Image
            src={
              scrollPosition < 90 ? "/black_icon.svg" : "/white_white_icon.svg"
            }
            alt="logo"
            className="w-32 3xl:pt-0 md:w-24 lg:w-28 xl:w-36 3xl:w-64  "
            sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            width={200}
            height={200}
          />
        </Link>
        <div className="xl:container mx-3 lg:pl-2 3xl:pl-1 xl:px-0 2xl:px-5">
          <ul style={{ color: `${textColor}` }} className=" hidden sm:flex">
            <li className="pt-3 pr-10 md:pr-6 xl:pr-8 3xl:pr-14 group font-size-[24] tracking-wide transition duration-300 ">
              <Link href="/" style={{ color: `${textColor}` }}>
                Metaverse
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 md:h-[1%] 3xl:h-1 bg-pink-500"></span>
              </Link>
            </li>
            <li className="pt-3 pr-10 md:pr-6 xl:pr-8  3xl:pr-14 group font-size-[24] tracking-wide transition duration-3008">
              <Link href="/#about" style={{ color: `${textColor}` }}>
                About
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 md:h-[1%] 3xl:h-1 bg-pink-500"></span>
            </li>
            <li className="pt-3 pr-10 md:pr-6 xl:pr-8  3xl:pr-14 group font-size-[24] tracking-wide transition duration-300">
              <Link href="/#Main_News" style={{ color: `${textColor}` }}>
                News
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 md:h-[1%] 3xl:h-1 bg-pink-500"></span>
            </li>
            <li className="pt-3 pr-10 md:pr-6 xl:pr-8  3xl:pr-14 group font-size-[24] tracking-wide transition duration-300">
              <Link href="/#FAQs" style={{ color: `${textColor}` }}>
                FAQs
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 md:h-[1%] 3xl:h-1 bg-pink-500"></span>
            </li>
            <li className="pt-3 pr-10 md:pr-6 xl:pr-8  3xl:pr-14 group font-size-[24] tracking-wide transition duration-300">
              <Link href="/#Contact" style={{ color: `${textColor}` }}>
                Contact
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 md:h-[1%] 3xl:h-1 bg-pink-500"></span>
            </li>
            <li className="pt-3 pr-10 md:pr-6 xl:pr-8  3xl:pr-14 group font-size-[24] tracking-wide transition duration-300">
              <Link href="/NewsPage" style={{ color: `${textColor}` }}>
                Blogs
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 md:h-[1%] 3xl:h-1 bg-pink-500"></span>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#080d38] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#080d38] text-center ease-in duration-300"
          }
        >
          <Link href="/" onClick={handleNav} className="cursor-pointer">
            <Image
              src="/image/footer-icon.png"
              alt="logo"
              className="absolute w-20 h-12 left-8 top-4 "
              sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
              width={200}
              height={200}
            />
          </Link>
          <div className="py-2 absolute w-full h-screen px-8 top-12 mb:top-20">
            <p className="font-size-sm-[45] text-white mb:pb-8 font-semibold tracking-wider">
              Menu
            </p>
            <div className="grid grid-cols-2 gap-x-8 mb:gap-y-4">
              <div>
                <div className="w-full h-[80%] mb:h-[95%] bg-[#3f3d5f86] rounded-2xl shadow">
                  <Link href="/" onClick={handleNav} className="text-center">
                    <Image
                      className="mx-0 pt-8 px-10 w-full h-auto "
                      src="/image/mobile_menu_06.png"
                      alt="me"
                      width="50"
                      height="50"
                    />
                    <p className="text-white pb-10 font-size-sm-[28] font-semibold tracking-wider">
                      Metaverse
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-full h-[80%] mb:h-[95%] bg-[#3f3d5f86]  rounded-2xl  shadow">
                  <Link
                    href="/#about"
                    onClick={handleNav}
                    className="text-center"
                  >
                    <Image
                      className="mx-0 pt-8 px-10 w-full h-auto "
                      src="/image/mobile_menu_05.png"
                      alt="me"
                      width="50"
                      height="50"
                    />
                    <p className="text-white pb-10 font-size-sm-[28] font-semibold tracking-wider">
                      About
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-full  h-[80%] mb:h-[95%] bg-[#3f3d5f86] rounded-2xl shadow">
                  <Link
                    href="/#Main_News"
                    onClick={handleNav}
                    className="text-center"
                  >
                    <Image
                      className="mx-0 pt-8 px-10 w-full mb:h-28 "
                      src="/image/mobile_menu_02.png"
                      alt="me"
                      width="50"
                      height="50"
                    />
                    <p className="text-white font-size-sm-[28] font-semibold tracking-wider">
                      News
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-full  h-[80%] mb:h-[95%] bg-[#3f3d5f86] rounded-2xl shadow">
                  <Link
                    href="/#FAQs"
                    onClick={handleNav}
                    className="text-center"
                  >
                    <Image
                      className="mx-0 pt-8 px-2 w-full h-auto "
                      src="/image/mobile_menu_04.png"
                      alt="me"
                      width="50"
                      height="50"
                    />
                    <p className="text-white pb-10 font-size-sm-[28] font-semibold tracking-wider">
                      FAQs
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-full h-[80%] mb:h-[95%] bg-[#3f3d5f86] rounded-2xl shadow">
                  <Link
                    href="/#Contact"
                    onClick={handleNav}
                    className="text-center"
                  >
                    <Image
                      className="mx-0 pt-6 px-4 w-full h-30 "
                      src="/image/mobile_menu_01.png"
                      alt="me"
                      width="50"
                      height="50"
                    />
                    <p className="text-white font-size-sm-[28] pb-8 font-semibold tracking-wider mb:pt-4">
                      Contact
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-full  h-[80%] mb:h-[95%] bg-[#3f3d5f86] rounded-2xl shadow">
                  <Link
                    href="/NewsPage"
                    onClick={handleNav}
                    className="text-center"
                  >
                    <Image
                      className="mx-0 pt-8 px-6 w-full h-[65%] "
                      src="/image/mobile_menu_03_02.png"
                      alt="me"
                      width="50"
                      height="50"
                    />
                    <p className="text-white font-size-sm-[28] pt-1 pb-8 font-semibold tracking-wider">
                      Blogs
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-2  mb:bottom-6">
            <p className="font-size-sm-[18] text-gray-400">
              © สงวนลิขสิทธิ์ 2566 Sripatum University Meraverse 2023
            </p>
          </div>
        </div>
        {/* <!-- Pin to top right corner --> */}
        <div className="relative h-6 w-full mb:h-6">
          <div
            className={
              nav
                ? "absolute right-[-40px] duration-700   top-[-20px] mb:top-[-25px]  md:right-[-30px] md:top-[-50px]"
                : "absolute right-[-500px] duration-700  top-[-20px] mb:top-[-25px]  md:right-[-30px] lg:right-[-16px] 3xl:right-[-16px] md:top-[-16px] lg:top-[-45px] xl:top-[-62px] 3xl:top-[-95px] "
            }
          >
            <Link href="/">
              <div className="absolute -inset-2 blur-3xl -z-10 bg-gradient-to-t from-pink-700 via-pink-700 to-pink-500 rounded-bl-XXL opacity-50 transition duration-200 "></div>
              <button
                type="button"
                className="text-white w-60 mb:w-72 md:w-56 lg:w-64 xl:w-80 3xl:w-[420px] h-12 md:h-6 lg:h-10 xl:h-14 3xl:h-20 tracking-wider bg-gradient-to-t from-pink-700 via-pink-700 to-pink-500 hover:opacity-80 font-medium rounded-bl-XXL font-size-sm-[17] mb:font-size-sm-[18] md:font-size-[32] px-2 pr-16 py-2.5 md:py-4 md:pl-8 md:pt-5 md:pr-8 lg:pr-2  lg:py-2.5 3xl:pr-0 3xl:pl-8 3xl:pt-4 text-right justify-center inline-flex items-center mr-4 mb-2"
              >
                ดาวน์โหลด SPU Metaverse
              </button>
            </Link>
          </div>
        </div>

        {/* <!-- Pin to top right corner --> */}
        <div className=" sm:hidden relative h-16 w-6 ">
          <div className="absolute right-[-20px] top-[-8px] mb:top-[-4px]">
            <button
              type="button"
              className="w-16 h-[2.80rem] mb:w-20 tracking-widest bg-cyan-500 hover:bg-cyan-400/90 focus:ring-1 focus:ring-[#00ffff]/50 rounded-bl-main justify-center inline-flex items-center mr-4 mb:mr-2 mb-2 z-50"
            >
              {/* Mobile Button */}
              <div
                onClick={handleNav}
                className="block sm:hidden z-10 justify-end"
              >
                <Image
                  className={nav ? "ml-4 mb:ml-0 duration-300" : "duration-300"}
                  src={nav ? "/Cross_icon_(white).svg" : "/mobilebar.svg"}
                  alt="Icon"
                  width={16}
                  height={16}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
