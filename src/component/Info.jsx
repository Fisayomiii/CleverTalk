import React from 'react';

function Info() {
    return (
        <>
            <div className="flex-1 overflow-auto">
                <div className=" h-full dark:bg-gray-800">
                    <div className="flex flex-col items-center text-sm dark:bg-gray-800">
                        <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
                            <h1 className="text-2xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-5 flex gap-2 items-center justify-center sm:text-2xl">CleverTalk</h1>
                            <div className="md:flex items-start text-center gap-3.5">
                                <div className="flex flex-col md:mb-auto gap-3.5 flex-1">

                                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                        <i className='bx bxs-bolt'></i>Capabilities</h2>
                                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                                        <li className="w-full bg-gray-50 dark:bg-white/5 p-5 rounded-md">Allows user to provide follow-up corrections</li>
                                        <li className="w-full bg-gray-50 dark:bg-white/5 p-5 rounded-md">Trained to decline inappropriate requests</li>
                                    </ul>
                                </div><br />
                                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                        <i className='bx bxs-sun'></i>Prompts
                                    </h2>
                                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                                        <li className="w-full bg-gray-50 dark:bg-white/5 p-5 rounded-md ">"Got any creative ideas for a 10 year old’s birthday?" </li>
                                        <li className="w-full bg-gray-50 dark:bg-white/5 p-5 rounded-md ">"How do I make an HTTP request in Javascript?" </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                        <i className='bx bxs-radiation'></i>Limitations</h2>
                                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                                        <li className="w-full bg-gray-50 dark:bg-white/5 p-5 rounded-md">May occasionally generate incorrect information</li>
                                        <li className="w-full bg-gray-50 dark:bg-white/5 p-5 rounded-md">Limited knowledge of world and events after 2021</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-32 md:h-48 flex-shrink-0">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;