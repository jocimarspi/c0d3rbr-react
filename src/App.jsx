import First from "./components/basics/First";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import RandomNumber from "./components/Random";


const App = () => {
  return (
    <div>
      <h1>React JS Fundamentals</h1>
      <RandomNumber min={5} max={199} />
      <Fragment />
      <WithParameter title="Third component" subtitle="Uhulll!" />
      <WithParameter title="Second component" subtitle="Very nice!" />
      <First />      
    </div>
  );
}

export default App;