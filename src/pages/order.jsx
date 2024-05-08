import MenuItem from "@/components/menu/menuitem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import SecondNavbar from "@/components/secondnavbar";
import OrderItem from "@/components/order/orderitem";

export default function Order() {
  return (
    <div>
      <Navbar />
      <SecondNavbar />
      <div className="flex flex-col p-4 justify-between">
        <div>
          <h2 className="text-xl font-bold my-4">Din bestilling</h2>

          <div>
            <div className="flex flex-row justify-between">
              <h4>Product</h4>
              <h4>Price (NOK)</h4>
            </div>

            <div className="w-full">
              <OrderItem
                item={{
                  name: "Spring Rolls",
                  price: 59,
                  quantity: 1,
                }}
              />
            </div>
            <div className="flex justify-between">
              <h4 className="font-bold">Total inkl. MVA</h4>
              <h4>268,00</h4>
            </div>
          </div>
        </div>
        <Button variant="outline" className="bg-orange-300 font-bold w-full">
          <Link href="/payment">Go to payment</Link>
        </Button>
      </div>
    </div>
  );
}
