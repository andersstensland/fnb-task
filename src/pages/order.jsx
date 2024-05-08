import MenuItem from "@/components/menu/menuitem";

export default function Order() {
  return (
    <>
      <h2>Din bestilling</h2>

      <div className="flex flex-row justify-between p-2">
        <h4>Product</h4>
        <h4>Price (NOK)</h4>
        <MenuItem
          item={{
            name: "Spring Rolls",
            price: 59,
          }}
        />
        // total sum of order
        <div className="flex flex-row justify-between p-2">
          <h4>Total inkl. MVA</h4>
          <h4>268,00</h4>
        </div>
        <Button variant="outline" className="bg-orange-300 font-bold w-full">
          <Link href="/payment">Go to payment</Link>
        </Button>
      </div>
    </>
  );
}
