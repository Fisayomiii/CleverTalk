import React from "react";

function Main() {
    return (
        <>
            <div className="flex flex-col flex-auto h-full p-6 pt-5">

                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4" >
                    <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-12 gap-y-2">
                                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <img src="https://www.digitaltrends.com/wp-content/uploads/2023/01/ChatGPT-OpenAI-logo.jpg?p=1" alt="Avatar" className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0" />
                                        <div className=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl" >
                                            <div>Hey How are you today?</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <img src="https://www.digitaltrends.com/wp-content/uploads/2023/01/ChatGPT-OpenAI-logo.jpg?p=1" alt="Avatar" className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0" />
                                        <div className="ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl" >
                                            <div>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Vel ipsa commodi illum saepe numquam maxime
                                                asperiores voluptate sit, minima perspiciatis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-start-1 col-end-13 p-3 rounded-lg">
                                    <div className="flex items-center justify-start flex-row-reverse">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0" >
                                            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0" />
                                        </div>
                                        <div className="mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl" >
                                            <div>I"m ok what about you?</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-start-1 col-end-13 p-3 rounded-lg">
                                    <div className="flex items-center justify-start flex-row-reverse">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0" >
                                            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0" />
                                        </div>
                                        <div className="mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl" >
                                            <div>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing?
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4" >
                        <div>
                            <button className="flex items-center justify-center text-gray-400 hover:text-gray-600" >
                                <i className="bx bxs-microphone bx-sm"></i>
                            </button>
                        </div>
                        <div className="flex-grow ml-4">
                            <div className=" w-full" title="Type a prompt">
                                <input type="text" className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0" title="Send message">
                                <span>Send</span>
                                <span className="ml-2">
                                    <i className="bx bxs-send "></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main