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
    <div>
      <>
        <Navbar />
        <div className="blogs bg-slate-200">
          <div className="px-6 pt-32 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[13.8rem] 3xl:px-[22.7rem] md:pt-28 lg:pt-48 xl:pt-56 3xl:pt-64">
            <div>
              <h1 className="  font-bold leading-none tracking-wider text-pink-500 font-size-sm-[40] md:font-size-[72]  text-center">
                {blog.data.attributes.title}
              </h1>
            </div>
            <div className=" pt-12 md:pt-12 md:w-full overflow-hidden h-auto relative">
              <picture>
                <img
                  className="  w-full rounded-3xl h-[200px] md:h-[120px] lg:h-[160px] xl:h-[220px] 3xl:h-[650px]"
                  src={imageUrl}
                  alt="me"
                  width={1000}
                  height={1000}
                  sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                />
              </picture>
              <div className="py-8 mb-56 3xl:py-12 max-sm:text-center ">
                <div className="font-bold font-size-sm-[32] tracking-wider md:font-size-[48]">
                  {blog.data.attributes.blog_header}
                </div>
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
      </>
    </div>
  );
}
