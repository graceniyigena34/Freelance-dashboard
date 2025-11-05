import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const cardStyle = { border: "1px solid #ddd", padding: "12px", borderRadius: 8, marginBottom: 8 };
export const ClientCard = ({ client }) => {
    return (_jsxs("div", { style: cardStyle, children: [_jsx("h3", { children: client.name }), _jsxs("div", { children: ["Country: ", client.country] }), _jsxs("div", { children: ["Email: ", client.email ?? "(not provided)"] })] }));
};
