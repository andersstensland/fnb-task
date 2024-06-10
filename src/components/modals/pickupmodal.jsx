import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogTrigger,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function PickupModal() {
  const [selectedPickupLocation, setSelectedPickupLocation] = useState(null);

  const handleSelectPickupLocation = (location) => {
    setSelectedPickupLocation(location); // Set the selected location
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white text-black w-full md:w-40 px-8 py-4 text-xl font-semibold border-2 border-orange-300 rounded-lg focus:bg-orange-300 focus:text-white focus:border-transparent"
        >
          Select Pickup Location
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select Your Pickup Point</AlertDialogTitle>
        </AlertDialogHeader>
        {["Location A", "Location B", "Location C"].map((location) => (
          <div
            key={location}
            className="flex items-center justify-between space-x-4 p-4 rounded-lg bg-white shadow-md cursor-pointer"
            onClick={() => handleSelectPickupLocation(location)}
          >
            <Label className="text-base font-semibold">{location}</Label>
            <input
              type="radio"
              name="pickup-point"
              checked={selectedPickupLocation === location}
              onChange={() => handleSelectPickupLocation(location)}
            />
          </div>
        ))}
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="ghost">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="solid">Confirm</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}