import Cust from "./components/Cust";
import Data from "./components/Data";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cust></Cust>} />
          <Route path="/details" element={<Data></Data>} />
          <Route path="/update/:id" element={<Update></Update>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
