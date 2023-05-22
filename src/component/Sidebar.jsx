import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";

function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="isolate">

                <div onClick={() => setMobileMenuOpen(true)}>
                    <span className="flex lg:hidden absolute text-white text-4xl top-5 right-12 cursor-pointer" title="open mobile menu">
                        <i className="bx bx-menu bx-sm px-3 p-3 bg-indigo-500 hover:bg-indigo-600 rounded-md"></i>
                    </span>
                </div>

                <div className="hidden lg:flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">

                    <div className="flex flex-row items-center justify-center h-12 w-full" title="CleverTalk">
                        <div className="flex items-center justify-center rounded-2xl text-[#1C98F7] bg-indigo-100 h-10 w-10" >
                            <i className="bx bx-conversation bx-sm" ></i>
                        </div>
                        <div className="ml-2 font-bold text-2xl">CleverTalk</div>
                    </div>

                    <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg" >
                        <div className="h-20 w-20 rounded-full border overflow-hidden">
                            <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" alt="Avatar" className="h-full w-full" />
                        </div>
                        <div className="text-sm font-semibold mt-2">CleverTalk</div>
                        <div className="text-xs text-gray-500">Chief of propaganda</div>
                        <div className="flex flex-row items-center mt-3">
                            <div className="flex flex-col justify-center h-4 w-8 bg-green-500 rounded-full">
                                <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                            </div>
                            <div className="leading-none ml-1 text-xs">Active</div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br />
                    <center >
                        <div className="flex items-center justify-center w-[120px]" title="Star on Github">
                            <a href="https://github.com/Fisayomiii/CleverTalk/stargazers" target="_blank" rel="noreferrer">

                                <button type="button" className="flex items-center w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100">
                                    <i className="mr-2 bx bx-star"></i>
                                    Star
                                </button>
                            </a>

                            <div className="w-full px-4 py-2 text-base font-medium text-black bg-white border rounded-r-md hover:bg-gray-100">
                                <i className="bx bxl-github bx-sm" ></i>
                            </div>
                        </div>
                        {/* <div className="w-full max-w-xs mt-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-11 rounded"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </button>
                        </div> */}
                    </center>

                </div>

                {/* mobile menu */}
                <Transition
                    appear show={mobileMenuOpen} as={Fragment}
                >
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-x-5"
                            enterTo="opacity-100 translate-x-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-x-2"
                            leaveTo="opacity-0 translate-x-1"
                        >
                            <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto backdrop-blur px-1 py-1 lg:hidden">



                                <div className="flex lg:hidden flex-col py-8 pl-3 pr-5 w-64 h-screen bg-white flex-shrink-0 ">

                                    <div className="flex items-center justify-between">
                                        <Transition.Child as={Fragment} show={mobileMenuOpen} enter="transition ease-out duration-500"
                                            enterFrom="opacity-0 delay-3 translate-y-10"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-10">
                                            <div className="flex flex-row items-center justify-center h-12 w-full" title="CleverTalk">

                                            <div className="h-8 w-8 rounded-full border overflow-hidden">
                                                <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" alt="Avatar" className="h-full w-full" />
                                            </div>

                                                <div className="ml-2 font-bold text-1xl">CleverTalk</div>

                                            </div>
                                        </Transition.Child>

                                        <span className="flex lg:hidden absolute text-white text-4xl top-5 right-12 cursor-pointer" onClick={() => setMobileMenuOpen(false)} title="close mobile menu">
                                            <i className="bx bx-x bx-sm px-3 p-3 bg-indigo-500 hover:bg-indigo-600 rounded-md"></i>
                                        </span>
                                    </div>

                                    <Transition.Child
                                        as={Fragment}
                                        show="true"
                                        enter="transform transition duration-[600ms] "
                                        enterFrom="opacity-0  scale-50"
                                        enterTo="opacity-100  scale-100"
                                        leave="transform duration-200 transition ease-in-out"
                                        leaveFrom="opacity-100 scale-100 "
                                        leaveTo="opacity-0 scale-95 "
                                    >
                                        <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg" >
                                            <div className="h-10 w-10 rounded-full border overflow-hidden">
                                                <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" alt="Avatar" className="h-full w-full" />
                                            </div>
                                            <div className="text-sm font-semibold mt-2">CleverTalk</div>
                                            <div className="text-xs text-gray-500">Chief of propaganda</div>
                                        </div>
                                    </Transition.Child>

                                    <center className='relative top-56 bottom-0'>
                                        <div className="flex items-center justify-center w-[120px]" title="Star on Github">
                                            <a href="https://github.com/Fisayomiii/CleverTalk/stargazers" target="_blank" rel="noreferrer">

                                                <button type="button" className="flex items-center w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100">
                                                    <i className="mr-2 bx bx-star"></i>
                                                    Star
                                                </button>
                                            </a>

                                            <div className="w-full px-4 py-2 text-base font-medium text-black bg-white border rounded-r-md hover:bg-gray-100">
                                                <i className="bx bxl-github bx-sm" ></i>
                                            </div>
                                        </div>
                                    </center>



                                </div>
                            </Dialog.Panel>
                        </Transition.Child>

                    </Dialog>

                </Transition>



            </div>

        </>
    )
}

export default Sidebar;