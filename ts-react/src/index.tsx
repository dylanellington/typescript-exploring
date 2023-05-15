import { createRoot } from "react-dom/client";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Main as TicTacToe } from "./TicTacToe/Main"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/tictactoe" element={<TicTacToe/>}/>
    </Routes>
  </BrowserRouter>
);

function Index() {
  return (
    <div>
      Projects
    </div>
  );
}
