import "./index.css";
import ImgContainer from "./src/ImgContainer.png";

export function DefaultHome({ setLogin }) {
  return (
    <div className="flex main-container">
      <form className="left-container">
        <h1 className="web_title">Nu Kenzie</h1>
        <p className="web_slogan">
          Centralize o controle de suas finanças
          <span className="block">
            <small className="mini_slogan">de forma rápida e segura</small>
          </span>
        </p>
        <button
          className="pink_button"
          type="button"
          onClick={() => setLogin(true)}>
          Iniciar
        </button>
      </form>
      <div className="img-container">
        <img src={ImgContainer} alt="" />
      </div>
    </div>
  );
}
