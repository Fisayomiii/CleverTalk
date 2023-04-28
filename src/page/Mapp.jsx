import React from 'react';
import Main from '../component/Main';
import Sidebar from '../component/Sidebar';

function Mapp() {
  return (
    <>
      {/* <!-- component --> */}
        <div className="md:flex h-screen w-full">
          <Sidebar/>
          <Main />
        </div>
    </>
  )
}

export default Mapp