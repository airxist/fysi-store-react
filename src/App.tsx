import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import Catalogue from "./components/catalogue";
import About from "./components/about";
import Support from "./components/support";
import NotFound from "./components/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/support/*" element={<Support />} />
      <Route path="/:id/*" element={<Catalogue />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
