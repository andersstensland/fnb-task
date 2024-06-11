import client from "@/app/sanity/client";

export async function fetchLanguages() {
  const query = `*[_type == "language"]{ id, title }`;
  return await client.fetch(query);
}
