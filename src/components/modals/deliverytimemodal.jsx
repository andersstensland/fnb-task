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

const DeliveryTimeModal = ({ trigger }) => {
  // time function to get the current time

  const currentTime = getTime();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("asap");
  const [selectedTime, setSelectedTime] = useState({ currentTime });

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    if (name === "timeSelection") {
      setSelectedValue(value);
    } else if (name === "time") {
      setSelectedTime(value);
    }
  };

  return (
    <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delivery</AlertDialogTitle>
          <form className="max-w-[8.5rem] mx-auto mt-4">
            <Label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select time:
            </Label>
            <input
              type="time"
              id="time"
              name="time"
              className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min={getTime}
              max="22:00"
              value={selectedTime}
              onChange={handleValueChange}
              required
            />
          </form>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="text-black">Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeliveryTimeModal;
