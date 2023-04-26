import React, { useState } from "react";
import { sendMessageToOpenAI } from "./Openai";
import toast, { Toaster } from 'react-hot-toast';
import Chatmessage from "./Chatmessage";

function Main() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("messages");
        return savedMessages ? JSON.parse(savedMessages) : [];
    });

    const handleMessageSubmit = async () => {
        if (input === "") {
            toast.error("Input is empty!")
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
                },
            });
        };
    };

    const suretoClearLocalStorage = () => {
        toast.custom((t) => (
            <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`} >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-3">
                            ❓
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                You Sure want to delete all messages? <br />
                                This action is inreversible
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button onClick={handleClearLocalStorage}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm focus:bg-gray-200"
                    >
                        🚮
                    </button>
                </div>
            </div>
        ))
    };

    const handleClearLocalStorage = () => {
        localStorage.removeItem("messages");
        setMessages([]);
        toast.success("Cleared All Messages");
    };

    return (
        <>
            <div className="flex flex-col flex-auto h-full p-2">
                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-5 border border-gray-300" >
                    <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <div className="flex flex-col h-full">
                            <Chatmessage messages={messages} />
                        </div>
                    </div>
                    
                    {messages.length > 0 && (
                        <center>
                            <button onClick={suretoClearLocalStorage} className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-4 py-1 mb-3 p-20 flex-shrink-0 w-44">Clear Messages</button>
                        </center>
                    )}

                    <div className="relative flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 p-6">
                        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600" >
                            <i className="bx bxs-microphone bx-sm"></i>
                        </button>
                        <div className="flex-grow ml-4">
                            <div className=" w-full" title="Type a prompt">
                                <input type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)} className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <button class="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-2 py-1 flex-shrink-0" title="Send message" onClick={handleMessageSubmit}>
                                <span><i class="bx bxs-send "></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default Main;