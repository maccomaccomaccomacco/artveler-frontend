import React, { useState, useEffect } from 'react';

export default function Selector({ inputs, onSelectionChange }) {
    const [selectedItems, setSelectedItems] = useState(inputs);
  
    const handleCheckboxChange = (elem) => {
      setSelectedItems((prevSelected) =>
        prevSelected.includes(elem)
          ? prevSelected.filter((a) => a !== elem)
          : [...prevSelected, elem]
      );
    };

    useEffect(() => {
        onSelectionChange(selectedItems);
    }, [selectedItems]);

    return (
        <div className="max-h-48 overflow-y-auto ">
          {inputs.map((elem) => (
            <div key={elem.value} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={elem.value}
                checked={selectedItems.includes(elem)}
                onChange={() => handleCheckboxChange(elem)}
                className="mr-2"
              />
              <label htmlFor={elem.value} className="text-sm">{elem.label}</label>
            </div>
          ))}
        </div>
    )
}