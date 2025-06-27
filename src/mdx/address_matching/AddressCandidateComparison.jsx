import React from "react";

/**
 * Compact component that compares a single messy address with a list of
 * candidate addresses, allowing portions of each address to be arbitrary JSX.
 *
 * @param {{ messyAddress: React.ReactNode; candidates: Array<{ address: React.ReactNode; isMatch: boolean }> }} props
 */
export default function AddressCandidatesComparison({
    messyAddress,
    candidates = [],
}) {
    const preStyle = {
        margin: 0,
        padding: "0.25rem",
        background: "#f3f4f6", // tailwind slate-100
        borderRadius: "0.25rem",
        fontFamily: "monospace",
        fontSize: "0.85rem",
        whiteSpace: "pre-wrap",
        lineHeight: 1.3,
    };

    const labelStyle = {
        fontWeight: 600,
        fontSize: "0.75rem",
        color: "#374151", // tailwind slate-700
        letterSpacing: "0.01em",
    };

    return (
        <div
            style={{
                border: "1px solid #d1d5db", // tailwind slate-300
                borderRadius: "0.25rem",
                padding: "0.75rem",
                maxWidth: "40rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.85rem",
            }}
        >
            {/* Messy address */}
            <div>
                <span style={labelStyle}>Messy address</span>
                <pre style={{ ...preStyle, marginTop: "0.25rem" }}>
                    {messyAddress}
                </pre>
            </div>

            {/* Candidate addresses */}
            <div>
                <span style={labelStyle}>Candidate addresses</span>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                        marginTop: "0.25rem",
                    }}
                >
                    {candidates.map(({ address, isMatch }, idx) => {
                        const matchColor = "#16a34a"; // tailwind green-600
                        const nonMatchTextColor = "#7f1d1d"; // tailwind red-800
                        return (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    border: isMatch
                                        ? `1px solid ${matchColor}`
                                        : "1px solid transparent",
                                    borderRadius: "0.25rem",
                                    padding: "0.25rem",
                                }}
                            >
                                <pre
                                    style={{
                                        ...preStyle,
                                        margin: 0,
                                        color: isMatch ? undefined : nonMatchTextColor,
                                    }}
                                >
                                    {address}
                                </pre>
                                {/* Tick only for the match */}
                                <span
                                    style={{
                                        fontSize: "1.1rem",
                                        lineHeight: 1,
                                        color: isMatch ? matchColor : nonMatchTextColor,
                                        userSelect: "none",
                                        width: "1.25rem",
                                        textAlign: "center",
                                    }}
                                >
                                    {isMatch ? "✅" : ""}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
