import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-200 w-full min-h-screen text-slate-800">
      <div className="w-full h-auto p-4 absolute top-0 left-0 flex justify-center">
        <div className="md:w-1/2 w-full h-full bg-slate-100/50 backdrop-blur-md border-[1px] border-slate-100 flex rounded-xl">
          <div className="p-4 px-6 border-r-[1px] border-slate-100">
            <h1 className="font-semibold text-slate-100">devlog.</h1>
          </div>
          <div className="flex-1 flex items-center px-6 text-slate-100 font-semibold space-x-6">
            <div className="">
              Home
            </div>
            <div className="">
              Explore
            </div>
            <div className="">
              Top
            </div>
          </div>
          <div className="p-4 px-6 border-l-[1px] border-slate-100">
            <h1 className="font-semibold text-slate-100">Sign up</h1>
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center flex-col bg-gradient-to-br from-blue-700 via-blue-400 to-gray-400">
        <div className="-mt-8">
          <h1 className="font-bold text-7xl text-blue-50">Build in public.</h1>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
