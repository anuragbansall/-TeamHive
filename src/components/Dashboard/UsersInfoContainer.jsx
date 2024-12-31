import React from "react";
import UserInfo from "./UserInfo";

function UsersInfoContainer({ usersData }) {
  return (
    <div className="mt-12 w-full">
      {/* Table Header */}
      <div className="grid sm:grid-cols-5 place-items-center text-xl bg-zinc-700 font-semibold text-white rounded-xl p-4">
        <p className="">Name</p>
        <p className="hidden sm:block">New Tasks</p>
        <p className="hidden sm:block">Active Tasks</p>
        <p className="hidden sm:block">Completed Tasks</p>
        <p className="hidden sm:block">Failed Tasks</p>
      </div>

      {/* Table Rows */}
      {usersData?.map((user) => (
        <UserInfo key={user.id} userData={user} />
      ))}
    </div>
  );
}

export default UsersInfoContainer;
