import picture from "../picture.svg";
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

function Homepage() {
  const classes = useStyles();
  return (
    <div>
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
                Hi my name is Laban Bishop and this is my portfolio, I am a
                programmer and developer. in this portfolio you'll be able to
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

export default Homepage;