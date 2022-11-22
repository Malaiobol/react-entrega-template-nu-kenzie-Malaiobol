import "./index.css";
import { ValueCard } from "./ValueCard";

export function ValueList({ valueList, removeValue, setFilter }) {
  return (
    <section className="resume-container">
      <div className="resume_header flex">
        <p className="description">Resumo Financeiro</p>
        <div className="buttons-container">
          <button
            type="button"
            className="gray_button"
            onClick={() => setFilter("todos")}>
            Todos
          </button>
          <button
            type="button"
            className="gray_button"
            onClick={() => setFilter("entrada")}>
            Entradas
          </button>
          <button
            type="button"
            className="gray_button"
            onClick={() => setFilter("saida")}>
            Despesas
          </button>
        </div>
      </div>
      <ul className="resume-list">
        {valueList.length ? (
          valueList.map((value, index) => (
            <ValueCard key={index} value={value} removeValue={removeValue} />
          ))
        ) : (
          <li className="list">
            <p>Você ainda não tem nenhum lançamento!</p>
          </li>
        )}
      </ul>
    </section>
  );
}
