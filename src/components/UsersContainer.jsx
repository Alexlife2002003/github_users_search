import React from "react";
import { Link } from "react-router-dom";
import LoadingSkeletonUsersContainer from "./LoadingSkeletonUsersContainer";

const UsersContainer = ({ users }) => {
  return (
    <>
      {users ? (
        <div className="flex gap-5 flex-wrap justify-center  py-5">
          {users.map((user, idx) =>
          
            user.login ? (
              
              <div
                key={idx}
                className="flex w-[200px] border border-gray-500 bg-gray-900 p-3 flex-col items-center"
              >
                
                <img
                  src={user.avatar_url}
                  className="w-24 mb-4 border-4  border-blue-400 rounded-full"
                />

                <h1 className="text-xl">{user.login}</h1>
                <h1 className="text-xs text-blue-400">{user.name}</h1>
                <Link to={`/${user.login}`}>
                  <span
                    className="text-gray-200 font-semibold rounded block px-4 py-1 bg-blue-600 my-3 tracking-wide"
                  >
                    View
                  </span>
                </Link>
              </div>
            ) : (
              <div key={idx} className="text-lg">
                No user
              </div>
            )
          )}
        </div>
      ) : (
        <LoadingSkeletonUsersContainer />
      )}
    </>
  );
};

export default UsersContainer;