export default function OrderItem(item) {
  return (
    <div className="flex items-center justify-between my-2">
      <div className="flex items-center">
        <div className="flex flex-row m-2 rounded-full">
          <div className="ml-4">
            <h2 className="text-lg font-bold">{item.quantity}</h2>
            <h2 className="text-lg">{item.name}</h2>
          </div>
          <h3>{item.price}</h3>
        </div>
      </div>
    </div>
  );
}
