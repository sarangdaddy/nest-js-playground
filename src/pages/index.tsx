import type { NextPage } from 'next';

const schedule = [
  { key: 16, day: 'Mon' },
  { key: 17, day: 'Tue' },
  { key: 18, day: 'Wed' },
  { key: 19, day: 'Thu' },
  { key: 20, day: 'Fri' },
  { key: 21, day: 'Sat' },
];

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-orange-400">
      <div className="w-4/1 h-3/4 rounded-2xl bg-white p-4">
        <div className="flex items-center space-x-1 border-b border-gray-400 p-1">
          <span className="block text-sm">March 2021</span>
          <span className="block">
            <svg
              className="w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="p-3">
          <center>
            <h3>Hello, Bruno!</h3>
            <h4>Your medicines for today</h4>
          </center>
        </div>
        <ul className="mb-14 grid grid-cols-6">
          {schedule.map((day) => (
            <li
              className="flex cursor-pointer flex-col items-center rounded-2xl p-2 hover:bg-blue-500"
              key={day.key}
            >
              <div className="text-lx font-semibold">{day.key}</div>
              <div className="text-xs">{day.day}</div>
            </li>
          ))}
        </ul>
        <div className="grid-row-2 grid gap-1">
          <div className="group relative h-40 w-full cursor-pointer">
            <div className="absolute z-20 flex h-full w-full flex-col justify-between rounded-lg bg-yellow-200 transition-all duration-300 group-hover:w-[80%]">
              <div className=" flex flex-col p-3">
                <span className="text-lg">Nora - BE</span>
                <span className="text-xs">Norenthindrone - 0.35mg</span>
              </div>
              <div className="p-3">
                <span className="text-sm">7h30AM</span>
              </div>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-row-reverse rounded-lg bg-blue-500 p-3 opacity-0 transition-all duration-300 group-hover:opacity-100 ">
              <svg
                className="w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
          <div className="group relative h-40 w-full cursor-pointer">
            <div className="absolute z-20 flex h-full w-full flex-col justify-between rounded-lg bg-green-200 transition-all duration-300 group-hover:w-[80%]">
              <div className=" flex flex-col p-3">
                <span className="text-lg">Feosol</span>
                <span className="text-xs">Ferrous Sulfate - 600mg</span>
              </div>
              <div className="p-3">
                <span className="text-sm">7h30AM</span>
              </div>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-row-reverse rounded-lg bg-pink-500 p-3 opacity-0 transition-all duration-300 group-hover:opacity-100 ">
              <svg
                className="w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
