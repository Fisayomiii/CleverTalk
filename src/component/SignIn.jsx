import React from 'react';

const SignIn = ({ handleSignIn }) => {
    return (
        <>
            <center>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-full max-w-xs">
                        <h4 className="font-semibold py-2 px-4 mb-5">Sign in with Google to use <br/> Clevertalk</h4>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                            onClick={handleSignIn}
                        >
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </center>
        </>
    )
}

export default SignIn