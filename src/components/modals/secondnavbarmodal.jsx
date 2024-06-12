import React, { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/cartcontext";

const SecondNavbarModal = () => {
  const { updateDeliveryTime, deliveryTime } = useCart();
  const [selectedValue, setSelectedValue] = useState("asap"); // Default to ASAP
  const [selectedTime, setSelectedTime] = useState(""); // State for storing the selected time

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    if (value === "asap") {
      updateDeliveryTime("As soon as possible");
    }
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    if (selectedValue === "pre-order") {
      updateDeliveryTime(newTime);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="bg-orange-300 p-2 rounded-md text-black font-bold mr-2 cursor-pointer">
          Change
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delivery</AlertDialogTitle>
          <RadioGroup onValueChange={handleRadioChange} value={selectedValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asap" id="asap" />
              <Label htmlFor="asap">As soon as possible</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pre-order" id="pre-order" />
              <Label htmlFor="pre-order">Choose time for pre-order</Label>
            </div>
          </RadioGroup>
          {selectedValue === "pre-order" && (
            <form className="max-w-[8.5rem] mx-auto mt-4">
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select time:
              </label>
              <input
                type="time"
                id="time"
                className="rounded-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                min="09:00"
                max="18:00"
                value={deliveryTime || selectedTime}
                onChange={handleTimeChange}
                required
              />
            </form>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SecondNavbarModal;
