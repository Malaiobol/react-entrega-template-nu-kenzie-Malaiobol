import "./index.css";

export function TotalValue({ values }) {
  const positiveValues = values
    .filter(({ type }) => type === "entrada")
    .reduce((accumulator, { amount }) => accumulator + Number(amount), 0);
  const negativeValues = values
    .filter(({ type }) => type === "saida")
    .reduce((accumulator, { amount }) => accumulator + Number(amount), 0);
  const totalBalance =
    positiveValues > negativeValues || positiveValues === 0
      ? positiveValues - negativeValues
      : `Seu saldo está negativado em ${positiveValues + negativeValues} reais`;

  return (
    <div className="total-value-container">
      <h3 className="total_value">
        Valor total:
        <span className="value">
          {totalBalance.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </h3>
      <p className="total_value_phrase">O valor se refere ao saldo</p>
    </div>
  );
}
