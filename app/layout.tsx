import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Artveler',
  description: 'Travel the world through art'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
            {children}
            {/* <footer
                className="bg-gray-900 text-gray-500 text-sm hidden-app"
                aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="max-w-4xl mx-auto px-4 text-sm py-12">
                    <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                        <div className="space-y-4 xl:col-span-2 text-gray-300">
                            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <g fill="currentColor" fill-rule="nonzero">
                                    <path
                                        d="M15.608,13.975 C14.825,14.07 13.938,14.53 13.686,15.648 C13.553,16.98 14.313,17.965 15.516,18.086 C16.576,18.193 17.616,17.346 17.723,16.292 C17.855,14.99 17.103,14.12 15.608,13.975 L15.608,13.975 Z M23.49,20.211 L23.49,20.229 C25.595,21.498 27.402,23.233 29.473,24.619 L28.235,26.379 C27.195,25.632 26.141,25.01 25.245,24.212 C19.595,19.177 12.38,19.153 6.742,24.167 C5.963,24.859 5.057,25.409 4.22,26.037 C3.773,26.372 3.434,26.307 3.134,25.842 C2.854,25.408 2.549,24.991 2.326,24.669 C3.682,23.599 4.96,22.555 6.276,21.563 C8.031,20.243 9.14,19.777 8.49,20.141 C8.281,20.258 6.494,17.924 6.257,17.742 C5.5,17.161 4.501,17.496 3.86,18.072 C3.016,18.83 2.107,19.515 1.214,20.217 C1.017,20.371 0.77,20.463 0.437,20.641 C0.275,19.951 0.105,19.347 0.005,18.732 C-0.025,18.544 0.077,18.261 0.219,18.128 C3.656,14.909 7.643,12.763 12.325,11.946 C18.257,10.909 23.598,12.402 28.503,15.696 C29.587,16.424 30.577,17.305 31.538,18.193 C31.739,18.379 31.669,18.913 31.637,19.278 C31.604,19.643 31.462,19.998 31.321,20.538 C30.721,20.126 30.196,19.795 29.706,19.42 C29.2668784,19.0819661 28.8472094,18.7193881 28.449,18.334 C27.634,17.551 26.807,17.07 25.745,17.953 C25.602,18.071 23.825,20.055 23.49,20.211 L23.49,20.211 Z M21.483,19.15 C22.194,18.666 24.035,16.356 24.591,16.1 C24.802,16 24.722,15.85 24.622,15.82 L19.866,14.178 C20.236,15.834 20.238,17.223 19.203,18.614 C19.927,18.724 20.604,18.904 21.246,19.137 L21.483,19.15 L21.483,19.15 Z M10.057,19.15 L10.295,19.137 C10.9564402,18.8947411 11.6405402,18.7195285 12.337,18.614 C11.302,17.223 11.304,15.834 11.674,14.178 C9.94,14.778 8.429,15.298 6.918,15.82 C6.818,15.85 6.738,16 6.95,16.1 C7.506,16.356 9.346,18.666 10.057,19.15 L10.057,19.15 Z M24.614,29.234 C24.572,29.292 24.56,29.324 24.537,29.338 C22.282,30.738 22.909,30.691 21.111,29.159 C19.531,27.813 17.905,26.763 15.734,26.845 C14.123,26.906 12.739,27.478 11.529,28.52 C11.263,28.748 11.017,28.999 10.747,29.222 C8.939,30.716 8.937,30.715 6.879,29.164 C8.774,27.846 10.495,26.279 12.506,25.334 C15.58,23.892 18.646,24.433 21.36,26.529 C22.463,27.38 23.507,28.309 24.614,29.234 L24.614,29.234 Z M6.987,2.807 C7.032,2.748 7.045,2.72 7.067,2.704 C8.934,1.359 9.117,1.362 10.79,2.902 C12.054,4.065 13.41,4.996 15.196,5.172 C17.131,5.362 18.804,4.827 20.275,3.582 C20.809,3.131 21.378,2.714 21.864,2.215 C22.439,1.621 22.986,1.653 23.604,2.095 C23.926,2.325 24.266,2.528 24.674,2.793 C23.185,3.989 21.869,5.245 20.367,6.211 C17.132,8.291 12.727,7.751 9.872,5.135 C8.976,4.315 7.98,3.603 6.987,2.807 Z M9.101,9.687 C8.296,10.019 7.618,10.339 6.911,10.567 C6.704,10.632 6.366,10.493 6.168,10.342 C4.9,9.377 3.654,8.382 2.294,7.314 L3.629,5.452 L9.1,9.687 L9.101,9.687 Z M29.385,7.27 C28.088,8.314 26.881,9.303 25.648,10.259 C25.49,10.382 25.171,10.414 24.974,10.348 C24.343,10.134 23.734,9.854 22.97,9.539 L28.126,5.513 L29.385,7.27 L29.385,7.27 Z M13.098,0.195 C14.898,-0.06 16.654,-0.085 18.451,0.237 C17.965,1.457 17.083,1.987 15.715,1.965 C14.381,1.943 13.555,1.413 13.098,0.195 L13.098,0.195 Z M13.028,31.845 C13.568,30.546 14.508,30.157 15.598,30.104 C16.798,30.045 17.833,30.417 18.538,31.741 C16.688,32.12 14.934,32.018 13.028,31.845 Z M2.736,12.9 C2.126,13.354 1.705,13.713 1.238,13.993 C1.034,14.115 0.626,14.197 0.502,14.085 C0.262,13.868 0.012,13.492 0.026,13.195 C0.054,12.628 0.263,12.069 0.447,11.299 L2.737,12.9 L2.736,12.9 Z M29.306,12.757 L31.273,11.44 C31.434,12.161 31.593,12.74 31.687,13.328 C31.765,13.818 31.292,14.136 30.864,13.875 C30.376,13.577 29.929,13.209 29.305,12.757 L29.306,12.757 Z"></path>
                                </g>
                            </svg>
                            <p className="text-base">La piattaforma collaborativa che promuove la collaborazione e il potenziamento dei luoghi.</p>
                            <div className="flex space-x-6 pt-2">
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                    href="mailto:support@streetartcities.com">
                                    <span className="sr-only">Email</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-6 w-6"
                                        aria-hidden="true">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                </Link>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                    href="https://instagram.com/streetartcities">
                                    <span className="sr-only">Instagram</span>
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                            <p className="text-gray-500 text-xs pt-6">© Copyright Street Art Cities B.V.</p>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
                            <div>
                                <h3 className="font-semibold text-gray-500">Content</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/cities">Browse cities</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/events">Upcoming events</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/about/guides">Our guides</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-gray-400 hover:text-white"
                                            href="https://medium.com/street-art-cities">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-500">Community</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/best-of">Street Art Awards</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/artwork-of-the-day">Daily artwork</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/signup">Join community</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-gray-400 hover:text-white"
                                            href="https://forum.streetartcities.com/?utm_source=sac-footer">Hunter forum</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-500">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/about/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/about/partners">Our partners</Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-400 hover:text-white" href="/legal/acceptable-use">Legal</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </body>
    </html>
  )
}
