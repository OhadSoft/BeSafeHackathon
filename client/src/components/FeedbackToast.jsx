import PropTypes from "prop-types";

function FeedbackToast({ type = "success", message, onClose }) {
    if (!message) return null;

    const background = type === "error" ? "#FF4D4D" : "#00C851";

    return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 3000,
        backgroundColor: background,
        color: "white",
        padding: "12px 16px",
        borderRadius: 10,
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        maxWidth: "min(700px, 92vw)"
      }}
      role="status"
      aria-live="polite"
    >
      <div style={{ fontWeight: "bold" }}>{message}</div>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: 18,
          cursor: "pointer",
          lineHeight: 1
        }}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

FeedbackToast.propTypes = {
  type: PropTypes.oneOf(["success", "error"]),
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default FeedbackToast;