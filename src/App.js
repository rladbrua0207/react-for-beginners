import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

//App.js는 router를 render함
//router는 URL을 보고있는 component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/movie/:id"} element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
