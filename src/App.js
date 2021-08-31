
import './App.css';

function App() {
  function fill(control) {
    document.getElementById("main").style.background= "orange";
  }
  function fill1(control) {
    document.getElementById("main").style.background= "white";
  }
  function fill2(control) {
    document.getElementById("main").style.background= "green";
  }
  return (
    <div className="App">
      <div id='main'>
        <div id="div1" onClick={(e) => fill("main")}></div>
        <div id="div2" onClick={(e) => fill1("main")}></div>
        <div id="div3" onClick={(e) => fill2("main")}></div>
    </div>
    </div>
  );
}

export default App;
