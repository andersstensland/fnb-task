export default function OrderItem({ item }) {
  return (
    <div className="flex w-full">
      <div className="flex flex-row items-center justify-between m-4">
        <div className="flex flex-row items-center">
          <h2 className="mr-2">{item.quantity}</h2>
          <h2>{item.name}</h2>
        </div>
        <div>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
  );
}
