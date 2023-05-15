import React from 'react';

const Chatmessage = ({ messages }) => {
    return (
        <>
            {messages.map((message, index) => (
                <div className={message.isUser ? "w-full text-gray-800 border border-gray-300 dark:text-gray-100 bg-[#E0E7FF]" : "w-full text-gray-800 dark:text-gray-100 bg-[#F3F4F6]"} key={index}>
                    <div className="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-3 md:py-6 flex lg:px-0">
                        <div className="w-[30px] flex flex-col relative items-end">
                            <div className="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" >
                                <img alt={message.isUser ? "You" : "Clevertalk"} src={message.isUser ? "https://thumbnail.imgbin.com/18/23/3/imgbin-computer-icons-avatar-others-JaNLsx6VwNkcQWzUrxe87ra3q_t.jpg" : "https://cryptologos.cc/logos/chatcoin-chat-logo.png"} className="rounded-lg" />
                            </div>
                        </div>

                        <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                            <div className="flex flex-grow flex-col gap-3">
                                <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                                    <div className="markdown prose w-full break-words dark:prose-invert dark">
                                        <p>{message.text}</p>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </>
    )
}

export default Chatmessage