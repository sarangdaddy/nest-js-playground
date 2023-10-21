import type { NextPage } from 'next';
import Layout from '../components/layout';

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y">
        {[1, 2, 3, 4, 5].map((room, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center space-x-3 px-4 py-3"
          >
            <div className="h-12 w-12 rounded-full bg-slate-200" />
            <div>
              <p className=" text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">See you tomorrow at 2pm</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
