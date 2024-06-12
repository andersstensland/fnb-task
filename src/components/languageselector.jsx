import React from "react";
import { Label } from "@/components/ui/label";

const LanguageSelector = ({ onChange, currentLanguage }) => {
  return (
    <div className="flex justify-between my-2 items-center w-full">
      <Label
        htmlFor="language-select"
        className="mb-2 text-md font-medium text-gray-900 w-full dark:text-white"
      >
        Select Language
      </Label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="en">English</option>
        <option value="nb">Norsk Bokmål</option>
        <option value="nn">Nynorsk</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
