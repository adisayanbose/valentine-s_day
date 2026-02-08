
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import FlyingHearts from "./components/Flyinghearts";

const App = () => {
  return (
    <div
      className="bg-pink-300 w-screen h-screen flex 
    justify-center items-center Scroll-none"
    >
        <FlyingHearts />
        <FlyingHearts />
        <FlyingHearts />
        <FlyingHearts />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
