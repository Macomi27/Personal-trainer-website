import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PriceList from "./pages/pricelist/PriceList"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PriceList/>} />
      </Routes>
    </Router>
  );
}

export default App;