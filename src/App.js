import List from "./components/List";
import Wiki from "./components/Wiki";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Translate from "./components/Translate";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useState } from "react";

const color = [
  {
    lable: 'The Color Red',
    value: 'red'
  },
  {
    lable: 'The Color Green',
    value: 'green'
  },
  {
    lable: 'The Color Blue',
    value: 'blue'
  }
];

function App() {
  const [selected, setSelected] = useState(color[0]);
  return (
    <Router>
      <div>
        <Header />


        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/dropdown" element={<Dropdown temp={'color'} selected={selected} onSelectedChange={setSelected} color={color} />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
