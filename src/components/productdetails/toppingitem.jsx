import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const ToppingItem = ({ item, topping, onToggle, isSelected, cost }) => {
  return (
    <div className="flex flex-col justify-between py-2">
      {Object.keys(item.content).map((toppingKey) => (
        <div key={toppingKey} className="flex justify-between">
          <Label
            key={toppingKey}
            className="flex justify-between items-center rounded-md"
            onChange={() => toggleTopping({ name: toppingKey, cost: 10 })}
          >
            {toppingKey}
          </Label>
          <Checkbox id="terms" className="mt-2" />
        </div>
      ))}
    </div>
  );
};

export default ToppingItem;
