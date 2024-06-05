import { fetchMenuCategories } from "@/lib/fetchMenu";
import useSWR from "swr";
import MenuNavbar from "@/components/menu/menunavbar";
import MenuCategory from "@/components/menu/menucategory";
import { useState } from "react";
import "@/styles/globals.css";

const FetchMenu = ({ initialData }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const { data: menuCategories, error } = useSWR(
    "menuCategoriesKey",
    fetchMenuCategories,
    {
      initialData,
      revalidateOnFocus: false,
    }
  );

  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  if (error) return <div>Failed to load</div>;
  if (!menuCategories) return <div>Loading...</div>;

  return (
    <div>
      <MenuNavbar
        categories={menuCategories}
        onCategoryChange={handleCategoryChange}
      />
      <div className="container mx-auto p-4">
        <MenuCategory categories={menuCategories} />
      </div>
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
