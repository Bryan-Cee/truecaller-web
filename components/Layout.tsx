import React from 'react';
import Message from './Message';
import Search from './Search';

const Layout = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col min-w-[27rem]">
        <div className="flex h-full w-full flex-col overflow-y-scroll">
          <Search />
          <div className="flex flex-col">
            {Array(23)
              .fill(1)
              .map((i) => (
                <Message key={i} />
              ))}
          </div>
        </div>
      </div>
      <div className="bg-custom-fill-1 flex-grow rounded-lg p-2 min-w-[33.75rem]">
        <div className="bg-white rounded-md h-full">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h3 className="font-bold text-4xl py-4">Truecaller for Web</h3>
            <p className="text-center">
              Search or start a new conversation. Get updates for all new
              messages by keeping desktop notifications turned on.
            </p>
            <button className="uppercase font-bold text-lg bg-blue-500 text-white py-4 px-6 rounded-md my-4">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
