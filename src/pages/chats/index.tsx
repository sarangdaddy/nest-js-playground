import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <div className="divide-y-[1px] py-10">
      {[1, 2, 3, 4, 5].map((room, i) => (
        <div
          key={i}
          className="flex cursor-pointer  items-center space-x-3 px-4 py-3"
        >
          <div className="h-12 w-12 rounded-full bg-slate-200" />
          <div>
            <p className=" text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">See you tomorrow at 2pm</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
