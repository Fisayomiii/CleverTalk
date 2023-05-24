import React, { useRef, useState } from "react";
import { sendMessageToOpenAI } from "./Openai";
import toast from 'react-hot-toast';
import Chatmessage from "./Chatmessage";
import ChatInput from "./ChatInput";
import Info from "./Info";
import popsound from "../assets/Sound/notification.mp3";

function Main() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("messages");
        return savedMessages ? JSON.parse(savedMessages) : [];
    });
    // when message is sent , users should not be able to click on the button untilafter responce is gotten
    const [isSending, setIsSending] = useState(false);

    // Ref for scrollIntoView
    // const scroll = useRef();

    const [notificationAudio] = useState(new Audio(popsound));

    const playNotificationSound = () => {
        notificationAudio.play();
    };

    const handleMessageSubmit = async () => {
        if (input === "") {
            toast.error("Input is empty!");
            navigator.vibrate(700);
        } else {
            setIsSending(true);

            const userMessage = { text: input, isUser: true };
            toast.promise(sendMessageToOpenAI(input), {
                loading: "Sending message...",
                success: (response) => {
                    const aiMessage = { text: response, isUser: false };
                    playNotificationSound();

                    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
                    setInput("");

                    // add Ai message to localStorage
                    localStorage.setItem(
                        "messages",
                        JSON.stringify([...messages, userMessage, aiMessage])
                    );

                    setIsSending(false); // enable the button after message is sent

                    // scrollIntoView
                    // scroll.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
                },
                error: (error) => {
                    setIsSending(false); // enable the button after message is sent
                    toast.error(`Error: ${error.message}`);
                },
            });
        }
    };


    // const suretoClearLocalStorage = () => {
    //     toast.custom((t) => (
    //         <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`} >
    //             <div className="flex-1 w-0 p-4">
    //                 <div className="flex items-start">
    //                     <div className="flex-shrink-0 pt-3">
    //                         ❓
    //                     </div>
    //                     <div className="ml-3 flex-1">
    //                         <p className="mt-1 text-sm text-gray-500">
    //                             You Sure want to delete all messages? <br />
    //                             This action is inreversible
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="flex border-l border-gray-200">
    //                 <button onClick={handleClearLocalStorage}
    //                     className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm focus:bg-gray-200"
    //                 >
    //                     🚮
    //                 </button>
    //             </div>
    //         </div>
    //     ))
    // };

    const handleClearLocalStorage = () => {
        localStorage.removeItem("messages");
        setMessages([]);
        toast.success("Cleared All Messages");
    };

    return (
        <>
            <div className="flex flex-col flex-auto h-full p-2">
                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-5 border border-gray-300" >
                    {/* <audio src={popsound} /> */}

                    {messages.length > 0 ? <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <div className="flex flex-col h-full">
                            <Chatmessage messages={messages} />
                            <br /><br /><br /><br />
                        </div>
                        {/* <div ref={scroll}></div> */}

                    </div> :
                        <Info />
                    }

                    {messages.length > 0 && (
                        <center>
                            <button onClick={handleClearLocalStorage} className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-0 py-1 mb-3 p-20 flex-shrink-0 w-44">Clear Conversations</button>
                        </center>
                    )}

                    <ChatInput input={input} setInput={setInput} handleMessageSubmit={handleMessageSubmit} handleClearLocalStorage={handleClearLocalStorage} messages={messages} isSending={isSending} />

                </div>
            </div>

        </>
    )
}

export default Main;