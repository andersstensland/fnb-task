// pages/api/menu.js

import client from "../../lib/sanity";

export default async function handler(req, res) {
  try {
    // Construct a query to fetch menu categories, including subcategories and items
    const query = `
      *[_type == "menuCategory"]{
        name,
        "subcategories": subcategories[]->{
          name,
          "items": items[]->{
            name,
            price,
            description
          }
        }
      }
    `;

    // Fetch data from Sanity
    const menuData = await client.fetch(query);

    // Send the fetched data as a JSON response
    res.status(200).json(menuData);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
}
