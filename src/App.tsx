import "./styles.css";
import { getJsonData } from "./getJsonData";

export default function App() {
  const onClickUsers = () => {
    getJsonData();
  };

  const onClickUser = () => {
    alert("bbbb");
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>jsonData</button>
      <br />
      <br />
      <button onClick={onClickUser}>id=1のuser</button>
    </div>
  );
}
