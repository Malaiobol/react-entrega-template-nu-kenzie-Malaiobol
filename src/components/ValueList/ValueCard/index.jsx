import { AiFillDelete } from "react-icons/ai";
import "./index.css";

export function ValueCard({ value, removeValue }) {
  return (
    <li className="list flex">
      <div className="separator">
        <p className="list-name">{value.title}</p>
        <p className="list-description">{value.type}</p>
      </div>
      <div className="separator_delete">
        <p className="list-value">R${value.amount}</p>
        <AiFillDelete
          className="detele_value_button"
          onClick={() => removeValue(value.title)}
        />
      </div>
    </li>
  );
}
