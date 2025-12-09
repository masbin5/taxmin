export function Button({ children }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "#FF6D1F",
        color: "white",
        borderRadius: 8,
        border: "none",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
