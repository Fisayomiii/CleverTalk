import React from 'react';

const SignIn = ({ handleSignIn }) => {
    return (
        <>
            <center>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-full max-w-xs">
                        <h4 className="font-semibold py-2 px-4 mb-5">Sign in with Google to use <br /> Clevertalk</h4>
                        <button type="button" class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 transition-all" onClick={handleSignIn}>
                            <i class=' bx bxl-google bx-sm mr-2' ></i>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </center>
        </>
    )
}

export default SignIn