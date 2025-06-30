import React from "react";

/**
 * Compact component that compares two addresses, allowing portions of each
 * address to be arbitrary JSX (e.g. <mark>…</mark>).
 *
 * @param {{ addressA: React.ReactNode; addressB: React.ReactNode; isMatch: boolean }} props
 */
export default function AddressComparison({ addressA, addressB, isMatch }) {
    const colour = isMatch ? "#16a34a" : "#dc2626";
    const word = isMatch ? "match" : "non-match";
    const icon = isMatch ? "✅" : "❌";

    const preStyle = {
        margin: 0,
        padding: "0.25rem",
        background: "#f3f4f6",
        borderRadius: "0.25rem",
        fontFamily: "monospace",
        fontSize: "0.85rem",
        whiteSpace: "pre-wrap",
        lineHeight: 1.3,
    };



    return (
        <div
            style={{
                border: `1px solid ${colour}`,
                borderRadius: "0.25rem",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                maxWidth: "40rem",
            }}
        >
            {/* address column */}
            <div style={{ flex: 1 }}>
                <pre style={preStyle}>{addressA}</pre>
                <pre style={{ ...preStyle, marginTop: "0.35rem" }}>
                    {addressB}
                </pre>
            </div>

            {/* indicator column */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: colour,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    userSelect: "none",
                    minWidth: "4.5rem",
                }}
            >
                <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{icon}</span>
                {word}
            </div>
        </div>
    );
}
