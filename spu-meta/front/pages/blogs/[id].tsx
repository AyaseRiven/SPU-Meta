import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

interface Data {
  id: number; // Assuming 'id' is a string
  attributes: {
    title: string;
    description: string;
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://spu-strapi.apptr1.com/api/blogs/");
  const data = await res.json();
  const paths = data.data.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params}) {
  const id = params.id;
  const res = await fetch(`https://spu-strapi.apptr1.com/api/blogs/${id}/?populate=*`,);
  const data = await res.json();

  return {
    props: { blog: data },
  };
}

export default function BlogDetail({ blog }) {
  const router = useRouter();
  const { id } = router.query;
  const API_BASE = process.env.STRAPI_API_BASE_URL;

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="h-screen pt-72 px-32 bg-gray-200">
    //   <h1 className="text-6xl">บทความที่ {id}</h1>
    //   <h2>{blog.data.attributes.title}</h2>
    //   <p>{blog.data.attributes.description}</p>
    // </div>
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
                          className=" w-full rounded-3xl h-[200px] md:h-[120px] lg:h-[160px] xl:h-[220px] 3xl:h-[250px] object-top object-cover"
                          src={`${API_BASE}${blog.data.attributes.image.data.attributes.url}`}
                          alt="me"
                          width="100"
                          height="100"
                          
                          sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                        />
              </picture>
              {/* {imgList.map((data: Img) => ( */}
              <>
                {/* <Image
                  className=" w-full mx-auto rounded-3xl h-[250px] md:h-[320px] lg:h-[380px] xl:h-[450px] 3xl:h-[688px]"
                  src={`${API_BASE}${data.attributes.image.data.attributes.url}`}
                  alt="/"
                  width={1000}
                  height={1000}
                  quality={100}
                  sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                /> */}
              </>
              {/* ))} */}
              <div className="py-8 pb-32 3xl:py-12 max-sm:text-center ">
                <div className="font-bold font-size-sm-[32] tracking-wider md:font-size-[48]">
                  Welcome to our SPU Libray Metaverse Experience
                </div>
                <div className=" font-semibold tracking-widest text-pink-500 font-size-sm-[24] md:font-size-[32] pb-10 md:pb-2 3xl:pb-6   ">
                  Oct 26, 2022
                </div>
                <p className="text-gray-500 leading-6 md:leading-6 3xl:leading-9 font-medium font-size-sm-[24] md:font-size-[32]">
                    {blog.data.attributes.description}
                </p>
                {/* <p className=" pt-12 leading-6  md:leading-6 3xl:leading-9 md:pt-8 md:py-10 3xl:py-20 text-gray-500 font-medium font-size-sm-[24] md:font-size-[32]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus nam voluptatum saepe dolorem aliquam architecto
                  laborum accusamus corrupti suscipit assumenda consequatur
                  tempore, harum deleniti, eius sed iste deserunt totam
                  sapiente? Nisi quod, ut minus quos id optio ad assumenda?
                  Est.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </>
  </div>
  );
}
