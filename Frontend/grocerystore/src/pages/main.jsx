import backgroundImage from '../Assests/back.png'
import image from '../Assests/front.png'
import Navbar from "../components/navbar";




export default function MainPage() {

    return (
        <div className="bg-gray-900">

            <Navbar />

            <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-900">
                {/* Background Image */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 overflow-hidden h-[100vh]" // Background height small
                >
                    <img
                        src={backgroundImage}
                        alt="Background Grocery"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                {/* Content Wrapper */}
                <div className="mx-auto max-w-6xl py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">

                    {/* Front Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={image}
                            alt="Fresh Grocery Basket"
                            className="w-100 h-auto drop-shadow-2xl"
                        />
                    </div>

                    {/* Caption */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                            Fresh Groceries, Anytime, Anywhere
                        </h1>
                        <p className="mt-6 text-lg text-gray-200 sm:text-xl">
                            Get fresh fruits, vegetables, and daily essentials delivered
                            straight to your doorstep with our trusted grocery store service.
                        </p>
                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Shop Now
                            </a>
                            <a href="#" className="text-sm font-semibold text-white">
                                Learn More <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}