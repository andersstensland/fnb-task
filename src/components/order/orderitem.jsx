export default function OrderItem({ item, updateQuantity }) {
  return (
    <div className="flex w-full justify-between items-center my-2 p-2 border-b">
      <div className="flex flex-row items-center">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(parseInt(e.target.value))}
          className="w-12 text-center mr-2"
          min="1"
        />
        <h2>{item.name}</h2>
      </div>
      <div>
        <span>{(item.price * item.quantity).toFixed(2)}</span>
      </div>
    </div>
  );
}
