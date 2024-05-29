import { fetchMenuCategories } from "@/lib/fetchMenu";
import useSWR from "swr";

const FetchMenu = ({ initialData }) => {
  const { data: menuCategories, error } = useSWR(
    "menuCategoriesKey",
    fetchMenuCategories,
    {
      initialData,
      revalidateOnFocus: false, // Set true if you want to re-fetch when window gains focus
    }
  );

  if (error) return <div>Failed to load</div>;
  if (!menuCategories) return <div>Loading...</div>;

  return (
    <div>
      <h1>Menu Categories</h1>
      {menuCategories.map((category) => (
        <div key={category._id}>
          <h2>{category.name}</h2>
          <ul>
            {category.subcategories &&
              category.subcategories.map((sub) => (
                <li key={sub._id}>{sub.name || "Untitled"}</li>
              ))}
          </ul>
        </div>
      ))}
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
