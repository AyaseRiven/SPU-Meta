import axios from "axios";

interface HomeData {
  data: {
    id: number;
    attributes: {
      header: string;
      sub_header: string;
      bottom_name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      description: string;
      app_store: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: null | string;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | string;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
      google_play: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: null | string;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | string;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
    };
  };
  meta: {}
}

export type HomeResponst = {
  result: HomeData;
};
export async function getHome(): Promise<HomeResponst> {
  const API_KEY = process.env.STRAPI_API_KEY;
  const API_BASE = process.env.STRAPI_API_BASE_URL;
  const result = await axios.get(`${API_BASE}/api/home`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      populate: "*",
    },
  });
  // console.log(result.data)
  return Promise.resolve({ result: result.data});
}
