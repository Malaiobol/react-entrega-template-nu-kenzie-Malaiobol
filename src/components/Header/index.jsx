import "./index.css";

export function DefaultHeader({ setLogin }) {
  return (
    <header className="flex">
      <h1 className="web_title">Nu Kenzie</h1>
      <button className="gray_button" onClick={() => setLogin(false)}>
        Inicio
      </button>
    </header>
  );
}
