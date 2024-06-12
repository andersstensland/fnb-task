import MenuCategory from "@/components/menu/menucategory";
import MenuNavbar from "@/components/menu/menunavbar";
import { fetchMenuCategories } from "@/lib/fetchMenu";
import TopBar from "@/components/menu/topbar";
import { useState } from "react";
import useSWR from "swr";

const FetchMenu = ({ initialData }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(
    "219dfd47-f704-4d59-b1b2-94cf4fc42871"
  );
  const [language, setLanguage] = useState("en");
  const { data: menuCategories, error } = useSWR(
    ["menuCategoriesKey", language], // Include language in the SWR key
    () => fetchMenuCategories(language),
    { fallbackData: initialData, revalidateOnFocus: false }
  );

  const handleLanguageChange = (newLanguage) => {
    console.log("Language changed to", newLanguage);
    setLanguage(newLanguage);
  };

  console.log("Menu categories in", language, ":", menuCategories);
  return (
    <div>
      <TopBar onLanguageChange={handleLanguageChange} />
      <MenuNavbar
        categories={menuCategories}
        onCategoryChange={setActiveCategoryId}
        activeCategoryId={activeCategoryId}
      />
      <div className="container mx-auto p-4 bg-gray-50 pb-12">
        <MenuCategory
          categories={menuCategories}
          language={language}
          onUpdate={() => {}}
          activeCategoryId={activeCategoryId}
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const menuCategories = await fetchMenuCategories(language);
  return {
    props: {
      initialData: menuCategories,
    },
    revalidate: 600, // 10 minutes
  };
}

export default FetchMenu;
