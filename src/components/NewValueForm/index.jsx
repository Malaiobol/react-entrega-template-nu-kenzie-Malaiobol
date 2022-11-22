import { useState } from "react";
import "./index.css";

export function NewValue({ addNewValue }) {
  const [isValue, setNewValue] = useState({
    title: "",
    amount: "",
    type: "entrada",
  });

  function createNewValue(event) {
    event.preventDefault();
    setNewValue({
      title: "",
      amount: "",
      type: "entrada",
    });
    addNewValue(isValue);
  }

  return (
    <form className="new-value-container" onSubmit={createNewValue}>
      <div className="separator">
        <p className="input_name">Descrição</p>
        <input
          type="text"
          className="valueDescritpion"
          value={isValue.title}
          required
          onChange={(event) =>
            setNewValue({ ...isValue, title: event.target.value })
          }
        />
        <label htmlFor="ValueDescription" className="value_description_label">
          Ex: Compra de roupas
        </label>
      </div>
      <div className="buttons-container">
        <div className="separator">
          <label htmlFor="">Valor</label>
          <input
            type="number"
            value={isValue.amount}
            required
            onChange={(event) =>
              setNewValue({ ...isValue, amount: event.target.value })
            }
          />
        </div>
        <div className="separator">
          <label htmlFor="">Tipo de valor</label>
          <select
            onChange={(event) =>
              setNewValue({ ...isValue, type: event.target.value })
            }>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
        <button className="pink_button" type="submit">
          Inserir valor
        </button>
      </div>
    </form>
  );
}
