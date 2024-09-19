import React from "react";

function BuildLayout({ children }) {
  return (
    <div className="text-black min-h-screen flex w-full">
      <div className="max-w-1/3 p-8 h-screen space-y-8">
      <div className="">
        <h1 className="text-8xl">neura.</h1>
        <p className="italic text-xl">
          A web-app for planning out ML/AI projects.
        </p>
      </div>
        <div className="flex space-x-2">
            <button className="w-1/3 py-4 rounded-2xl border-[1px] border-slate-400">Github</button>
            <button className="w-1/3 py-4 rounded-2xl border-[1px] border-slate-400">Donate</button>
            <button className="w-1/3 py-4 rounded-2xl border-[1px] border-slate-400">Waitlist</button>
        </div>
        <div className="">
          <small>Tech stack</small>
          <div className="flex flex-wrap gap-2">
            <div className="px-4 py-2 bg-black text-white rounded-lg drop">
              NextJS
            </div>
            <div className="px-4 py-2 bg-blue-500 text-white rounded-lg drop">
              ReactJS
            </div>
            <div className="px-4 py-2 bg-blue-400 text-white rounded-lg drop">
              Go
            </div>
            <div className="px-4 py-2 bg-yellow-400 text-white rounded-lg drop">
              Python
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className=""></div>
      {children}
      </div>
    </div>
  );
}

export default BuildLayout;
