import client from "@/app/sanity/client";

export function fetchMenuCategories() {
  const query = `
  *[_type == "menuCategory"] {
    _id,
    name,
    "subcategories": subcategories[]->{
      _id,
      name,
      description,
      "items": items[]->{
        _id,
        name,
        description
      }
    }
  }
  `;
  return client.fetch(query);
}
