/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/b4SlIylOQj5
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MultiSearch  } from "./ui/multi_search"

export function Component() {
  return (
    <div className="p-4">
      {/* <div className="flex justify-between items-center py-4">
        <p className="text-md">
          Showing <span className="font-bold">1 - 20</span> out of 2356 Products
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-md">Sort By:</span>
          <Select>
            <SelectTrigger id="sort" aria-label="Sort By">
              <SelectValue placeholder="Recently Listed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recently-listed">Recently Listed</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <aside className="w-full md:w-1/4">
          <h2 className="text-xl font-bold mb-4">FILTER</h2>
          <MultiSearch />
        </aside>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="relative">
              <img src="/placeholder.svg" alt="Boat" className="w-full h-48 object-cover rounded-t-md" />
              <HeartIcon className="absolute top-2 right-2 w-6 h-6 text-white" />
            </div>
            <CardContent>
              <p className="text-sm font-medium">3 - 8 hours • No Captain</p>
              <p className="text-sm">Perfect set up for Lake Union cruising.</p>
              <p className="text-sm text-muted-foreground">Santa Maria, Milazzo</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-bold">$260 avg/day</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarHalfIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">(12)</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <div className="relative">
              <img src="/placeholder.svg" alt="Boat" className="w-full h-48 object-cover rounded-t-md" />
              <HeartIcon className="absolute top-2 right-2 w-6 h-6 text-white" />
            </div>
            <CardContent>
              <p className="text-sm font-medium">4 - 7 hours • No Captain</p>
              <p className="text-sm">Smooth Sailing for Lake Union cruising.</p>
              <p className="text-sm text-muted-foreground">Kraig Pike</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-bold">$230 avg/day</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarHalfIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">(11)</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <div className="relative">
              <img src="/placeholder.svg" alt="Boat" className="w-full h-48 object-cover rounded-t-md" />
              <HeartIcon className="absolute top-2 right-2 w-6 h-6 text-white" />
            </div>
            <CardContent>
              <p className="text-sm font-medium">3 - 8 hours • Captain</p>
              <p className="text-sm">Adventurer's Cove Lake Union cruising.</p>
              <p className="text-sm text-muted-foreground">Sydnee Unions</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-bold">$290 avg/day</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <StarHalfIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">(09)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}





function StarHalfIcon(props) {
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
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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