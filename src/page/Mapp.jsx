import React from 'react';
import Main from '../component/Main';
import Sidebar from '../component/Sidebar';

function Mapp({ handleSignOut, photoURL, email }) {
  return (
    <>
      {/* <!-- component --> */}
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <Sidebar handleSignOut={handleSignOut} />
          <Main photoURL={photoURL} email={email} />
        </div>
      </div>
    </>
  )
}

export default Mapp