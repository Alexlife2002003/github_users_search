import React from "react";
import { Link } from "react-router-dom";

const LoadingSkeletonUsersContainer = () => (
  <div className="flex gap-5 flex-wrap justify-center  py-5">
    {/* Create loading skeleton items */}
    {[1, 2, 3, 4].map((index) => (
      <div key={index} className="animate-pulse flex w-[200px] border border-gray-500 bg-gray-300 p-3 flex-col items-center">
        <div className="w-24 h-24 mb-4 bg-gray-500 rounded-full"></div>
        <div className="w-3/4 h-4 mb-2 bg-gray-500 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-500 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-500 rounded mt-2"></div>
        <div className="w-1/2 h-4 bg-gray-500 rounded mt-2"></div>
        <div className="w-1/2 h-4 bg-gray-500 rounded mt-2"></div>
        <div className="w-1/2 h-4 bg-gray-500 rounded mt-2"></div>
      </div>
    ))}
  </div>
);

export default LoadingSkeletonUsersContainer;


