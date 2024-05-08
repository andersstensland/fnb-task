import MenuItem from "./menuitem";
const MenuCategory = ({ category, onUpdate }) => {
  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
      {category.items.map((item) => (
        <MenuItem key={item.id} item={item} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default MenuCategory;
