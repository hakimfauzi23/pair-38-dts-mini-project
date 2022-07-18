import "./App.css";
import { DetailMovie } from "./pages/DetailMovie";
import { Homepage } from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
      </Routes>
    </>
  );
}

export default App;
