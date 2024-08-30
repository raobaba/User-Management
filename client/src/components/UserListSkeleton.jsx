import React from "react";

const UserListSkeleton = ({ rowCount = 5 }) => {
  return (
    <div className="p-6 overflow-x-auto bg-gray-100 rounded-lg shadow-lg">
      <div role="status" className="animate-pulse">
        <div className="mb-4">
          <div className="flex space-x-4">
            <div className="h-8 bg-gray-200 rounded-full w-12"></div>
            <div className="h-8 bg-gray-200 rounded-full flex-1"></div>
            <div className="h-8 bg-gray-200 rounded-full flex-1"></div>
            <div className="h-8 bg-gray-200 rounded-full flex-1"></div>
            <div className="h-8 bg-gray-200 rounded-full flex-1"></div>
          </div>
        </div>

        {Array.from({ length: rowCount }).map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md mb-4">
            <div className="flex items-center p-4 space-x-4">
              <div className="h-12 bg-gray-300 rounded-full w-12"></div>
              <div className="flex-1 space-y-4">
                <div className="h-4 bg-gray-300 rounded-full max-w-[200px]"></div>
                <div className="h-4 bg-gray-300 rounded-full max-w-[150px]"></div>
                <div className="h-4 bg-gray-300 rounded-full max-w-[250px]"></div>
              </div>
            </div>
          </div>
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default UserListSkeleton;
