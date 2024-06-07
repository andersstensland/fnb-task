import PaymentMethodModal from "@/components/modals/paymentmethodmodal";
import Navbar from "@/components/navbar";
import DeliveryModal from "@/components/payment/deliverymodal";
import OrderSummary from "@/components/payment/ordersummary";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/cartcontext";
import { Textarea } from "@/components/ui/textarea";

export default function Payment() {
  const { cart, updateQuantity, getTotalPrice, setDeliveryCost } = useCart();

  const handleOptionClick = (option) => {
    const cost = option === "delivery" ? 50 : 0;
    setDeliveryCost(cost);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen px-4 w-full">
        <PaymentMethodModal />
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-xl font-bold my-4 text-center">Order Summary</h1>

          <div className="w-full mb-4">
            <Label className="block text-sm font-bold mb-2">Delivery</Label>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">
                  As soon as possible (25-35min)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Choose time to pre-order</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="w-full mb-4">
            <Label className="block text-sm font-bold mb-2">Payment</Label>
            <div className="w-full mb-4">
              <Label className="block text-sm font-bold mb-2">
                Choose where you want to eat!
              </Label>
              <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4">
                <Button
                  className="bg-white text-black w-full md:w-40 px-8 py-4 text-xl font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent"
                  onClick={() => handleOptionClick("delivery")}
                >
                  Delivery
                </Button>
                <DeliveryModal
                  trigger={
                    <Button className="bg-white text-black w-full mt-3 md:w-40 px-8 py-4 text-xl font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent">
                      Pick up
                    </Button>
                  }
                  handleOptionClick={handleOptionClick} // Pass the callback function
                />
              </div>
            </div>

            <OrderSummary />

            <div className="w-full mb-4">
              <Label className="block text-sm font-bold mb-2" htmlFor="message">
                Leave a message (optional)
              </Label>
              <Textarea
                id="message"
                className="w-full h-24 p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm"
                value={""}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
              />
            </div>

            {/* Pass deliveryOption, deliveryCost, and items to Paymentsummary */}
          </div>
        </div>
      </div>
    </>
  );
}
