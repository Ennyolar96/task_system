import "./App.css";
import Categories from "./components/categories";
import Navbar from "./components/navbar";
import Tasks from "./components/tasks";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-4 container">
        <h5 className="fw-bold h5">What's up, Olivia!</h5>
      </div>
      <div className="mt-4">
        <Categories />
      </div>
      <div className="mt-4">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
