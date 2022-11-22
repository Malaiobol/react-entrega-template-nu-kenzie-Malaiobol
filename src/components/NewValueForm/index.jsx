import { useState } from "react";
import "./index.css";

export function NewValue({ addNewValue }) {
  const [isValue, setNewValue] = useState({
    title: "",
    amount: Number,
    type: "entrada",
  });

  function createNewValue(event) {
    event.preventDefault();
    setNewValue({
      title: "",
      amount: Number,
      type: "entrada",
    });
    addNewValue(isValue);
  }

  return (
    <form className="new-value-container" onSubmit={createNewValue}>
      <div className="separator header_container">
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
      <div className="inputs-container">
        <div className="value-container">
          <label htmlFor="amount">Valor</label>
          <input
            name="amount"
            type="number"
            value={isValue.amount}
            required
            className="amount_input"
            placeholder="1"
            onChange={(event) =>
              setNewValue({ ...isValue, amount: event.target.value })
            }
          />
        </div>
        <div className="type-container">
          <label htmlFor="">Tipo de valor</label>
          <select
            className="type_value"
            onChange={(event) =>
              setNewValue({ ...isValue, type: event.target.value })
            }>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="pink_button" type="submit">
        Inserir valor
      </button>
    </form>
  );
}
