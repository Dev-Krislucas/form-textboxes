// import "./index.js";
import ScriptTag from "react-script-tag";

let Comp = () => {
  return (
    <>
      <ScriptTag type="text/javascript" src="./index.js" />
      <h1 id="ranbir">Chodu Bhagat</h1>
      <input type="text" name="textBox"></input>
      <input type="text" name="textBox"></input>
      <input type="text" name="textBox"></input>
      <button type="submit" disabled id="jesus">
        Submit{" "}
      </button>
    </>
  );
};
export default Comp;
