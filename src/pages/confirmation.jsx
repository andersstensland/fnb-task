import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";

export default function Confirmation() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">
          Thank you for your ordering with us!
        </h1>
        <p className="text-lg">
          The order have been received and will be produced as soon as possible.
        </p>

        <Button variant="outline" className="bg-gray-300 font-bold w-full">
          <Link href="/orderhistory">Order history</Link>
        </Button>
        <Button variant="outline" className="bg-orange-300 font-bold w-full">
          <Link href="/menu">See the menu</Link>
        </Button>
      </div>
    </>
  );
}
