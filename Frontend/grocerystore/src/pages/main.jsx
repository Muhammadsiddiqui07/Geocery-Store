import React from 'react';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../Assests/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { Button } from 'antd';
import backgroundImage from '../Assests/back.png'
import image from '../Assests/front.png'



const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Contact', href: '#' },
    { name: <FaCartShopping />, href: '#' },
]

export default function MainPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-gray-900">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Grocery Store</span>
                            <img
                                alt=""
                                src={logo}
                                className="h-20 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">

                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center">

                        <div className="flex gap-4">
                            {/* Solid Button */}
                            <Button type="success"
                                className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg 
    hover:bg-white hover:text-green-600 hover:border hover:border-green-600 
    focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition duration-200"
                            >
                                <a href="#" className="text-sm font-semibold">
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </a>
                            </Button>

                            {/* Outline Button */}
                            <Button type="success"
                                className="rounded-md bg-white border border-green-600 px-4 py-2.5 text-sm font-semibold text-green-600 shadow-lg 
    hover:bg-green-600 hover:text-white 
    focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition duration-200"
                            >
                                <a href="#" className="text-sm font-semibold">
                                    Register
                                </a>
                            </Button>
                        </div>


                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src={logo}
                                    className="h-12 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

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