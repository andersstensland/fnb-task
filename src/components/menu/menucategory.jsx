import MenuItem from "./menuitem";

const MenuCategory = ({ category, onUpdate }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
      {category.subcategories.map((subcategory) => (
        <div key={subcategory.id} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{subcategory.name}</h3>
          {subcategory.items.map((item) => (
            <MenuItem key={item.id} item={item} onUpdate={onUpdate} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;
