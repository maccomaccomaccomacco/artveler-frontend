'use client'

import React from 'react'
import { Search } from "lucide-react"
import { Autocomplete, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'


// const useStyles = makeStyles({
//     '& .MuiInputBase-root': {
//         height: '2.5rem', // h-10
//     },
//     '& .MuiInputBase-input': {
//       display: 'flex',
//       border: '100px solid #d1d5db', // border-input
//       paddingLeft: '0.75rem', // px-3
//       paddingRight: '0.75rem', // px-3
//       fontSize: '0.875rem', // text-sm
//       outlineOffset: '2px', // ring-offset-background
//       '&::file-selector-button': {
//         border: '0', // file:border-0
//         backgroundColor: 'transparent', // file:bg-transparent
//         fontSize: '0.875rem', // file:text-sm
//         fontWeight: '500', // file:font-medium
//       },
//       '&::placeholder': {
//         color: '#9ca3af', // placeholder:text-muted-foreground
//       },
//       '&:focus-visible': {
//         outline: 'none', // focus-visible:outline-none
//         ring: '2px solid #3b82f6', // focus-visible:ring-2 focus-visible:ring-ring
//         outlineOffset: '2px', // focus-visible:ring-offset-2
//       },
//       '&:disabled': {
//         cursor: 'not-allowed', // disabled:cursor-not-allowed
//         opacity: '0.5', // disabled:opacity-50
//       },
//       width: '100%', // w-full
//       paddingLeft: '1rem', // pl-4
//       paddingRight: '3rem', // pr-12
//       paddingTop: '0.75rem', // py-3
//       paddingBottom: '0.75rem', // py-3
//       color: '#374151', // text-gray-700
//       backgroundColor: '#ffffff', // bg-white
//       borderRadius: '0.5rem', // rounded-lg
//       '&:focus': {
//         outline: 'none', // focus:outline-none
//         ring: '2px solid #3b82f6', // focus:ring-2 focus:ring-blue-400
//       },
//     },
//   });

const locations = [
    { title: 'Aguada Fort', type: 'Historical Site' },
    { title: 'Sinquerim Beach', type: 'Beach' },
    { title: 'Basilica of Bom Jesus', type: 'Religious Site' },
    { title: 'Dudhsagar Falls', type: 'Natural Attraction' },
    { title: 'Chapora Fort', type: 'Historical Site' },
]

export default function PlaceSearchAutocompleteSelect() {
    const classes = useStyles();

    return (
        <div className="relative mt-12">
           <Autocomplete
                sx={{
                    height: '2.5rem', // h-10,
                    '& .MuiInputBase-root': {
                        height: '2.5rem', // h-10
                        fontSize: '0.875rem', // text-sm
                        lineHeight: '1.25rem',
                        borderRadius: '0.5rem', // rounded-lg
                        color: 'rgb(55,65,81)', // text-gray-700
                        '&::placeholder': {
                          color: 'rgb(228, 228, 8)', // placeholder:text-muted-foreground
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgb(228, 228, 228)', // border-input
                    }
                }}
                freeSolo
                options={locations}
                getOptionLabel={(option) => typeof option === 'string' ? option : option.title}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    placeholder="Enter an address to find nearby artworks"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {params.InputProps.endAdornment}
                          <Search className="h-6 w-6 text-gray-400 mr-3 cursor-pointer" />
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
            />
        </div>
    )
}