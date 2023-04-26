import React, { useState } from "react";
import { sendMessageToOpenAI } from "./Openai";
import toast, { Toaster } from 'react-hot-toast';
import Chatmessage from "./Chatmessage";
import Sidebar from "./Sidebar";

function Main() {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("messages");
        return savedMessages ? JSON.parse(savedMessages) : [];
    });

    const handleMessageSubmit = async () => {
        if (input === "") {
            toast.error("Input is empty!");
            // console.log(`${JSON.stringify(import.meta.env.VITE_REACT_APP_API_KEY)}`);
        } else {
            const userMessage = { text: input, isUser: true };
            toast.promise(sendMessageToOpenAI(input), {
                loading: "Sending message...",
                success: (response) => {
                    const aiMessage = { text: response, isUser: false };
                    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
                    setInput("");
                    localStorage.setItem("messages", JSON.stringify([...messages, userMessage, aiMessage]));
                },
                error: (error) => {
                    toast.error(`Error: ${error.message}`);
                    console.log(error);
                },
            });
        }
    };

    const handleClearLocalStorage = () => {
        localStorage.removeItem("messages");
        setMessages([]);
        toast.success("Cleared All Messages");
    };


    return (
        <>
            <div className="bg-gray-100 rounded-2xl m-2 border border-gray-300 h-[90%] md:h-full md:w-full p-3">
                <div className="relative h-full" >
                    <div className="">
                        <div className="">
                            <Chatmessage messages={messages} />
                        </div>
                    </div>
                    {messages.length > 0 && (
                        <center><button onClick={handleClearLocalStorage} className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-4 py-1 mb-3 p-20 flex-shrink-0 w-44">Clear Messages</button></center>
                    )}
                    {/* <p>{JSON.stringify(import.meta.env.VITE_REACT_APP_API_KEY)}</p> */}
                    <div className="flex items-center h-16 rounded-xl bg-white w-full px-4 border space-x-3 absolute bottom-2">
                        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600" >
                            <i className="bx bxs-microphone bx-sm"></i>
                        </button>
                        <div className="flex-grow">
                            <div className="w-full" title="Type a prompt">
                                <input type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)} className="flex w-full border rounded-xl focus:outline-none p-3 focus:border-indigo-300 h-10" />
                            </div>
                        </div>
                        <div>
                            <button className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-2 py-1 flex-shrink-0" title="Send message" onClick={handleMessageSubmit}>
                                <span>
                                    <i className="bx bxs-send "></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default Main