import React from "react";
import { Client } from "../types";


const cardStyle: React.CSSProperties = { border: "1px solid #ddd", padding: "12px", borderRadius: 8, marginBottom: 8 };


export const ClientCard: React.FC<{ client: Client }> = ({ client }) => {
return (
<div style={cardStyle}>
<h3>{client.name}</h3>
<div>Country: {client.country}</div>
<div>Email: {client.email ?? "(not provided)"}</div>
</div>
);
};