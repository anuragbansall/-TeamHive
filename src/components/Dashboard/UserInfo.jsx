import React from "react";

function UserInfo({ userData }) {
  return (
    <div className="grid sm:grid-cols-6 place-items-center my-4 bg-zinc-800 text-white font-semibold rounded-xl p-4 hover:brightness-105 text-lg">
      <p className="">{userData?.name}</p>
      <p className="">{userData?.email}</p>
      <p className="hidden sm:block">{userData?.taskCounts.newTaskCount}</p>
      <p className="hidden sm:block">{userData?.taskCounts.activeCount}</p>
      <p className="hidden sm:block">{userData?.taskCounts.completedCount}</p>
      <p className="hidden sm:block">{userData?.taskCounts.failedCount}</p>
    </div>
  );
}

export default UserInfo;
