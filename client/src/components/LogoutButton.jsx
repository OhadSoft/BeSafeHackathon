import { useNavigate } from "react-router";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("besafe_user");
    navigate("/");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "15px",
        right: "15px",
        zIndex: 1000
      }}
    >
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#FF4D4D",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
