import SearchInput from "@/components/searchInput"
import SearchInputAutoComplete from "@/components/searchInputAutocomplete"

export default function Page() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-gray-800 pt-16" data-id="3">Explore Artworks Near You</h1>
            <SearchInputAutoComplete />
        </div>
    )}