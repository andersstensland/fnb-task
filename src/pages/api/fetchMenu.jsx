import MenuCategory from "@/components/menu/menucategory";
import MenuNavbar from "@/components/menu/menunavbar";
import { fetchLanguages } from "@/lib/fetchLanguages";
import { fetchMenuCategories } from "@/lib/fetchMenu";
import { useState } from "react";
import useSWR from "swr";
import LanguageSelector from "@/components/languageselector"; // Create this component if not already existent

const FetchMenu = ({ initialData, languages }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [language, setLanguage] = useState("en");
  const { data: menuCategories, error } = useSWR(
    "menuCategoriesKey",
    () => fetchMenuCategories(language),
    { initialData, revalidateOnFocus: false }
  );

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <MenuNavbar
        categories={menuCategories}
        onCategoryChange={setActiveCategoryId}
        activeCategoryId={activeCategoryId}
      />
      {/*

  */}
      <div className="container mx-auto p-4">
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
  const menuCategories = await fetchMenuCategories();
  return {
    props: {
      initialData: menuCategories,
    },
    revalidate: 600, // 10 minutes
  };
}

export default FetchMenu;
