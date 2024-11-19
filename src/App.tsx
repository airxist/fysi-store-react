import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import Catalogue from "./components/catalogue";
import About from "./components/about";
import Support from "./components/support";
import NotFound from "./components/not-found";
import OnboardingPage from "./components/onboarding";
import Private from "./components/_layout/Private";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/onboarding/*" element={<OnboardingPage />} />
      <Route path="/*" element={<Private />} />
      <Route path="/support/*" element={<Support />} />
      <Route path="/catalogue/:id/*" element={<Catalogue />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
