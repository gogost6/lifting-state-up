import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Calculator from "./components/Calculator/Calculator";
import StarWars from "./components/StarWars/StarWars";

function App() {
  return (
    <Routes>
      <Route path={'/'} exact element={<Calculator />}/>
      <Route path={'/calculator'} element={<Calculator />}/>
      <Route path={'/starwars'} element={<StarWars/>}/>
    </Routes>
    );
}

export default App;
