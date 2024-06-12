import React, { useState } from "react";
import useSWR from "swr";
import MenuCategory from "@/components/menu/menucategory";
import MenuNavbar from "@/components/menu/menunavbar";
import TopBar from "@/components/menu/topbar";
import useSyncedState from "@/hooks/useSyncedState";
import { fetchMenuCategories } from "@/lib/fetchMenu";

const FetchMenu = ({ initialData }) => {
  const [activeCategoryId, setActiveCategoryId] = useSyncedState(
    "activeCategoryId",
    "c9fde139-3dba-491e-92be-5f473c62202b"
  );
  const [language, setLanguage] = useSyncedState("language", "en");

  const { data: menuCategories, error } = useSWR(
    ["menuCategoriesKey", language],
    () => fetchMenuCategories(language),
    { fallbackData: initialData, revalidateOnFocus: false }
  );

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleCategoryChange = (newCategoryId) => {
    setActiveCategoryId(newCategoryId);
  };

  return (
    <div>
      <TopBar
        onLanguageChange={handleLanguageChange}
        currentLanguage={language}
      />
      <MenuNavbar
        categories={menuCategories}
        onCategoryChange={handleCategoryChange}
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
  // Fetch initial data in a default language, as localStorage isn't accessible here
  const menuCategories = await fetchMenuCategories("en");
  return {
    props: {
      initialData: menuCategories,
    },
    revalidate: 600, // Define a revalidation time if needed
  };
}

export default FetchMenu;
