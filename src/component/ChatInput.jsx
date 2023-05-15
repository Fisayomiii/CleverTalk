import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ChatInput = ({ input, setInput, handleMessageSubmit, handleClearLocalStorage, messages, isSending }) => {
    // Hook to get transcript (the speech-to-text)
    const { transcript } = useSpeechRecognition();
    const [lastTranscript, setLastTranscript] = useState(transcript);
    const [isListening, setIsListening] = useState(false);

    // Turns microphone on and off
    function handleToggleListening() {
        if (isListening) {
            SpeechRecognition.stopListening();
            setIsListening(false);
        } else {
            SpeechRecognition.startListening({ continuous: true });
            setIsListening(true);
        }
    }

    // if (!browserSupportsSpeechRecognition) {
    //     return <span>This Browser doesn't support speech recognition.</span>;
    // }

    // Add transcript to input field when transcript changes
    useEffect(() => {
        setTimeout(() => {
            const cleanedTranscript = transcript.trim().replace(/\s+/g, " ");
            if (cleanedTranscript !== lastTranscript) {
                setInput(input + cleanedTranscript.slice(lastTranscript.length));
                setLastTranscript(cleanedTranscript);
            }
        }, 800);
    }, [transcript, input, setInput, lastTranscript]);


    return (
        <>
            {/* {messages.length > 0 && (
                <center>
                    <button onClick={handleClearLocalStorage} className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-4 py-1 mb-3 p-20 flex-shrink-0 w-44">Clear Messages</button>
                </center>
            )}
            <div className="relative bottom-0 left-0 flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 p-6">
                <button className={isListening ? "flex items-center justify-center text-green-400" : "flex items-center justify-center text-red-400"} onClick={handleToggleListening} title={isListening ? "Turn Off Mic" : "Turn On Mic"}>
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
                    <button className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-2 py-1 flex-shrink-0" title="Send message" onClick={handleMessageSubmit}>
                        <span><i className="bx bxs-send "></i></span>
                    </button>
                </div>

            </div> */}

            <div className="flex items-center justify-center">
                <div className="absolute bottom-0 left-0 w-full border-t border-t-0 dark:border-white/20 lg:border-transparent lg:dark:border-transparent lg:bg-vert-light-gradient bg-white dark:bg-gray-800 lg:!bg-transparent dark:lg:bg-vert-dark-gradient pt-2">
                    <div className="ml-[0px] lg:ml-[160px]">

                        {messages.length > 0 && (
                            <center>
                                <button onClick={handleClearLocalStorage} className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-4 py-1 mb-2 mt-1 p-20 flex-shrink-0 w-54">Clear Conversations</button>
                            </center>
                        )}
                        <div className="bg-white px-4 p-3 w-98 rounded-xl stretch mx-2 flex flex-row gap-3 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                            <button className={isListening ? "flex items-center justify-center text-green-400" : "flex items-center justify-center text-red-400"} onClick={handleToggleListening} title={isListening ? "Turn Off Mic" : "Turn On Mic"}>
                                <i className="bx bxs-microphone bx-sm"></i>

                            </button>

                            <div className="flex-grow ml-4">
                                <div className=" w-full" title="Type a prompt">
                                    <input type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)} className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                                </div>
                            </div>

                            <button className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-2 py-1 flex-shrink-0" title={isSending ? "Sending.." : "Send Message"} onClick={handleMessageSubmit} disabled={isSending} >
                                <span><i className="bx bxs-send "></i></span>
                            </button>

                        </div>

                        <div className="flex flex-col px-3 pb-5 pt-3 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-1">
                            <span>Not affiliated with or endorsed by <a href="https://openai.com" target="_blank" rel="noreferrer" className="underline">OpenAI</a></span>
                            <span>Designed and Developed by <a href="https://twitter.com/999tweets_her" target="_blank" rel="noreferrer" className="underline">Fisayomi</a> with React and Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatInput;