import picture from "./picture.svg";
import "./App.css";
import Navbar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  jss: {
    backgroundColor: "hotpink",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "deeppink",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <div
        className="card mb-3"
        style={{ width: "fit-content", margin: "1.5% auto" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img src={picture} class="img-fluid rounded-start" alt="..." />
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
      <div className="container text-center mt-5">
        <button className={`btn ${classes.jss}`}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
