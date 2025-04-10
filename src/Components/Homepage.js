import picture from "../picture.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Separator.css";

function Homepage() {
  return (
    <div>
      <div
        className="card mb-3"
        style={{ width: "fit-content", margin: "1.5% auto" }}
      >
        <div class="row g-0">
          <div class>
            <h5 class=" text-center fs-1">Portfolio Introduction</h5>
            <p class="text-center fs-5">
              Hi my name is Laban Bishop and this is my portfolio, I am a
              programmer and developer. In this portfolio you'll be able to my
              projects, what kind of programming work I do, my qualifications
              and contacts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
