import Link from 'next/link'
import { Input } from "@/components/ui/input"

export default function Header({}) {
    return (
        <header className="flex items-center justify-between p-4 border-b border-solid  border-gray-200">
            <div className="flex items-center space-x-4">
              <MenuIcon className="w-6 h-6" />
              <h1 className="text-2xl font-bold">Artveler.</h1>
            </div>
            {/* <div className="relative w-1/3">
              <Input type="search" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border rounded-full" />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div> */}
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