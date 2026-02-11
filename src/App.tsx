import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/General/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Rota para 404 - Página não encontrada */}
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
