import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
