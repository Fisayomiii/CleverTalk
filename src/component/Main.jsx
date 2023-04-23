import React, { useState } from "react";
import { sendMessageToOpenAI } from "./Openai";

function Main() {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = async () => {
        const response = await sendMessageToOpenAI(input);
        setMessages([
            ...messages,
            { text: input, isUser: true },
            { text: response, isUser: false },
        ]);
        setInput("");
        // console.log(response);
    };

    return (
        <>
            <div className="flex flex-col flex-auto h-full pt-5">

                <div className="flex flex-col flex-auto flex-shrink-0 rounded-xl bg-gray-100 h-full " >
                    <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <div className="flex flex-col h-full">
                            {messages.map((message, index) => (
                                <div className={message.isUser ? "w-full text-gray-800 dark:text-gray-100 bg-[#E0E7FF]" : "w-full text-gray-800 dark:text-gray-100 bg-[#F3F4F6]"} key={index}>
                                    <div className="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-3 md:py-6 flex lg:px-0">
                                        <div className="w-[30px] flex flex-col relative items-end">
                                            <div className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" >
                                                <img alt="user" src={message.isUser ? "https://ionicframework.com/docs/img/demos/avatar.svg" : "https://cryptologos.cc/logos/chatcoin-chat-logo.png"} className="rounded-lg" />
                                            </div>
                                        </div>

                                        <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                                            <div className="flex flex-grow flex-col gap-3">
                                                <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                                                    <div className="markdown prose w-full break-words dark:prose-invert dark">
                                                        <p> {message.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
                            <button className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-4 py-1 flex-shrink-0" title="Send message" onClick={handleMessageSubmit}>
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

const Chatmessage = ({ message }) => {
    return (
        <div className="w-full text-gray-800 dark:text-gray-100 ">
            <div className="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
                <div className="w-[30px] flex flex-col relative items-end">
                    <div className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" >
                        <img alt="user" src={message.user === "gpt" ? "https:cryptologos.cc/logos/chatcoin-chat-logo.png" : " https:ionicframework.com/docs/img/demos/avatar.svg"} className="rounded-lg" />
                    </div>
                </div>

                <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                    <div className="flex flex-grow flex-col gap-3">
                        <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                            <div className="markdown prose w-full break-words dark:prose-invert dark">
                                <p>{message.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

// https://ionicframework.com/docs/img/demos/avatar.svg https://cryptologos.cc/logos/chatcoin-chat-logo.png