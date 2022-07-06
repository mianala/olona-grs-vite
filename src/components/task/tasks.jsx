import React from "react";
import { useEffect, useState } from "react";
import classes from "./tasklayout.module.sass";

export default function Tasks() {
  const [users, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const usersReq = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const response = await usersReq.json();
      setUser(response);
    };
    getUser();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <h1 className="font-extrabold text-xl">TACHES A FAIRE</h1>
        <span className={`${classes.spacer}`}></span>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-85 max-w-xs"
        />
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-85 max-w-xs"
        />
      </div>
      <hr />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>username</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(({ id, name, username, email }) =>
              id % 2 === 0 ? (
                <tr className="active">
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                </tr>
              ) : (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2">
        <h1 className="font-extrabold text-xl">TACHES A FAIRE</h1>
        <span className={`${classes.spacer}`}></span>
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-85 max-w-xs"
        />
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-85 max-w-xs"
        />
      </div>
      <hr />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>username</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(({ id, name, username, email }) =>
              id % 2 === 0 ? (
                <tr className="active">
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                </tr>
              ) : (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
