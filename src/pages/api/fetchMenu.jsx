import MenuCategory from "@/components/menu/menucategory";
import MenuNavbar from "@/components/menu/menunavbar";
import { useCart } from "@/context/cartcontext";
import { fetchMenuCategories } from "@/lib/fetchMenu";
import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";

const FetchMenu = ({ initialData }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const { data: menuCategories, error } = useSWR(
    "menuCategoriesKey",
    fetchMenuCategories,
    {
      initialData,
      revalidateOnFocus: false,
    }
  );
  const { getItemCount, cart } = useCart();

  // Define an update function or provide the functionality needed
  const handleUpdate = (item) => {
    // Implement update logic (could be a state update or an API call)
    console.log("Update item:", item);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  if (error) return <div>Failed to load</div>;
  if (!menuCategories) return <div>Loading...</div>;

  console.log(cart);
  console.log(getItemCount()); // returns 0 ?

  return (
    <div>
      <MenuNavbar
        categories={menuCategories}
        onCategoryChange={handleCategoryChange}
        activeCategoryId={activeCategoryId}
      />
      <div className="container mx-auto p-4">
        <MenuCategory
          categories={menuCategories}
          onUpdate={handleUpdate}
          activeCategoryId={activeCategoryId}
        />
      </div>
      {getItemCount() > 0 && (
        <Link href="payment">
          <CartFooter />
        </Link>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const menuCategories = await fetchMenuCategories();
  return {
    props: {
      initialData: menuCategories,
    },
    revalidate: 600, // 10 minutes
  };
}

export default FetchMenu;
