import React from 'react';
import Main from '../component/Main';
import Sidebar from '../component/Sidebar';

function Mapp() {
  return (
    <>
      {/* <!-- component --> */}
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  )
}

export default Mapp