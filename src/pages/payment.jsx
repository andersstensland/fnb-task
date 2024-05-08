import Navbar from "@/components/navbar";
import SecondNavbar from "@/components/secondnavbar";
import "@/styles/globals.css";

export default function Payment() {
  return (
    <>
      <Navbar />
      <SecondNavbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Payment</h1>
        <p className="text-lg">Please enter your payment information.</p>

        <div>
          <h5>Delivery</h5>
          <h5>ASAP 20-30 minutes</h5>
          <span>Endre</span>
        </div>
      </div>
    </>
  );
}
