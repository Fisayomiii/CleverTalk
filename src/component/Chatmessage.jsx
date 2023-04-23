import React from 'react'

const Chatmessage = () => {
    return (
        <>
            <div className="col-start-1 col-end-12 sm:col-end-8 rounded-lg">
                <div className="flex flex-row items-center">
                    <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" alt="Avatar" className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0" />
                    <div className=" ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl" >
                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis natus odit quo mollitia alias et praesentium. Voluptatibus optio molestias necessitatibus atque nostrum tempora, aliquid nesciunt numquam laborum alias doloribus adipisci?</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatmessage