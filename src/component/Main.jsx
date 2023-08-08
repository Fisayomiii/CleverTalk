import React, { useState } from "react";
import { sendMessageToOpenAI } from "../config/Openai";
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

    const [notificationAudio] = useState(new Audio(popsound));

    const playNotificationSound = () => {
        notificationAudio.play();
    };

    const handleMessageSubmit = async () => {
        if (input === "") {
            toast.error("Input is empty!");
            navigator.vibrate(700);
        } else {
            setIsSending(true); // disable the button after message is sent

            const userMessage = { text: input, isUser: true };
            toast.promise(sendMessageToOpenAI(input), {
                loading: "Sending message...",
                success: (response) => {
                    const aiMessage = { text: response, isUser: false };

                    playNotificationSound(); // play sound when message is being received

                    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
                    setInput("");

                    // add Ai message to localStorage
                    localStorage.setItem(
                        "messages",
                        JSON.stringify([...messages, userMessage, aiMessage])
                    );

                    setIsSending(false); // enable the button after message is sent

                },
                error: (error) => {
                    setIsSending(false); // enable the button after message is sent
                    toast.error(`Error: ${error.message}`);
                },
            });
        }
    };

    // clear all messages function
    const handleClearLocalStorage = () => {
        localStorage.removeItem("messages");
        setMessages([]);
        toast.success("Cleared All Messages");
    };

    // copy to clipboard function
    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Copied to clipboard!");
            })
            .catch((error) => {
                toast.error(`Failed to copy: ${error.message}`);
            });
    };

    return (
        <>
            <div className="flex flex-col flex-auto h-full p-2">
                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-5 border border-gray-300" >
                    {messages.length > 0 ? <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <div className="flex flex-col h-full">
                            <Chatmessage messages={messages} handleCopyToClipboard={handleCopyToClipboard} />
                            <br /><br /><br /><br />
                        </div>
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