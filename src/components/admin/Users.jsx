import React from "react";
import { Link } from "react-router-dom";
import me from "../../assets/founder.jpeg";
const Users = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role </th>
              <th>D.O.J.</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i, index) => (
              <tr key={index}>
                <td>#odnmrgokn</td>
                <td>Satyam</td>
                <td>
                  <img src={me} alt="" />
                </td>
                <td>Admin</td>
                <td>{"23-4-23"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
