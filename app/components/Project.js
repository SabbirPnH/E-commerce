import React from 'react';

const data = [
  {
    id: 1,
    name: "Samuel Abera",
    description: "Bringing web ideas to life! Full-stack developer with 4 years of experience.",
    componentsCount: 21,
    points: 7700,
    imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c",
    profileUrl: "https://tailwindflex.com/@sammytg7"
  },
  {
    id: 1,
    name: "Samuel Abera",
    description: "Bringing web ideas to life! Full-stack developer with 4 years of experience.",
    componentsCount: 21,
    points: 7700,
    imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c",
    profileUrl: "https://tailwindflex.com/@sammytg7"
  },
  // Add more data objects as needed
];

export default function Project() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900 dark:bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 px-5 sm:px-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex justify-center items-center p-4 border dark:border-gray-400/30 border-gray-400/30 rounded shadow shadow-green-500"
          >
            <div
              className="absolute flex justify-center gap-1 w-10 text-xl font-bold text-center text-green-500 font-semibold dark:bg-white bg-gray-800 rounded -top-2 -left-2"
            >
              <span className="self-end text-sm text-red-500">#</span> {item.id}
            </div>

            <a
              className="w-full overflow-hidden rounded"
              style={{ maxWidth: "100px" }}
              href={item.profileUrl}
            >
              <img
                className="object-cover my-auto rounded w-28 h-28"
                width="200"
                height="200"
                src={item.imageUrl}
                alt={item.name}
              />
            </a>

            <div className="flex flex-col justify-between flex-grow gap-3 px-4 mt-4">
              <div className="w-full ">
                <a
                  href={item.profileUrl}
                  className="font-semibold md:text-xl text-gray-200 dark:text-black"
                >
                  {item.name}
                </a>
                <p className="pt-1 text-sm dark:text-gray-700 text-gray-300">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-1">
                <div className="text-sm dark:text-gray-700 text-gray-400">
                  {item.componentsCount} components
                </div>
                <div
                  title="Total points this month"
                  className="flex items-center gap-1 px-2 py-1 text-xs dark:text-gray-700 rounded cursor-pointer dark:bg-gray-300/30 bg-gray-700/90 text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  <span>{(item.points / 1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
