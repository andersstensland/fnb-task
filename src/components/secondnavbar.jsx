import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SecondNavbar() {
  return (
    <nav className="w-full bg-gray-200 p-2">
      <ul className="flex justify-between items-center">
        <li className="w-full h-full font-bold flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Delivery 25 - 35 min
        </li>
        <li className="text-white w-1/3">
          <AlertDialog>
            <AlertDialogTrigger>
              <div className="bg-orange-300 p-2 rounded-md text-black font-bold">
                Change
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delivery</AlertDialogTitle>
                <AlertDialogDescription>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">As soon as possible</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">
                        Choose time for pre-order
                      </Label>
                    </div>
                  </RadioGroup>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
      </ul>
    </nav>
  );
}
