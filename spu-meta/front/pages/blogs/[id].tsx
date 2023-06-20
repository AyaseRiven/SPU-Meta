import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import { GetStaticProps } from "next";

interface Data {
  id: number; // Assuming 'id' is a string
  attributes: {
    title: string;
    description: string;
  };
}
interface Blog {
  data: {
    id: number;
    attributes: {
      title: string;
      image: any;
      description: string;
      blog_header: string;
      date: string;
      news_body: string;
    };
  };

  // Add more properties as needed
}

export async function getStaticPaths() {
  const res = await fetch("https://spu-strapi.apptr1.com/api/blogs/");
  const data = await res.json();
  const paths = data.data.map((item: { id: any }) => {
    return {
      params: { id: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const API_BASE = process.env.STRAPI_API_BASE_URL;
  const res = await fetch(`${API_BASE}/api/blogs/${id}/?populate=*`);
  const data = await res.json();

  return {
    props: { blog: data },
  };
};

export default function BlogDetail({ blog }: { blog: Blog }) {
  const router = useRouter();
  const { id } = router.query;
  const API_BASE = process.env.STRAPI_API_BASE_URL;
  const imageUrl = `${API_BASE}${blog.data.attributes.image.data.attributes.url}`;

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="blogs bg-slate-200">
        <div className="px-6 pt-32 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[13.8rem] 3xl:px-[22.7rem] md:pt-20 lg:pt-32 xl:pt-40 3xl:pt-64">
          <div>
            <h1 className=" font-bold leading-none tracking-wider text-pink-500 font-size-sm-[40] md:font-size-[72]  text-center">
              {blog.data.attributes.title}
            </h1>
          </div>
          <div className=" pt-12 md:pt-12 md:w-full overflow-hidden h-auto relative">
            <picture>
              <img
                className="  w-full rounded-3xl h-auto"
                src={imageUrl}
                alt="me"
                width={1000}
                height={1000}
                sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
              />
            </picture>
            <div className="py-8 pb-40 sm:pb-72 md:pb-48  xl:pb-48 3xl:pb-56 3xl:py-12 max-sm:text-center ">
              <div className=" font-semibold tracking-widest text-pink-500 font-size-sm-[24] md:font-size-[32] pb-10 md:pb-2 3xl:pb-6   ">
                {blog.data.attributes.date}
              </div>
              <p className="text-gray-500 pb-8 leading-6 md:leading-6 3xl:leading-9 font-medium font-size-sm-[24] md:font-size-[32]">
                {blog.data.attributes.description}
              </p>
              <p className="text-gray-500 pb-8 leading-6 md:leading-6 3xl:leading-9 font-medium font-size-sm-[24] md:font-size-[32]">
                {blog.data.attributes.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute left-0 translate-y-[79%]  z-0">
        <div
          className=" coral01 md:w-[8rem] md:h-[9rem] lg:w-[10rem] 
          lg:h-[13rem] xl:w-[15rem] xl:h-[15rem] 3xl:h-[19.6rem] 3xl:w-[23rem] justify-end"
        ></div>
      </section>
      <section className="absolute z-0  right-0 translate-y-[44%] mb:translate-y-[50%] min-[500px]:translate-y-[72%] sm:translate-y-[72%]  md:-translate-y-[45%] ">
        <div className="tree w-64  h-[28rem]  mb:h-[28rem] md:h-[29rem] md:w-56 lg:h-[42rem] lg:w-[24rem] xl:h-[48rem] xl:w-[24rem]  3xl:h-[63.8rem] 3xl:w-[35rem] justify-end "></div>
      </section>
    </>
  );
}
