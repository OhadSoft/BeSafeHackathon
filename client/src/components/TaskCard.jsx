import PropTypes from "prop-types";

function TaskCard({ title, score, total, color, onUpdate }) {
  const reachedGoal = score >= total;
  const percent = total ? Math.min(100, (score / total) * 100) : 0;

  const handleClick = () => {
    if (onUpdate) onUpdate();
  };

  return (
    <div
      style={{
        border: `2px solid ${color}`,
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center",
        margin: "10px",
        backgroundColor: "white",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <h3>{title}</h3>

      <div style={{ fontSize: "24px", fontWeight: "bold", color, margin: "10px 0" }}>
        {score} / {total}
      </div>

      {/* Optional: a progress bar that caps visually at 100% */}
      <div style={{ width: "100%", backgroundColor: "#eee", borderRadius: 10, height: 10 }}>
        <div
          style={{
            width: `${percent}%`,
            backgroundColor: color,
            height: "100%",
            borderRadius: 10,
            transition: "width 0.3s"
          }}
        />
      </div>

      {reachedGoal && (
        <div style={{ marginTop: 8, fontWeight: "bold" }}>
          🎉 Weekly goal reached!
        </div>
      )}

      <button
        onClick={handleClick}
        style={{
          marginTop: 12,
          padding: "10px 20px",
          backgroundColor: color,
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold"
        }}
      >
        Update
      </button>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  color: PropTypes.string,
  onUpdate: PropTypes.func
};

export default TaskCard;
