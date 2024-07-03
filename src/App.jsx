import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Rander from "./componets/Rander";

import { Home, About, Project } from "./pages";
import Navbar from "./componets/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
      <Rander />
    </main>
  );
};

export default App;
