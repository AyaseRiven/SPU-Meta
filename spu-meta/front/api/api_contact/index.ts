import axios from "axios";

interface ContactData {
  data: {
    id: number;
    attributes: {
      title: string;
      sub_title: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      email: string;
      facebook: string;
      line: string;
      tel: string;
      address: string;
    };
  };
  meta: {};
}

export type ContactRespons = {
  result: ContactData;
};

export async function getContactData(): Promise<ContactRespons> {
  const API_KEY = process.env.STRAPI_API_KEY;
  const API_BASE = process.env.STRAPI_API_BASE_URL;
  const result = await axios.get(`${API_BASE}/api/contact-title`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      populate: "*",
    },
  });
  // console.log(result.data);
  return Promise.resolve({ result: result.data });
}
