import client from "@/app/sanity/client";

export function fetchMenuCategories() {
  const query = `
    *[_type == "menuCategory"] {
      _id,
      name,
      "subcategories": subcategories[]->{
        _id,
        name
      }
    }
  `;
  return client.fetch(query);
}
