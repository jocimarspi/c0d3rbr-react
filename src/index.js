import ReactDOM from "react-dom";

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';

import './index.css';

const tag = <strong>Olá React</strong>;

ReactDOM.render(
  <div>
    <First />
    <WithParameter title="Second component" subtitle="Very nice!" />
    <WithParameter title="Third component" subtitle="Uhulll!" />
  </div>,
  document.getElementById("root")
);
