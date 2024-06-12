import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import getTime from "@/lib/getTime";
import { useCart } from "@/context/cartcontext";

const DeliveryTimeModal = ({ trigger }) => {
  const { updateDeliveryTime, deliveryTime } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // Handling time directly rather than through state, unless you need to manage it for other reasons
  const currentTime = getTime(); // Assuming this returns a string formatted as 'HH:MM'

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    updateDeliveryTime(newTime); // Update the delivery time in your cart context
  };

  return (
    <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Set Delivery Time</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="p-4">
          <Label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Time:
          </Label>
          <input
            type="time"
            id="time"
            className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={deliveryTime || currentTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel asChild onClick={() => setIsOpen(false)}>
            <Label className="cursor-pointer">Cancel</Label>
          </AlertDialogCancel>
          <AlertDialogAction asChild onClick={() => setIsOpen(false)}>
            <Label className="cursor-pointer text-black">Confirm</Label>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeliveryTimeModal;
