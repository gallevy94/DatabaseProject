import React, { useState, useRef, useEffect } from "react";
import "./Add.css";
import { createApi } from "../../api";

export const Add = ({ clients, setclients, setIsAdding }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ip, setIp] = useState("");
  const api = createApi();

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!id || !name || !email || !phone || !ip) {
      return alert("Please fill out all fields!");
    } else {
      const newClient = {
        Name: name,
        Email: email,
        ID: id,
        Phone: phone,
        IP: ip,
      };
      api.addUser(newClient);
      const tempClients = clients;
      tempClients.unshift(newClient);
      setclients(clients);
      setIsAdding(false);
      alert("Success! " + name + "'s data has been Added.");
    }
  };

  return (
    <div className="main-wrapper">
      <form onSubmit={handleAdd}>
        <h1 className="header-add">Add Client</h1>
        <div className="fields">
          <label for="id">ID</label>
          <input
            ref={textInput}
            id="id"
            type="number"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label for="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="phone">Phone Number</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label for="ip">IP Address</label>
          <input
            id="ip"
            type="number"
            name="ip"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <div className="submit">
            <input className="btn-submit" type="submit" value="Add" />
            <input
              className="btn-cancel"
              type="button"
              value="Cancel"
              onClick={() => setIsAdding(false)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
