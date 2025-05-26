import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Libbit from "./pages/Libbit";
import CreateLibbitGame from "./pages/createLibbit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:code" element={<Libbit />}></Route>
        <Route path="/create/libbit" element={<CreateLibbitGame />}></Route>
      </Routes>
    </div>
  );
}

export default App;
