const baseUrl: string = process.env.STRAPI_API_BASE_URL!;
console.log("in");
async function fetchQuery(
  path: string,
  params: string | null = null
): Promise<any> {
  let url;
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`;
  } else {
    url = `${baseUrl}/${path}`;
  }
  const response = await fetch(`${url}`);
  const data = await response.json();
  console.log("path" + url);
  console.log("data" + data);
  return data;
}

export { baseUrl, fetchQuery };
