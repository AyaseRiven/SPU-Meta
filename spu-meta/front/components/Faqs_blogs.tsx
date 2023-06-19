import React, { useEffect, useState, useRef, RefObject } from "react";
import { createRoot } from "react-dom/client";
import Faq from "./Faq";

interface Dataset {
  id: number;
  attributes: {
    header: string;
    description: string;
  };
}
const Faqs_blogs = () => {
  const [dataList, setDataList] = useState<Dataset[]>([]);
  const API_KEY = process.env.STRAPI_API_KEY;
  const API_BASE = process.env.STRAPI_API_BASE_URL;
  const oneRef: RefObject<HTMLDivElement> = useRef(null);
  const twoRef: RefObject<HTMLDivElement> = useRef(null);
  const threeRef: RefObject<HTMLDivElement> = useRef(null);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  // const faqOne = document.querySelector(".one") as HTMLElement | null;

  useEffect(() => {
    fetch(`${API_BASE}/api/faqs/?populate=*&sort=id`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((result) => (setDataList(result.data), setHasFetchedData(true)));
    return () => {
      setDataList([]);
      // Clean up any resources here
    };
  }, []);

  useEffect(() => {
    // if (hasFetchedData) {
    dataList.forEach((data, index) => {
      const childElement = document.createElement("div");
      createRoot(childElement).render(
        <Faq
          title={data.attributes.header}
          body={data.attributes.description}
        />
      );
      // console.log(data.id);
      if (index % 3 == 0) {
        if (oneRef.current) {
          oneRef.current.appendChild(childElement);
        }
      }
      if (index % 3 == 1) {
        if (twoRef.current) {
          twoRef.current.appendChild(childElement);
        }
      }
      if (index % 3 == 2) {
        if (threeRef.current) {
          threeRef.current.appendChild(childElement);
        }
      }
    });
    // }
  }, [hasFetchedData]);

  return (
    <>
      <div className=" md:flex justify-between gap-10">
        <div ref={oneRef} className="one "></div>
        <div ref={twoRef} className="two "></div>
        <div ref={threeRef} className="three "></div>
      </div>
    </>
  );
};

export default Faqs_blogs;
