import { FiXCircle } from "react-icons/fi";
import "./index.css";

export function ValueCard({ value, removeValue }) {
  return (
    <li className="list flex">
      <div className="separator">
        <p className="list-name">{value.title}</p>
        <p className="list-description">{value.type}</p>
      </div>
      <div className="separator">
        <p className="list-value">{value.amount}</p>
        <FiXCircle
          className="detele_value_button"
          onClick={() => removeValue(value.title)}
        />
      </div>
    </li>
  );
}
