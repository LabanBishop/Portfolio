import picture from "./picture.svg";
import "./App.css";
import Navbar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card mb-3" style={{ width: "fit-content", margin: "1.5% auto" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src= {picture} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Portfolio Introduction</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
