import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const ItineraryStop = ({ item, onRemove, onDrag, dragHandleProps }) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;
  return (
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-id="2" data-v0-t="card"><div class="p-0" data-id="3"><div class="flex items-start space-x-4 p-4" data-id="4"><img data-id="5" src="/placeholder.svg" width="80" height="80" alt="Aguada Fort" class="rounded-lg" style="aspect-ratio: 80 / 80; object-fit: cover;"><div class="flex-1" data-id="6"><h2 class="text-xl font-semibold" data-id="7">Aguada Fort</h2><p class="text-sm text-muted-foreground" data-id="8">1612 Portuguese fortress offering ocean views &amp; an abandoned lighthouse erected in 1864.</p><div class="flex items-center mt-2 text-sm" data-id="9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-4 h-4 mr-1" data-id="10"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span data-id="11">8:00 AM → 9:30 AM</span><span class="mx-2" data-id="12">•</span><span data-id="13">Free</span></div></div></div><div class="border-t px-4 py-2 flex items-center text-sm text-muted-foreground" data-id="14"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bus w-4 h-4 mr-2" data-id="15"><path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="16" cy="18" r="2"></circle></svg><span data-id="16">10 - 12 min</span><span class="mx-2" data-id="17">~</span><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline p-0 h-auto" data-id="18">Directions</button></div></div></div>
  );
};

export default ItineraryStop;