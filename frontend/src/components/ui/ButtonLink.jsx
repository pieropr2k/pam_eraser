import { Link } from "react-router-dom";
import "../../css/components-css/ui/Button.css";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="button-link">
    {children}
  </Link>
);
