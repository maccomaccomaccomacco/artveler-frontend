"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

export function MultiSearch() {
  const [inputs, setInputs] = useState([{ id: 1, placeholder: "Gràcia Llatina, C/ de l'Or, 19, Gràcia, 08012" }]);

  const addInputField = () => {
    const newInput = {
      id: inputs.length + 1,
      placeholder: `New Address ${inputs.length + 1}`,
    };
    setInputs([...inputs, newInput]);
  };

  const deleteInputField = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  return (
    <div className="space-y-4">
        <div>
            <h3 className="text-lg font-semibold">Search Destination</h3>
            <div className="flex flex-col space-y-4">
            {inputs.map((input) => (
                <div key={input.id} className="group flex items-center space-x-2 relative">
                  <Input placeholder={input.placeholder} />
                  <button 
                      onClick={() => deleteInputField(input.id)}
                      className="absolute right-0 p-2 hidden group-hover:block">
                      <TrashIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
            ))}
            </div>

            <div className="flex items-center space-x-2 py-2">
                {/* Step 5: Attach event handler */}
                <CirclePlusIcon className="w-5 h-5 text-muted-foreground" onClick={addInputField} />
            </div>      
        </div>
    </div>
  );
}

function TrashIcon(props) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    )
}


function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function CirclePlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}