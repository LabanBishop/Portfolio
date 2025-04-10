import picture from "./picture.svg";
import reportWebVitals from './reportWebVitals';
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}
reportWebVitals(console.log);

export default App;
