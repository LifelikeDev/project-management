import React from "react";
import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-3" style={{ fontSize: "16px" }}>Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" />
          <span style={{marginLeft: '5px'}}>{client.name}</span>
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" />
          <span style={{marginLeft: '5px'}}>{client.email}</span>
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" />
          <span style={{marginLeft: '5px'}}>{client.phone}</span>
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
