import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home.jsx";
import Error from "@/pages/Error/Error.jsx";
import "@/styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;