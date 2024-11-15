import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import Catalogue from "./components/catalogue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id/*" element={<Catalogue />} />
    </Routes>
  );
}

export default App;
