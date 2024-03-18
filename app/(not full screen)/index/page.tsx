import Image from 'next/image'
import Map from '@/components/map'
import Link from 'next/link'

import Title from '@/components/title'
import Input from '@/components/input'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-14">
                        <div
                            className="max-w-4xl mx-auto px-4 py-18 md:pb-20 md:pt-10 w-full text-center">
                            <Title text="Collabora ai progetti che valorizzano la tua comunità e i luoghi in cui vivi"></Title>
                            {/* <div className="mt-2 md:mt-12">
                                <div className="inline-block relative">
                                    <Input />
                                </div>
                            </div> */}
                            {/* <Link
                                className="inline-block px-4 py-2 mt-2 font-medium text-red-500 hover:text-red-800 transition"
                                href="/cities">Browse all cities →</Link> */}
                        </div>
                        <section
                            className="max-w-6xl mx-auto px-6 py-8 md:py-16 w-full -mt-8 md:-mt-20">
                            <h3 className="text-xl font-heading font-semibold mb-4 md:mb-6 md:text-2xl">Progetti recenti</h3>
                            <div className="relative">
                                <div className="flex overflow-x-auto scrolling-auto gap-4 md:gap-6 -mx-6 px-6">
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/892bc3d3-a7b8-49b3-9b72-7e28561c4a3a">
                                        <div
                                            title="New artwork by Jeff Henriquez, Huetek, Free Humanity."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/9/92ef72d7-98b6-4a54-96e3-bad5880246de/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Jeff Henriquez, Huetek, Free Humanity</span>
                                        <time
                                            className="block text-gray-500 font-normal">2 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/3ee8556a-27bd-4efa-b950-8556e717888a">
                                        <div
                                            title="New artwork by Secaone."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/3/3cf748a2-d06b-4d18-aaa0-4a3201cdf65a/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Secaone</span>
                                        <time
                                            className="block text-gray-500 font-normal">4 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/b96eb14b-f7c3-4eac-85a1-3be6d4b69792">
                                        <div
                                            title="New artwork by Sonny Sundancer."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/5/57eb784a-127f-43c6-9f82-c03a667caf5d/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Sonny Sundancer</span>
                                        <time
                                            className="block text-gray-500 font-normal">4 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/e090f2bc-f33a-4561-85b5-2f890e1b1957">
                                        <div
                                            title="New artwork by Jason Naylor."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/9/927681ff-5c98-4426-bcef-c1c3f3c21856/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Jason Naylor</span>
                                        <time
                                            className="block text-gray-500 font-normal">4 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/b586fcf6-2e39-4e76-9ce7-ec9dee0431d2">
                                        <div
                                            title="New artwork by manuelalejandronyc."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/d/d6ece3f3-ac0c-40d1-a06e-175f3659d4a7/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by manuelalejandronyc</span>
                                        <time
                                            className="block text-gray-500 font-normal">4 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/1a61905c-5fef-44f7-9bf3-8fb9b95b5008">
                                        <div
                                            title="New artwork by Frokenstarkskonst."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/4/4d3fe848-ca3f-4137-9a68-1d673c43445a/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Frokenstarkskonst</span>
                                        <time
                                            className="block text-gray-500 font-normal">5 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/a4fd4c51-7731-457f-9186-60d62916a0dd">
                                        <div
                                            title="New artwork by Crips."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/c/c737b44e-e235-4e1a-a020-5506c2f232da/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Crips</span>
                                        <time
                                            className="block text-gray-500 font-normal">6 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/8897ea8e-8e3b-460e-a074-01d792c6ce77">
                                        <div
                                            title="New artwork by Sceb."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/6/6a9b39af-959e-4533-bc85-3d4f3c648036/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Sceb</span>
                                        <time
                                            className="block text-gray-500 font-normal">6 hours ago</time>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold group transition text-gray-700 hover:text-gray-900"
                                        href="https://streetartcities.com/markers/e75c0994-9072-4af2-afdd-47a6afa9d015">
                                        <div
                                            title="New artwork by Peter Phobia."
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-lg shadow-sm group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/e/ec4ea143-a88d-4d38-9053-2e995d7930ac/512.jpg&quot;)"
                                        }}></div>
                                        <span
                                            className="block max-h-[2rem] md:max-h-[3.6rem] overflow-hidden overflow-ellipsis"
                                            style={{}}>New artwork by Peter Phobia</span>
                                        <time
                                            className="block text-gray-500 font-normal">6 hours ago</time>
                                    </Link>
                                </div>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 -mr-6 w-6 md:w-12 bg-gradient-to-l from-white"></div>
                            </div>
                            {/* <h3
                                className="text-xl font-heading font-semibold mb-4 md:mb-6 md:text-2xl mt-10">Ultimi report</h3>
                            <div className="relative">
                                <div className="flex overflow-x-auto scrolling-auto gap-4 md:gap-6 -mx-6 px-6">
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold text-center group transition text-gray-700 hover:text-gray-900"
                                        href="/cities/losangeles">
                                        <div
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-full group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/tiles/losangeles/thumbnail.jpg&quot;)"
                                        }}></div>Los Angeles<div className="font-normal text-gray-500">United States</div>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold text-center group transition text-gray-700 hover:text-gray-900"
                                        href="/cities/melbourne">
                                        <div
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-full group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/tiles/melbourne/thumbnail.jpg&quot;)"
                                        }}></div>Melbourne<div className="font-normal text-gray-500">Australia</div>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold text-center group transition text-gray-700 hover:text-gray-900"
                                        href="/cities/newyork">
                                        <div
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-full group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/tiles/newyork/thumbnail.jpg&quot;)"
                                        }}></div>New York City<div className="font-normal text-gray-500">United States</div>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold text-center group transition text-gray-700 hover:text-gray-900"
                                        href="/cities/antwerp">
                                        <div
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-full group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/tiles/antwerp/thumbnail.jpg&quot;)"
                                        }}></div>Antwerp<div className="font-normal text-gray-500">Belgium</div>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold text-center group transition text-gray-700 hover:text-gray-900"
                                        href="/cities/bergen">
                                        <div
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-full group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/tiles/bergen/thumbnail.jpg&quot;)"
                                        }}></div>Bergen<div className="font-normal text-gray-500">Norway</div>
                                    </Link>
                                    <Link
                                        className="w-24 md:w-36 flex-none text-xs md:text-sm leading-snug font-semibold text-center group transition text-gray-700 hover:text-gray-900"
                                        href="/cities/ghent">
                                        <div
                                            className="w-24 h-24 md:w-36 md:h-36 bg-center bg-no-repeat bg-cover bg-gray-300 mb-3 rounded-full group-hover:shadow-lg transition group-hover:opacity-90"
                                            style={{
                                            "backgroundImage": "url(&quot;https://streetartcities.com/media/tiles/ghent/thumbnail.jpg&quot;)"
                                        }}></div>Ghent<div className="font-normal text-gray-500">Belgium</div>
                                    </Link>
                                </div>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 -mr-6 w-6 md:w-12 bg-gradient-to-l from-white"></div>
                            </div> */}
                        </section>    </main>
  )
}
