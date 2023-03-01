import { useState } from "react";
import { Dialog } from "@headlessui/react";

function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="hidden lg:flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">

                <div className="flex flex-row items-center justify-center h-12 w-full">
                    <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10" >
                        <i class='bx bx-conversation bx-sm' ></i>
                    </div>
                    <div className="ml-2 font-bold text-2xl">CleverTalk</div>
                </div>

                <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg" >
                    <div className="h-20 w-20 rounded-full border overflow-hidden">
                        <img src="https://www.digitaltrends.com/wp-content/uploads/2023/01/ChatGPT-OpenAI-logo.jpg?p=1" alt="Avatar" className="h-full w-full" />
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
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <center>
                    <div class="flex items-center w-[120px] mt-12 pt-12">
                        <button type="button" class="flex items-center w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100">
                            <a href="https://github.com/Fisayomiii/CleverTalk" target="_blank" rel="noreferrer">
                                <i class='mr-2 bx bx-star'></i>
                            </a>
                            Star
                        </button>
                        <div class="w-full px-4 py-2 text-base font-medium text-black bg-white border rounded-r-md hover:bg-gray-100">
                            <i class='bx bxl-github bx-sm' ></i>
                        </div>
                    </div>
                </center>
            </div>


        </>
    )
}

export default Sidebar