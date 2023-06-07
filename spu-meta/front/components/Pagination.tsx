import React from "react";

const Pagination = (): React.ReactElement => {
  return (
    <div>
      <div className=" pt-20 md:pt-0 pb-40 flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex gap-3">
            <li>
              <a
                className="relative block rounded-full py-1.5 px-3 text-sm text-white transition-all duration-300 bg-pink-500 hover:bg-black hover:text-white"
                href="#!"
              >
                1
              </a>
            </li>
            <li aria-current="page">
              <a
                className="relative block rounded-full py-1.5 px-3 text-sm text-white transition-all duration-300 bg-black hover:bg-pink-500 hover:text-white"
                href="#!"
              >
                2
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                  (current)
                </span>
              </a>
            </li>
            <li>
              <a
                className="relative block rounded-full py-1.5 px-3 text-sm text-white transition-all duration-300 bg-black hover:bg-pink-500 hover:text-white"
                href="#!"
              >
                3
              </a>
            </li>
            <li>
              <a
                className="relative block rounded-full py-1.5 px-3 text-sm text-white transition-all duration-300 bg-black hover:bg-pink-500 hover:text-white"
                href="#!"
              >
                4
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
