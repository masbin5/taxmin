export function Card({ children }) {
  return (
    <div
      style={{
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 12,
        marginBottom: 20
      }}
    >
      {children}
    </div>
  );
}
