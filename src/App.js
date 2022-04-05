import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Explore from "./components/Explore/Explore";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
