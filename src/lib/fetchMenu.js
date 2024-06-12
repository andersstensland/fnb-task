import client from "@/app/sanity/client";

export function fetchMenuCategories(language) {
  const query = `
    *[_type == "menuCategory"] | order(order asc) {
      _id,
      order,
      "name": name.${language},
      "subcategories": subcategories[]->{
        _id,
        "name": name.${language},
        "items": items[]->{
          _id,
          "name": name.${language},
          "description": description.${language},
          price,
          allergies,
          "toppings": toppings[] {
            "name": name,
            cost
          },
          "imageAsset": imageAsset->{
            _id,
            "title": title.${language},
            "description": description.${language},
            "image": {
              "asset": image.asset->{
                _id,
                url
              },
              "caption": caption.${language},
              "alt": alt.${language}
            }
          }
        },
        toppings
      }
    }
  `;
  return client.fetch(query, { params: { language } });
}
