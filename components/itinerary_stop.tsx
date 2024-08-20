import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const ItineraryStop = ({ item, onRemove, onDrag, dragHandleProps }) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;
    return (
        <div className='flex flex-col' style={{ 'marginBottom': '-10px' }}>
            <div className="group">
                <div className='flex w-full gap-1'>
                    <div className='w-full'>
                        <div className='cursor-pointer gap-3 border-solid border-gray-200 bg-gray-50 p-3 transition-all hover:border-gray-300 md:flex md:hover:bg-gray-100 rounded-md border'>
                            <button className='group/image relative float-left mb-1 mr-2 h-[60px] min-w-[60px] overflow-hidden rounded-lg bg-cover bg-center object-cover shadow-md md:float-none md:!m-0 md:h-[68px] md:min-w-[68px]'>
                                <img className='h-full w-full overflow-hidden rounded-lg object-cover' src={item.artworkImg} />
                            </button>
                            <div>
                                <span className='text-sm line-clamp-1 w-fit cursor-pointer md:hover:underline'>{item.artist}</span>
                                <span className='text-md line-clamp-1 w-fit cursor-pointer md:hover:underline'>{item.title}</span>
                                <span style={{ fontSize: '14px' }}><LocationOnIcon sx={{ fontSize: 16, marginTop: '-2px', marginRight: '-2px' }} /> {item.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col group'>
                        <button className='opacity-0 mt-2 pt-2 group-hover:opacity-100' onClick={() => onRemove(item)}><DeleteIcon fontSize='small' sx={{ color: 'rgb(180,180,180)' }} /></button>
                        <button
                            onTouchStart={(e) => {
                                e.preventDefault();
                                console.log("touchStart");
                                e.target.style.backgroundColor = "blue";
                                document.body.style.overflow = "hidden";
                                onTouchStart(e);
                            }}
                            onMouseDown={(e) => {
                                console.log("mouseDown");
                                document.body.style.overflow = "hidden";
                                onMouseDown(e);
                            }}
                            onTouchEnd={(e) => {
                                e.target.style.backgroundColor = "black";
                                document.body.style.overflow = "visible";
                            }}
                            onMouseUp={() => {
                                document.body.style.overflow = "visible";
                            }}
                            className='opacity-0 pt-2 group-hover:opacity-100'><DragIndicatorIcon fontSize='small' sx={{ color: 'rgb(180,180,180)' }} /></button>
                    </div>
                </div>
            </div>
            <div className='group relative flex items-center'>
                <div className='mx-5 flex flex-row items-center border-l-2 border-solid border-gray-200 py-4 pl-5 text-[12px] md:mx-6 md:text-sm border-solid'></div>
            </div>
        </div>
    );
};

export default ItineraryStop;