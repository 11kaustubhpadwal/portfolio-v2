import { Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Page from "./components/Page";
import Projects from "./pages/Projects";

function App() {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Navigate to={"/about"} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Page>
  );
}

export default App;
