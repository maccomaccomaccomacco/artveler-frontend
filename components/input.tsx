export default function Input({}) {
    return (
        <div className="inline-block relative z-[100]">
            <div className="absolute top-0 bottom-0 flex items-center left-5 text-black pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
            </div>
            <input
                aria-label="Search term"
                id="search-input"
                className="w-full md:w-[28rem] h-12 md:h-14 pl-[48px] shadow-sm border border-gray-300 placeholder-gray-500 appearance-none text-gray-900 font-medium rounded-full focus:outline-none focus:shadow-outline-red-500 focus:z-10 md:text-md"
                placeholder="Find a city or artist..."
                type="search"
                value=""
                name="query"/>
        </div>
    )
}