import axios from "axios";

export async function fetchSingleTypePage(slug) {
  try {
    const response = await axios.get(
      `http://localhost:1337/pages?slug=${slug}`
    );
    const page = response.data[0]; // Assuming the slug is unique and returns only one page
    return page;
  } catch (error) {
    console.error(error);
    return null;
  }
}
