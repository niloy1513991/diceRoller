import { Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Landing from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
