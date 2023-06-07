import axios from "axios";

interface AboutData {
  data: {
    id: number;
    attributes: {
      header: string;
      sub_header: string;
      description: string;
      button: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      youtube_url: string;
    };
  };
  meta: {}
}

export type AboutResponst = {
  result: AboutData;
};
export async function getAboutData(): Promise<AboutResponst> {
  const API_KEY = process.env.STRAPI_API_KEY;
  const API_BASE = process.env.STRAPI_API_BASE_URL;
  const result = await axios.get(`${API_BASE}/api/about`, {
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
