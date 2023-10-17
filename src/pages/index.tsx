import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto flex w-1/2 flex-col rounded-3xl bg-yellow-300 p-5">
        <div className="mb-2 mt-32 border-b-2 border-black font-semibold">
          Select Destination
        </div>
        <div>
          <div className="group flex cursor-pointer items-center space-x-3 ">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all duration-300 ease-in-out group-hover:bg-white ">
              <span className="text-xs text-yellow-300">V</span>
            </div>
            <span className="block text-xl font-bold group-hover:text-white ">
              Vancouver
            </span>
          </div>
          <div className="group flex cursor-pointer items-center space-x-3 ">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all duration-300 ease-in-out group-hover:bg-white ">
              <span className="text-xs text-yellow-300">S</span>
            </div>
            <span className="block text-xl font-bold group-hover:text-white ">
              Seattle
            </span>
          </div>
          <div className="group flex cursor-pointer items-center space-x-3 ">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all duration-300 ease-in-out group-hover:bg-white ">
              <span className="text-xs text-yellow-300">P</span>
            </div>
            <span className="block text-xl font-bold group-hover:text-white ">
              Portland
            </span>
          </div>
          <div className="group flex cursor-pointer items-center space-x-3 ">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all duration-300 ease-in-out group-hover:bg-white ">
              <span className="text-xs text-yellow-300">S</span>
            </div>
            <span className="block text-xl font-bold group-hover:text-white ">
              Seattle
            </span>
          </div>
          <div className="group flex cursor-pointer items-center space-x-3 ">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all duration-300 ease-in-out group-hover:bg-white ">
              <span className="text-xs text-yellow-300">S</span>
            </div>
            <span className="block text-xl font-bold group-hover:text-white ">
              San Francisco
            </span>
          </div>
          <div className="group flex cursor-pointer items-center space-x-3 ">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all duration-300 ease-in-out group-hover:bg-white ">
              <span className="text-xs text-yellow-300">L</span>
            </div>
            <span className="block text-xl font-bold group-hover:text-white ">
              Los Angeles
            </span>
          </div>
          <div className="group flex cursor-pointer items-center space-x-3 ">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-all duration-300 ease-in-out group-hover:bg-white ">
              <span className="text-xs text-yellow-300">S</span>
            </div>
            <span className="block text-xl font-bold group-hover:text-white ">
              San Diego
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
