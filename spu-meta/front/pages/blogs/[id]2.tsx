import Navbar2 from "@/components/Navbar";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import axios from 'axios';


// ประกาศชนิดของพารามิเตอร์
type MyPageParams = {
  id: string;
};


// สร้าง Dynamic Route ด้วย GetStaticPaths
export const getStaticPaths: GetStaticPaths<MyPageParams> = async () => {
  // กำหนดเส้นทางที่เป็นไปได้ได้เองที่ต้องการ
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return {
    paths,
    fallback: false, // หากไม่มีพารามิเตอร์ที่ตรงกับเส้นทางที่กำหนด จะแสดงหน้า 404
  };
};

// ใช้ GetStaticProps เพื่อส่งข้อมูลไปยังหน้าที่กำหนดด้วย Dynamic Route
export const getStaticProps: GetStaticProps<{ id: string }> = async ({ params }) => {
  const id = params?.id || '';
  const { data } = await axios.get(`https://spu-strapi.apptr1.com/api/blogs/${id}`);
  
  return {
    props: {
      id,
      item: data,
    },
  };
};
// สร้างหน้าที่แสดงผล
const ItemPage = ({ id, item }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  // ตรวจสอบสถานะการโหลดข้อมูล
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // แสดงข้อมูล
  return (
    <div>
      <h1>Item ID: {id}</h1>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
};

export default ItemPage;
