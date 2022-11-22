import React from "react";

const gridtailwind = () => {
  return (
    <div className="grid place-items-center m-h-screen">
      <div className="p-4 max-w-5xl grid gap-4 md:grid-cols-2 sm:p-8 lg:grid-cols-4">
        <h1 className="text-4xl font-extrabold md:col-span-2  sm:grid sm:grid-cols-2 sm:gap-4 lg:col-span-3 lg:text-5xl lg:grid-cols-3">
          <span className="bg-yellow-200 md:col-span-2">
            Grid Layout TailwindCSS
          </span>
        </h1>
        <p className="sm:row-start-2 sm:col-start-2 sm:self-center lg:col-start-1 lg:col-span-2 lg:pr-12 lg:text-lg">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.
        </p>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square lg:col-start-2"></div>
        <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
        <p className="self-center lg:text-lg lg:col-span-2 lg:text-center lg:px-4">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been
        </p>
      </div>
    </div>
  );
};

export default gridtailwind;
