const MenuItem = ({ item, onUpdate }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onUpdate(item.id, newCount);
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onUpdate(item.id, newCount);
    }
  };

  return (
    <div className="flex justify-between items-center my-2">
      <span className="text-lg">{item.name}</span>
      <div className="flex items-center">
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-2">{count}</span>
        <button
          className="px-2 py-1 bg-green-500 text-white rounded"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};
