import Image from 'next/image'
import Map from '@/components/map'

export default function MapPage() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-between">
            {/* <div className='sm:rounded-lg z-50 transition-all bg-white relative sm:fixed sm:top-4 sm:bottom-4 sm:left-4 shadow-xl sm:overflow-y-auto transition-all w-full sm:w-96'>
                <header className="p-5 lg:p-6  mb-12 bg-cover">
                    <div className="mb-4 text-red-500 flex justify-between items-start"></div>
                    <h1
                        className="text-lg flex items-center font-heading font-semibold mb-1 mt-8 text-gray-800">Welcome
                    </h1>
                    <p className="mb-4 leading-normal text-sm text-gray-600">Let us show you around this awesome place with its street art masterpieces.</p>
                    <div className="-mb-10 flex items-center">
                        <div className="flex flex-wrap">
                            <a
                                href="https://streetartcities.com/users/196f59ba-dba2-4f1f-8070-69f8d1ff7b63">
                                <img
                                    src="https://streetartcities.com/media/d/dce6074e-8e37-43f8-8a65-9da77fe07303/512.jpg"
                                    alt="World Street Art Hunter"
                                    className="w-10 h-10 bg-gray-200 object-cover rounded-full inline-block m-1"/>
                            </a>
                            <a
                                href="https://streetartcities.com/users/3e1353ce-21b7-4969-951f-a23278c48e22">
                                <img
                                    src="https://streetartcities.com/media/c/c0c43439-ea17-4842-af18-9d589f2fa894/512.jpg"
                                    alt="Jen Brown"
                                    className="w-10 h-10 bg-gray-200 object-cover rounded-full inline-block m-1"/>
                            </a>
                            <a
                                href="https://streetartcities.com/users/4890a07d-1a28-4ac6-b66a-a22cb36c8a9a">
                                <img
                                    src="https://streetartcities.com/media/c/c9b01ab8-965b-43ec-a777-392883199e55/orig.jpg"
                                    alt="Virusfreak79"
                                    className="w-10 h-10 bg-gray-200 object-cover rounded-full inline-block m-1"/>
                            </a>
                            <a
                                href="https://streetartcities.com/users/5c4aca86-0978-4a7a-9fd6-80a7dc17f686">
                                <img
                                    src="https://streetartcities.com/media/7/7cc54f1e-99dc-4999-98dc-8509720ebc5d/orig.jpg"
                                    alt="Andrew Haysom"
                                    className="w-10 h-10 bg-gray-200 object-cover rounded-full inline-block m-1"/>
                            </a>
                            <a
                                href="https://streetartcities.com/users/5fb1738b-a60a-45af-8397-a924b8d31fe8">
                                <img
                                    src="https://streetartcities.com/media/b/b11831cb-5745-4936-8942-6521cdd409b3/orig.png"
                                    alt="Matthew Slocum"
                                    className="w-10 h-10 bg-gray-200 object-cover rounded-full inline-block m-1"/>
                            </a>
                            <a
                                href="https://streetartcities.com/users/796fbf05-248d-4b5a-be11-438145fda245">
                                <img
                                    src="https://streetartcities.com/media/1/133edd0f-cadc-493a-a402-edc8c950821f/orig.jpg"
                                    alt="Lou Chamberlin"
                                    className="w-10 h-10 bg-gray-200 object-cover rounded-full inline-block m-1"/>
                            </a>
                        </div>
                    </div>
                </header>
                <div className="p-5 pt-0">
                    <h2 className="text-gray-500 text-sm font-semibold mb-2">Explore the city</h2>
                    <a
                        className="inline-flex justify-center items-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition cursor-pointer px-4 py-2 text-sm shadow-sm text-white bg-red-500 hover:bg-red-600 mr-2"
                        href="/cities/melbourne/artworks">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-search inline-block mr-2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>Artworks</a>
                    <a
                        className="inline-flex justify-center items-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition cursor-pointer px-4 py-2 text-sm shadow-sm text-white bg-red-500 hover:bg-red-600"
                        href="/cities/melbourne/routes">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-map inline-block mr-2">
                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                            <line x1="9" x2="9" y1="3" y2="18"></line>
                            <line x1="15" x2="15" y1="6" y2="21"></line>
                        </svg>Routes</a>
                </div>
            </div> */}
            <Map
                places={[
                {
                    location: [
                        40.8518, 14.2681
                    ],
                    description: "Naples"
                }, {
                    location: [
                        40.8518, 14.2681
                    ],
                    description: "Naples"
                }
            ]}/>

        </div>
    )
}
