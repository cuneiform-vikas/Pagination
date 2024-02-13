import React from "react";

const Table = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>PHONE</th>
            <th>UNIVERSITY</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.university}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
