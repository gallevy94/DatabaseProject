import React from "react";
import "./List.css";

export const List = ({ clients, handleDelete }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>IP</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, i) => (
            <tr key={client.id}>
              <td>{i + 1}</td>
              <td>{client.ID}</td>
              <td>{client.Name}</td>
              <td>{client.Email}</td>
              <td>{client.Phone}</td>
              <td>{client.IP}</td>
              <td>
                <button onClick={() => handleDelete(client.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
