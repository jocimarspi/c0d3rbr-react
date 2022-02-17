import ReactDOM from "react-dom";

import First from './components/basics/First';

import './index.css';

const tag = <strong>Olá React</strong>;

ReactDOM.render(
  <div>
    <First />
  </div>,
  document.getElementById("root")
);
