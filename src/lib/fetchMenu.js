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
        "imageAsset": imageAsset->{
          _id,
          title,
          description,
          "image": {
            "asset": image.asset->{
              _id,
              url
            },
          caption,
          alt
          }
        }
      }
    }
  }
  `;
  return client.fetch(query);
}
