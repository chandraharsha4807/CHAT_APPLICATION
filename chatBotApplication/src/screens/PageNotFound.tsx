import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="d-grid position-center">
      <h1>Page Not found</h1>
      <div>
        <Button
          variant="contained"
          className="mt-3 text-center"
          onClick={() => navigate("/chat")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
