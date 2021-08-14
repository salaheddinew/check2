import logo from "./logo.svg";
import "./App.css";
import First from "./component/colum/First/First";
import Header from "./component/colum/Header/Header";
import Exo from "./component/colum/states/Exo";
import Classique from "./component/colum/Check/classique";

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <div className="contd">
    //     <First />
    //   </div>
    // </div>
    // <div>
    //  <Exo />
    // </div>
    <div>
      <Classique />
    </div>
  );
}

export default App;
