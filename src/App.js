import "./App.css";
import { Main, FilteredProduct } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filteredProducts/:type" element={<FilteredProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
