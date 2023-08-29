import React from "react";

export const Button = ({ color, text, }) => {
    const buttonStyle = {
        color: color,
        backgroundColor: '#e8f369',
        border: `2px solid ${color}`,
        fontSize: '20px',
        borderRadius: '9px',
        display: 'inline-block',
        padding: '20px',
    }
    return (
        <div className="outline-button" style={buttonStyle}>{text}</div>
    )
}