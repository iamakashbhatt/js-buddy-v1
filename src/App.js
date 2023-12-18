import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./screens/auth";
import Dashboard from "./screens/pages/student/dashboard";
import Home from "./screens/publicPage/home";
import { Articles, Article } from "./screens/publicPage/articles";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* public roots */}
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/" element={<Home />} />
        {/* version 2 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
