import client from "@/app/sanity/client";
import { getUserId } from "/sessionStorage";

export async function addToCart(productId) {
  const userId = getUserId();
  const query = `*[_type == "cart" && userId == $userId][0]`;
  const cart = await client.fetch(query, { userId });

  if (cart) {
    // Cart exists, update items array
    await client
      .patch(cart._id)
      .setIfMissing({ items: [] })
      .insert("after", "items[-1]", [
        {
          _key: `${productId}-${new Date().toISOString()}`, // Unique key for array item
          _ref: productId,
        },
      ])
      .commit();
  } else {
    // No cart exists, create new document
    await client.create({
      _type: "cart",
      userId,
      items: [
        {
          _key: `${productId}-${new Date().toISOString()}`,
          _ref: productId,
        },
      ],
    });
  }
}
