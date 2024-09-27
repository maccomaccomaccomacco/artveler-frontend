import React from 'react';
import Selector from "@/components/selector";

const Filters = ({ artistsResults, locationResults, handleSelectionChange }) => (
    <div className='w-1/6 mr-8 border-r border-gray-300 p-2 rounded-sm'>
        <div className='mb-4'>
            <span className="text-sm font-bold text-gray-800">Artists</span>
            <Selector inputs={artistsResults} onSelectionChange={(items) => handleSelectionChange(items, 'artist')} />
        </div>
        <div className='mb-4'>
            <span className="text-sm font-bold text-gray-800">Locations</span>
            <Selector inputs={locationResults} onSelectionChange={(items) => handleSelectionChange(items, 'location')} />
        </div>
    </div>
);

export default Filters;