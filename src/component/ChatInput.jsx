import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ChatInput = ({ input, setInput, handleMessageSubmit, isSending }) => {
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
            <div className="relative bottom-0 left-0 flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 p-6">
                <button className={isListening ? "flex items-center justify-center text-green-400" : "flex items-center justify-center text-red-400"} onClick={handleToggleListening} title={isListening ? "Turn Off Mic" : "Turn On Mic"}>
                    {!isListening ?
                        <ion-icon name="mic-off-outline" size="small"></ion-icon> : <ion-icon name="mic-outline" size="small"></ion-icon>
                    }

                </button>
                <div className="flex-grow ml-4">
                    <div className=" w-full" title="Type a prompt">
                        <input type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)} className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                    </div>
                </div>
                <div className="ml-4">
                    <button className="flex items-center justify-center bg-[#1C98F7] hover:bg-[#1C98F7] rounded-xl text-white px-2 py-1 flex-shrink-0" title={isSending ? "Sending..." : "Send Message "} onClick={handleMessageSubmit} disabled={isSending}>
                        <span><i className="bx bx-send "></i></span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col px-3 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4">
                <span>Not affiliated with or endorsed by <a href="https://openai.com" target="_blank" rel="noreferrer" className="underline">OpenAI</a></span>
                <span>Designed and Developed by <a href="https://twitter.com/999tweets_her" target="_blank" rel="noreferrer" className="underline">Fisayomi</a> with React and Tailwind</span>
            </div>
        </>
    )
}

export default ChatInput;