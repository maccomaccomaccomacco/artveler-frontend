import Link from 'next/link'
import { Input } from "@/components/ui/input"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function Header({}) {
    return (
        <header className="fixed top-0 flex w-full items-center justify-center  border-b border-gray-200 bg-white shadow-sm z-50 transition-all">
          <div className='mx-5 flex h-14 w-full items-center justify-between md:h-16'>
            <div className="flex items-center space-x-4">
              <MenuIcon className="w-6 h-6" />
              <h1 className="text-2xl font-bold">Artveler.</h1>
            </div>
            <div className="flex">
              <Link className=" cursor-pointer rounded-lg px-3 py-1.5 text-gray-700 transition-colors hover:bg-gray-100 hidden md:block text-sm font-semibold" href="/explore">Explore</Link>
              <a className=" cursor-pointer rounded-lg px-3 py-1.5 text-gray-700 transition-colors hover:bg-gray-100 hidden md:block text-sm font-semibold" href="/public-trips">Collections</a>
              <Link className=" cursor-pointer rounded-lg px-3 py-1.5 text-gray-700 transition-colors hover:bg-gray-100 hidden md:block text-sm font-semibold" href="/itinerary">Itinerary</Link>
              <div className="flex items-center">
                {/* <span className='px-8 border-r-2'>|</span>
                <span className="cursor-pointer rounded-lg px-3 py-1.5 text-gray-700 transition-colors hover:bg-gray-100 hidden md:block text-sm font-semibold" data-id="12">Jane Doe</span>
                <span className="relative flex shrink-0 overflow-hidden rounded-full" data-id="13">
                  <img className="aspect-square h-4 w-4 bg-black " data-id="14" alt="Jane Doe" src="" />
                </span> */}

                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
            {/* <div className="relative w-1/3">
              <Input type="search" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border rounded-full" />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div> */}
          </div>
      </header>
    )
}


function MenuIcon(props) {
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  

function SearchIcon(props) {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }